import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-3">Welcome to the Home page</h1>
      <p className="mb-4">Click the button below to open the static form.</p>
      <Button asChild>
        <Link to="/static-form">Open Static Form</Link>
      </Button>
    </div>
  )
}

export default Home
