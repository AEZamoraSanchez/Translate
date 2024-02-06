import { useLanguagesStore } from './zustand/store/languagesStore'
import { SwitchLanguagesIcon, Logo } from './helpers/Icons.jsx'
import LanguageSelector from './components/LanguageSelector.tsx'

function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult } = useLanguagesStore()
  return (
    <>
    <header className='header-main'>
      <h1 className='h1-header'> DKA Translate</h1> {/* Título del proyecto de traducción */}
    </header>
      <main className='main-app-content'>
          <section className='section1-article'>
            <h2 className='mx-[8%]'>Language: <LanguageSelector onChange={setFromLanguage} type='from' value={fromLanguage}/></h2>
          </section>
            <textarea autoFocus name="" id="" rows={10} placeholder='Ingresar texto' className=' bg-slate-200 p-[15px] md:col-start-1 md:col-end-3 rounded-md text-2xl'></textarea>
          <button className='button-section2' disabled={fromLanguage === 'auto'} onClick={interchangeLanguages}>
            <SwitchLanguagesIcon/>
          </button>
          <section className='section1-article md:col-start-4 md:row-start-1'>
            <h2 className='h2-section3'>Language: <LanguageSelector onChange={setToLanguage} type='to' value={toLanguage}/></h2>
          </section>
          <textarea name="" id="" cols={30} rows={10} placeholder='Traduccion' className=' bg-slate-300 p-[15px] md:col-start-3 md:col-end-[-1] rounded-md text-2xl'></textarea>
      </main>
      <footer className=' bg-black inset-x-0 bottom-[-20px] m-0 h-[10vh]'>Nada</footer>
    </>

  )
}

export default App
