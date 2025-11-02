import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white text-black" style={{ fontFamily: 'Futura, "Futura PT", "Century Gothic", "Avant Garde", Inter, system-ui, sans-serif' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Web experiences that load fast and convert better
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black/70">
            We design and build modern, high-performing websites for ambitious brands.
            Clean aesthetic, measurable results.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm md:text-base hover:bg-black/90 transition-colors">
              Book a strategy call
            </a>
            <a href="#work" className="inline-flex items-center rounded-full border border-black/20 px-6 py-3 text-sm md:text-base hover:border-black hover:bg-black/5 transition-colors">
              View work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
