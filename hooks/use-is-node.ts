import React from 'react'

export function useIsNode(node: React.ReactNode): boolean {
  return React.useMemo(() => {
    if (typeof node === 'string' || typeof node === 'number') return true
    if (React.isValidElement(node)) return true
    if (Array.isArray(node)) {
      return node.every(
        (n) => React.isValidElement(n) || typeof n === 'string' || typeof n === 'number'
      )
    }
    return false
  }, [node])
}
