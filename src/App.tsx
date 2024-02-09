import { useLanguagesStore } from './zustand/store/languagesStore'
import { SwitchLanguagesIcon } from './helpers/Icons.tsx'
import LanguageSelector from './components/LanguageSelector.tsx'
import { useEffect } from 'react'
import { useDebounce } from './constants.ts'
function App () {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, fromText, useTranslateText, result, languageIsTheSame } = useLanguagesStore()
  const debounceFromText = useDebounce(fromText)

  useEffect(() => {
    const newFromLanguage = fromLanguage === "auto" ? null : fromLanguage
    const body = {
      text: fromText,
      fromLanguage: newFromLanguage,
      toLanguage
    }
    if (debounceFromText !== '') {
      const handleUseTranslateText = async () => {
        if (fromLanguage === toLanguage) { 
          languageIsTheSame() 
          return
        }
        await useTranslateText(body)
        // console.log(body)
      }
      handleUseTranslateText()
    }
  }, [debounceFromText, fromLanguage, toLanguage])


  return (
    <>
    <header className='header-main'>
      <h1 className='h1-header'> AZ Translate</h1> {/* Título del proyecto de traducción */}
      {/* <button onClick={handleTranslate}> traducir </button> */}
    </header>
      <main className='main-app-content'>
          <section className='section1-article'>
            <h2 className='w-fit h-fit'>Language:</h2> <LanguageSelector onChange={setFromLanguage} type='from' value={fromLanguage}/>
          </section>
            <textarea onChange={(e) => setFromText(e.target.value)} autoFocus name="" id="" rows={10} placeholder='Ingresar texto' className=' bg-slate-200 p-[15px] md:col-start-1 md:col-end-3 rounded-md text-2xl'></textarea>
          <button className='button-section2' disabled={ fromLanguage === "auto"} onClick={interchangeLanguages}>
            <SwitchLanguagesIcon/>
          </button>
          <section className='section1-article md:col-start-4 md:row-start-1'>
            <h2 className='w-fit h-fit'>Language:</h2> <LanguageSelector onChange={setToLanguage} type='to' value={toLanguage}/>
          </section>
          <textarea name="" id="" cols={30} rows={10} placeholder='Traduccion' readOnly className=' bg-slate-300 p-[15px] md:col-start-3 md:col-end-[-1] rounded-md text-2xl' value={result}></textarea>
      </main>
      <footer className='flex gap-[15px] items-center justify-items-center justify-center bg-black inset-x-0 bottom-[-20px] m-0 h-[13vh]'>
        <a href="https://www.linkedin.com/in/angel-eduardo-zamora-sanchez-64b84226b/" target="_blank" title="Ir a LinkedIn" className='aFromFooter'>
          <i className="devicon-linkedin-plain iFromFooter"></i>
        </a>
        <a href="https://github.com/AEZamoraSanchez" target="_blank" title="Ir a github" className='aFromFooter'>
          <i className="devicon-github-original iFromFooter"></i>
        </a>
      </footer>
    </>

  )
}

export default App
