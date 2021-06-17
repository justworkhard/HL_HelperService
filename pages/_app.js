import {
  useEffect
} from 'react'
import '../styles/globals.css'

function MyApp({
  Component,
  pageProps
}) {
  useEffect(() => {
    const resizeFn = e => {
      const windowHeight = window.innerWidth;
      document.documentElement.style.fontSize = `${Math.max(windowHeight / 75, 12)}px`
    }
    resizeFn()
    window.addEventListener("resize", resizeFn);
    return () => {
      window.removeEventListener('resize', resizeFn)
    }
  }, [])
  return <Component {
    ...pageProps
  }
  />
}

export default MyApp