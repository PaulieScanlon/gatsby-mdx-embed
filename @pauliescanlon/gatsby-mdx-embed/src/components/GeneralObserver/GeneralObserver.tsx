import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState,
  RefObject
} from 'react'

interface GeneralObserverProps {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void
  height?: number
}

export const GeneralObserver: FunctionComponent<GeneralObserverProps> = ({
  children,
  onEnter,
  height = 400
}) => {
  const ref = useRef<HTMLElement>(null)
  const [isChildVisible, setIsChildVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsChildVisible(true)
          onEnter && onEnter()
        }
      },
      {
        root: null,
        rootMargin: '400px',
        threshold: 0
      }
    )
    if (ref && ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])

  return (
    <div ref={ref as RefObject<HTMLDivElement>}>
      {isChildVisible ? children : <div style={{ height, width: '100%' }} />}
    </div>
  )
}
