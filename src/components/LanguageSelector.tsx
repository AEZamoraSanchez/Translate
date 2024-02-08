import { allLanguages } from '../constants'
import { type FC } from 'react'
import { type SelectProps, type selectLanguage } from '../types'

const LanguageSelector: FC<SelectProps> = ({ onChange, type, value }) => {
  const handleSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event?.target.value as selectLanguage)
  }
  return (
        <select onChange={ handleSelectLanguage } className='bg-transparent cursor-pointer hover:bg-slate-600' value={value}>
          {
            type === 'from' && <option className='bg-slate-400 cursor-pointer hover:bg-slate-600' value="auto">Detectar Idioma </option>
          }
            {
                Object.entries(allLanguages).map(([key, literal]) => (
                    <option className='bg-slate-400 cursor-pointer hover:bg-slate-600' key={key} value={key}>{literal}</option>
                ))
            }
        </select>
  )
}

export default LanguageSelector
