
import React from 'react'
import { Button } from '@/components/ui/button'

const Home = () => {
  function openForm() {
    window.location.href = '/static-form'
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-3">Welcome to the Home page</h1>
      <p className="mb-4">Click the button below to open the static form.</p>
      <Button onClick={openForm}>Open Static Form</Button>
    </div>
  )
}

export default Home
