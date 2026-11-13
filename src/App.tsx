import { NavProvider, useNav } from './context/NavContext'
import { LangProvider } from './context/LangContext'
import { Navbar } from './components/Navbar'
import { Perfil } from './pages/Perfil'
import { Proyectos } from './pages/Proyectos'
import { Contacto } from './pages/Contacto'
import { Footer } from './components/Footer'
import { Loadder } from "./components/Loadder.tsx";
import './App.css'

function AppContent() {
  const { page, number } = useNav()

  const renderPage = () => {

    switch (page) {
      case 'perfil':
        return <Perfil />
      case 'proyectos':
        return <Proyectos initialIndex={number} />
      case 'contacto':
        return <Contacto />
      }

  }

  return (
    <div className="app">
      <Navbar />
          <main className="main">{renderPage()}</main>
      <Footer />
      <Loadder />
    </div>
  )
}

export default function App() {
  return (
      <LangProvider>
          <NavProvider>
              <AppContent />
          </NavProvider>
      </LangProvider>
  )
}
