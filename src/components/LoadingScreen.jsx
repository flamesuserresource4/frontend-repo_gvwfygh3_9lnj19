import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen({ onComplete = () => {} }) {
  const percentRef = useRef(null)
  const barRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    // Count from 0 to 100
    tl.fromTo(
      { value: 0 },
      { value: 100, duration: 2, onUpdate: function () {
        if (percentRef.current) {
          percentRef.current.textContent = `${Math.round(this.targets()[0].value)}%`
        }
      } },
      0
    )

    // Progress bar width
    tl.fromTo(
      barRef.current,
      { width: '0%' },
      { width: '100%', duration: 2 },
      0
    )

    // Subtle pulse animation on the number
    tl.to(percentRef.current, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 }, 1.8)

    // Fade out the loader
    tl.to(containerRef.current, { opacity: 0, duration: 0.5, pointerEvents: 'none' })
      .add(() => onComplete())

    return () => tl.kill()
  }, [onComplete])

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center gap-8" style={{ fontFamily: 'Futura, \"Futura PT\", \"Century Gothic\", \"Avant Garde\", Inter, system-ui, sans-serif' }}>
      <div className="flex flex-col items-center gap-4">
        <div ref={percentRef} className="text-6xl md:text-7xl tracking-widest">0%</div>
        <div className="w-72 md:w-96 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div ref={barRef} className="h-full bg-white rounded-full" style={{ width: '0%' }} />
        </div>
      </div>
      <p className="text-sm uppercase tracking-[0.3em] text-white/70">Loading experience</p>
    </div>
  )
}
