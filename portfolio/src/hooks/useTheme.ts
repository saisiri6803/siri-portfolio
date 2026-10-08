import { useState, useEffect } from 'react'

export function useThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleDark = () => setDark((prev) => !prev)

  return { dark, toggleDark }
}