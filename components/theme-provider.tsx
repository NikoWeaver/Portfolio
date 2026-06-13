"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = "theme"

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
  // accept any extra props for backwards compat
  [key: string]: unknown
}) {
  const [theme, setThemeState] = React.useState<Theme>("light")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    let initial: Theme = "light"
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
      if (stored === "light" || stored === "dark") {
        initial = stored
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        initial = "dark"
      }
    } catch {
      // ignore
    }
    setThemeState(initial)
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    root.style.colorScheme = theme
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme, mounted])

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: (t: Theme) => setThemeState(t),
      toggleTheme: () => setThemeState((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) {
    return {
      theme: "light" as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
    }
  }
  return ctx
}
