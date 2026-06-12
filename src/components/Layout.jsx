import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingCTA from './FloatingCTA'
import { useReveal } from '../hooks/useReveal'

export default function Layout() {
  useReveal()

  return (
    <div className="app">
      <div className="bg-mesh" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid-overlay" />
      </div>

      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
