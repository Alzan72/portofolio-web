import { ref } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'portfolio-lang'

export const useLangStore = defineStore('lang', () => {
  const current = ref('id') // default Indonesian

  if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'id' || saved === 'en') {
      current.value = saved
    }
  }

  const setLang = (lang) => {
    if (lang !== 'id' && lang !== 'en') return
    current.value = lang
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang)
    }
  }

  return {
    current,
    setLang,
  }
})

