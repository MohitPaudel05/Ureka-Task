
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import StaticForm from './pages/StaticForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/static-form" element={<StaticForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
