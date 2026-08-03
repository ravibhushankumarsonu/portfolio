---
# Injected into index.html at build time by the contentHtml plugin in
# vite.config.ts, so crawlers and social scrapers see real tags rather than
# values a client-side script filled in later.
#
# `{{site.*}}` placeholders resolve from site.md.
title: "{{site.name}} — {{site.title}}"
description: >-
  {{site.name}} is a {{site.title}} at {{site.company}} in {{site.location}},
  with 8+ years building high-performance distributed systems, microservices,
  and big-data platforms. Explore projects, experience, and ways to connect.
keywords: "{{site.name}}, Software Engineer, {{site.company}}, {{site.location}}, System Design, Distributed Systems, Microservices, Big Data, Apache Druid, ClickHouse, Java"
ogTitle: "{{site.name}} — {{site.title}} at {{site.company}}"
ogDescription: >-
  8+ years building high-performance distributed systems, microservices, and
  big-data platforms. Projects, experience, and contact.
twitterTitle: "{{site.name}} — {{site.title}} at {{site.company}}"
twitterDescription: >-
  8+ years building high-performance distributed systems, microservices, and
  big-data platforms.
image: /logo.jpg
themeColor: "#10b981"
lang: en
---

Document head metadata. Kept in content so the browser tab, search results, and
link previews can never drift from site.md.
