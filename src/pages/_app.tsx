import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState("");
  const handleMode = () => {
    setMode(mode => mode === "dark" ? "" : "dark")
  }
  useEffect(()=>{
   setMode(localStorage.getItem("theme") || "")
  },[])
  useEffect(()=>{
    localStorage.setItem("theme",mode)
  },[mode])
  
  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
      </Head>
      <main className={mode}>
        <Component {...pageProps} mode={mode} handleMode={handleMode} />
      </main>
    </>
  )
}
