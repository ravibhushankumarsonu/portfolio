import { useEffect, useState } from 'react'

export type AsyncState<T> = {
  data: T | null
  loading: boolean
  error: string | null
}

/**
 * Runs an async factory and tracks loading/error state, ignoring results from
 * a call that has been superseded or unmounted.
 *
 * `factory` is intentionally not a dependency — content loaders are recreated
 * on every render, and depending on the identity would loop forever. Pass
 * anything that should retrigger the load in `deps` instead.
 */
export function useAsync<T>(factory: () => Promise<T>, deps: unknown[] = []): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false
    setState({ data: null, loading: true, error: null })

    factory().then(
      (data) => {
        if (!cancelled) setState({ data, loading: false, error: null })
      },
      (err: unknown) => {
        if (cancelled) return
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : String(err),
        })
      },
    )

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}

export default useAsync
