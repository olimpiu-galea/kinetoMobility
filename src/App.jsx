import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Servicii = lazy(() => import('./pages/Servicii'))
const Despre = lazy(() => import('./pages/Despre'))
const Contact = lazy(() => import('./pages/Contact'))

function Page({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page><Home /></Page>} />
          <Route path="servicii" element={<Page><Servicii /></Page>} />
          <Route path="despre" element={<Page><Despre /></Page>} />
          <Route path="contact" element={<Page><Contact /></Page>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
