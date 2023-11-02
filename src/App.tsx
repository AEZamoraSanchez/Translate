import { useLanguagesStore } from './zustand/store/languagesStore'
import { SwitchLanguagesIcon, Logo } from './helpers/Icons.jsx'
import LanguageSelector from './components/LanguageSelector.tsx'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult } = useLanguagesStore()
  return (
    <main className="main-app">
    <header className='header-main'>
      <h1 className='h1-header'> <Logo/> DKA Translate</h1> {/* Título del proyecto de traducción */}
    </header>
      <article className='article-main'>
        <section className='section1-article'> {/* Contenedor izquierdo */}
          <h2 className='h2-section1'>Language: <LanguageSelector onChange={setFromLanguage} type='from' value={fromLanguage}/></h2>
        </section>
        <section className='section2-article'> {/* Contenedor central */}
          <button className='button-section2' disabled={fromLanguage === 'auto'} onClick={interchangeLanguages}>
            <SwitchLanguagesIcon/>
          </button>
        </section>
        <section className='section1-article'> {/* Contenedor derecho */}
          <h2 className='h2-section3'>Language: <LanguageSelector onChange={setToLanguage} type='to' value={toLanguage}/></h2>
        </section>
      </article>
  </main>

  )
}

export default App
