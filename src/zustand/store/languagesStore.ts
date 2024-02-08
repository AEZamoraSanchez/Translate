import { create } from 'zustand'
import type { LanguagesStore } from '../../types'

export const useLanguagesStore = create <LanguagesStore>((set, get) => ({
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
  interchangeLanguages: () => {
    const fromLanguage = get().fromLanguage
    if (fromLanguage !== 'auto') {
      set((state: LanguagesStore) => ({
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }))
    }
  },
  setFromLanguage: (newFromLanguage) => {
    set((state) => ({
      ...state,
      fromLanguage: newFromLanguage
    }))
  },
  setToLanguage: (newToLanguage) => {
    set((state) => ({
      ...state,
      toLanguage: newToLanguage
    }))
  },
  setFromText: (textFrom) => {
    set((state) => ({
      ...state,
      fromText: textFrom,
      result: '',
      loading: false
    }))
  },
  setResult: (resultValue) => {
    set((state) => ({
      ...state,
      result: resultValue,
      loading: false
    }))
  },
  useTranslateText: async (body) => {
    try {
      
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      const data = await response.json();
      console.log(data);
      set((state) => ({
        ...state,
        result: data.text
      }));
  
    } catch (error) {
      console.error(error);
    }
  }
}))
