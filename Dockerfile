# syntax=docker/dockerfile:1

# ---- Build stage -----------------------------------------------------------
# Vite 7 needs Node ^20.19 || >=22.12; matches NODE_VERSION in netlify.toml.
FROM node:22-alpine AS build
WORKDIR /app

# Install deps first so this layer is cached until the lockfile changes.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# ---- Runtime stage ---------------------------------------------------------
# The site is fully static, so the final image is just nginx + dist/ (~50MB).
# The unprivileged variant runs as a non-root user and listens on 8080.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
