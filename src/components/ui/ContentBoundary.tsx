import type { ReactNode } from 'react'
import type { AsyncState } from '../../hooks/useAsync'

type ContentBoundaryProps<T> = {
  state: AsyncState<T>
  /** Rendered once content has loaded. */
  children: (data: T) => ReactNode
  loadingLabel?: string
}

/**
 * Single place where loading and error states are rendered, so every page
 * handles async content the same way.
 */
function ContentBoundary<T>({
  state,
  children,
  loadingLabel = 'Loading…',
}: ContentBoundaryProps<T>) {
  if (state.error) {
    return (
      <p className="error-text" role="alert">
        {state.error}
      </p>
    )
  }

  if (state.loading || !state.data) {
    return (
      <p className="muted" aria-live="polite">
        {loadingLabel}
      </p>
    )
  }

  return <>{children(state.data)}</>
}

export default ContentBoundary
