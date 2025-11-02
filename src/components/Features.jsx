import { Rocket, Star, Shield, Gauge } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Lightning-fast loads',
    desc: 'Optimized builds, image strategy, and best practices baked in for speed scores that matter.'
  },
  {
    icon: Gauge,
    title: 'Conversion-first UX',
    desc: 'Layouts and micro-interactions engineered to guide users to action and boost ROI.'
  },
  {
    icon: Shield,
    title: 'Robust foundations',
    desc: 'Clean code, accessibility, and SEO essentials ensure your site scales with your business.'
  },
  {
    icon: Star,
    title: 'Aesthetic minimalism',
    desc: 'Modern, uncluttered visuals that put your value front and center.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white text-black" style={{ fontFamily: 'Futura, \"Futura PT\", \"Century Gothic\", \"Avant Garde\", Inter, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything built for performance and growth</h2>
          <p className="mt-4 text-black/70">We blend strategy, design, and engineering to create websites that look sharp and drive results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm text-black/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
