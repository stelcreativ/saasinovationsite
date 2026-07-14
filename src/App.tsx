import { Navbar } from './components/Navbar';
import { ValueMatrix } from './components/ValueMatrix';
import { TestimonialTray } from './components/Testimonials';
import './index.css'

function App() {

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center space-y-8 relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="animate-fade-in space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
            The Data Middleware for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Modern Scaling Architectures.
            </span>
          </h1>
        </div>
        <p className="max-w-2xl mx-auto text-slate-400 animate-fade-in delay-200">
          Automate structural ingestion pipelines, visualize live metrics clusters, and scale operations smoothly.
        </p>
      </section>

      {/* 1. Value Matrix KPI Section Block */}
      <ValueMatrix />

      {/* 2. Infinite Testimonial Sliding Tray Section */}
      <TestimonialTray />

    </div>
  )
}

export default App
