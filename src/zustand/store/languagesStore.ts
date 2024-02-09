import { create } from 'zustand'
import type { LanguagesStore } from '../../types'
// import * as dotenv from "dotenv";

// dotenv.config();

export const useLanguagesStore = create <LanguagesStore>((set, get) => ({
  fromLanguage: "auto",
  toLanguage: 'en-US',
  fromText: '',
  result: '',
  loading: false,
  interchangeLanguages: () => {
    const fromLanguage = get().fromLanguage
    if (fromLanguage !== "auto") {
      set((state) => ({
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }))
    }
  },
  languageIsTheSame: () => {
    const fromText = get().fromText
    set((state) => ({
      ...state,
      result: fromText
    }))
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
      console.log("body", body)
      console.log("url", import.meta.env.VITE_API_BACKEND)
      const response = await fetch(import.meta.env.VITE_API_BACKEND, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      console.log("response", response)
      const data = await response.json();
      console.log("data", data);
      set((state) => ({
        ...state,
        result: data.text
      }));
  
    } catch (error) {
      console.error("error", error);
    }
  }
}))
