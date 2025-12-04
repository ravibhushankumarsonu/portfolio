export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type ApiRequestConfig = {
  method?: HttpMethod
  headers?: Record<string, string>
  body?: unknown
}

const DEFAULT_HEADERS: Record<string, string> = {
  'Content-Type': 'application/json',
}

export async function apiRequest<TResponse = unknown>(
  url: string,
  config: ApiRequestConfig = {},
): Promise<TResponse> {
  const { method = 'GET', headers, body } = config

  const response = await fetch(url, {
    method,
    headers: {
      ...DEFAULT_HEADERS,
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || `Request failed with status ${response.status}`)
  }

  // If there is no content, avoid calling json()
  if (response.status === 204) {
    return undefined as TResponse
  }

  return (await response.json()) as TResponse
}


