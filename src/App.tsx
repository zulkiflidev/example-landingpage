import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  // Kak, di sini kita inisialisasi state theme-nya.
  // Kita cek dulu di localStorage apakah user pernah milih theme tertentu.
  // Kalau gak ada, kita default-kan ke 'light' ya!
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem('coffee-theme')
    return savedTheme || 'light'
  })

  // useEffect ini fungsinya buat langsung merubah class di tag HTML (documentElement).
  // Jadi setiap state `theme` berubah, class 'dark' bakal ditambahin atau dihapus,
  // dan kita simpen juga ke localStorage biar awet pilihannya!
  useEffect(() => {
    const root = window.document.documentElement
    
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    localStorage.setItem('coffee-theme', theme)
  }, [theme])

  // Fungsi sederhana buat bolak-balik antara light dan dark mode.
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Kita lempar state theme dan fungsi toggle-nya lewat props ke halaman Home */}
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

