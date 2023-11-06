import { type allLanguages, type autoLanguage } from './constants'

export type selectLanguage = keyof typeof allLanguages // el idioma elegido tendra que ser uno de estos idiomas idiomas

type autoSelectLanguage = typeof autoLanguage

type allTypesLanguages = autoSelectLanguage | selectLanguage

export interface LanguagesStore {
  fromLanguage: allTypesLanguages // idioma que queremos traducir
  toLanguage: selectLanguage // idioma al que queremos traducir
  fromText: string // texto que recibe
  result: string // texto de salida
  loading: boolean // pantalla de carga mientras se traduce
  interchangeLanguages: () => avoid // funcion para invertir los idiomas
  setFromLanguage: (newFromLanguage: allTypesLanguages) => avoid // funcion para elegir el lenguaje de entrada
  setToLanguage: (newToLanguage: selectLanguage) => avoid // funcion para elegir el lenguaje de salida
  setFromText: (textFrom: string) => avoid // funcion para establecer el textp a traducir
  setResult: (resultValue: string) => avoid // funcion que establece la traduccionf
}

export type SelectProps = { type: 'from', value: allTypesLanguages, onChange: (language: allTypesLanguages) => void } | { type: 'to', value: selectLanguage, onChange: (language: selectLanguage) => void }
