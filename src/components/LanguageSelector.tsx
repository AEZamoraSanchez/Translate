import { allLanguages } from '../constants'
import { type FC } from 'react'
import { type SelectProps } from '../types'

const LanguageSelector: FC<SelectProps> = ({ onChange }) => {
  const handleSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event?.target.value)
  }
  return (
        <select onChange={ handleSelectLanguage } className='bg-transparent cursor-pointer hover:bg-slate-600'>
            {
                Object.entries(allLanguages).map(([key, literal]) => (
                    <option className='bg-slate-400 cursor-pointer hover:bg-slate-600' key={key} value={key}>{literal}</option>
                ))
            }
        </select>
  )
}

export default LanguageSelector
