import { type allLanguages, type autoLanguage } from './constants'

type selectLanguage = keyof typeof allLanguages // el idioma elegido tendra que ser uno de estos idiomas idiomas

type autoSelectLanguage = typeof autoLanguage

export interface LanguagesStore {
  fromLanguage: selectLanguage | autoSelectLanguage // idioma que queremos traducir
  toLanguage: selectLanguage // idioma al que queremos traducir
  fromText: string // texto que recibe
  result: string // texto de salida
  loading: boolean // pantalla de carga mientras se traduce
  interchangeLanguages: () => avoid // funcion para invertir los idiomas
  setFromLanguage: (newFromLanguage: selectLanguage | autoSelectLanguage) => avoid // funcion para elegir el lenguaje de entrada
  setToLanguage: (newToLanguage: selectLanguage) => avoid // funcion para elegir el lenguaje de salida
  setFromText: (textFrom: string) => avoid // funcion para establecer el textp a traducir
  setResult: (resultValue: string) => avoid // funcion que establece la traduccionf
}

export interface SelectProps {
  onChange: (language: string) => avoid
  showAuto: boolean
}
