
import { Button } from './components/ui/button'
import { Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,  } from './components/ui/table'

const App = () => {
  return (
    <div>
      <Button>Click me</Button>
      
      <Table className="my-4">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
        </TableBody>
      </Table>  
    </div>
  )
}

export default App
