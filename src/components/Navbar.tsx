import { useLang } from '../context/LangContext'
import type {Page} from '../types'
import styles from './Navbar.module.css'
import { useNav } from '../context/NavContext'

export function Navbar() {
    const { t, toggleLang } = useLang()
    const { page: currentPage, changePage } = useNav();

  const pages: { key: Page; label: string }[] = [
    { key: 'perfil', label: t.nav.perfil },
    { key: 'proyectos', label: t.nav.proyectos },
    { key: 'contacto', label: t.nav.contacto },
  ]

  return (
    <nav className={styles.nav}>
          <span className={styles.logo}>{t.nav.logo}</span>

          <div className={styles.links}>
              {pages.map(({ key, label }) => (
                  <button
                      key={key}
                      className={`${styles.link} ${currentPage === key ? styles.active : ''}`}
                      onClick={() => changePage(key)}
                  >
                      {label}
                  </button>
              ))}
          </div>

          <button className={styles.langBtn} onClick={toggleLang}>
              {t.nav.langBtn}
          </button>
    </nav>
  )
}
