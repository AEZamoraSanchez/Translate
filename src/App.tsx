import { useLanguagesStore } from './zustand/store/languagesStore'
import { SwitchLanguagesIcon, Logo } from './helpers/Icons.jsx'
import LanguageSelector from './components/LanguageSelector.tsx'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult } = useLanguagesStore()
  return (
    <main className="main-app">
    <header className='header-main'>
      <h1 className='h1-header'> DKA Translate</h1> {/* Título del proyecto de traducción */}
    </header>
      <article className='article-main'>
          <section className='section1-article grid gap-[5px] md:col-start-1 md:col-end-5 md:row-start-1'>
            <h2 className='h2-section1'>Language: <LanguageSelector onChange={setFromLanguage} type='from' value={fromLanguage}/></h2>
          </section>
            <textarea autoFocus name="" id="" rows={10} placeholder='Ingresar texto' className=' bg-slate-200 p-[15px] md:col-start-1 md:col-end-6 rounded-md text-2xl'></textarea>
        <section className='section2-article md:row-start-1'>{/* Contenedor central */}
          <button className='button-section2' disabled={fromLanguage === 'auto'} onClick={interchangeLanguages}>
            <SwitchLanguagesIcon/>
          </button>
        </section>
          <section className='section1-article grid gap-[5px] md:col-start-7 md:col-end-[-1] md:row-start-1'>
            <h2 className='h2-section3'>Language: <LanguageSelector onChange={setToLanguage} type='to' value={toLanguage}/></h2>
          </section>
          <textarea name="" id="" cols={30} rows={10} placeholder='Traduccion' className=' bg-slate-300 p-[15px] md:col-start-6 md:col-end-[-1] rounded-md text-2xl'></textarea>
      </article>
      <footer className=' bg-black inset-x-0 bottom-[-20px] m-0'>Nada</footer>
  </main>

  )
}

export default App
