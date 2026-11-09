import { useEffect } from 'react'

const DEFAULT_TITLE =
  'PCP Innovations | Project reports, FPO management and government scheme support'

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | PCP Innovations` : DEFAULT_TITLE
  }, [title])
}
