
import { useEffect, useState } from 'react'
import routes from './routes/route'
import Home from './pages/Home'
import StaticForm from './pages/StaticForm'

const componentMap = {
  Home,
  StaticForm,
} as const

const App = () => {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const currentRoute = routes.find((route) => route.path === pathname) ?? routes[0]
  const Page = componentMap[currentRoute.componentId as keyof typeof componentMap]

  return (
    <Page />
  )
}

export default App
