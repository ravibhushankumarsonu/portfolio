import { useEffect, useState } from 'react'
import type { ApiRequestConfig } from '../services/api/client'
import { apiRequest } from '../services/api/client'

export type UseApiState<T> = {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useApi<T = unknown>(url: string | null, config?: ApiRequestConfig) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: Boolean(url),
    error: null,
  })

  useEffect(() => {
    if (!url) return

    let cancelled = false

    setState(prev => ({ ...prev, loading: true, error: null }))

    apiRequest<T>(url, config)
      .then(data => {
        if (!cancelled) {
          setState({ data, loading: false, error: null })
        }
      })
      .catch(error => {
        if (!cancelled) {
          setState({ data: null, loading: false, error: error as Error })
        }
      })

    return () => {
      cancelled = true
    }
  }, [url, config])

  return state
}


