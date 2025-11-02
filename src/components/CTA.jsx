export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-black text-white" style={{ fontFamily: 'Futura, \"Futura PT\", \"Century Gothic\", \"Avant Garde\", Inter, system-ui, sans-serif' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to increase conversions?</h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Get a free 20-minute strategy call. We’ll audit your current site and show concrete wins you can implement fast.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:hello@youragency.com" className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm md:text-base hover:bg-white/90 transition-colors">
            hello@youragency.com
          </a>
          <a href="#" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm md:text-base hover:bg-white/10 transition-colors">
            Download capability deck
          </a>
        </div>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Your Web Dev Agency. All rights reserved.</p>
      </div>
    </section>
  )
}
