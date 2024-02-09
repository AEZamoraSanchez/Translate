import { useState, useEffect } from "react"

export const allLanguages = {
  English: 'en-US',
  Spanish: 'es',
  Deutsch: 'de'
}

export const allLanguagesToSend = {
  English: 'en',
  Spanish: 'es',
  Deutsch: 'de'
}
// export const allLanguagesToType = {
//   en: 'English',
//   es: 'Spanish',
//   de: 'Deutsch'
// }

export const autoLanguage = "auto"

export const useDebounce = <T> (value: T, delay = 500) => {
  const [ debounceValue, setDebounceValue ] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => { clearTimeout(timer) }
  }, [value, delay])

  return debounceValue 
   
}
