import { useState } from 'react'
import { LangProvider } from './context/LangContext'
import { Navbar } from './components/Navbar'
import { Perfil } from './pages/Perfil'
import { Proyectos } from './pages/Proyectos'
import { Contacto } from './pages/Contacto'
import type {Page} from './types'
import { Footer } from './components/Footer'
import { Loadder } from "./components/Loadder.tsx";
import './App.css'

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('perfil')

  const renderPage = () => {
    switch (currentPage) {
      case 'perfil':
        return <Perfil />
      case 'proyectos':
        return <Proyectos />
      case 'contacto':
        return <Contacto />
    }
  }

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="main">{renderPage()}</main>
      <Footer />
      <Loadder />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  )
}
