import React, { useState } from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type Entry = {
  id: number
  fullName: string
  loginName: string
  isEmployee: boolean
  partyName?: string
  status: string
}

const initialData: Entry[] = [
  { id: 1, fullName: 'Anisha Manandhar', loginName: 'anishal23', isEmployee: true, partyName: '-', status: 'Draft' },
  { id: 2, fullName: 'Sunayana Shrestha', loginName: 'sunyanaa_121', isEmployee: false, partyName: 'Global IME Bank', status: 'Approved' },
  { id: 3, fullName: 'Manzil Shakya', loginName: 'manjilshakya', isEmployee: true, partyName: '-', status: 'Rejected' },
  { id: 4, fullName: 'Sulav Adhikari', loginName: 'sulavadi', isEmployee: false, partyName: 'Global IME Bank', status: 'Pending' },
]

function badgeVariant(status: string) {
  switch (status.toLowerCase()) {
    case 'approved':
      return 'default'
    case 'rejected':
      return 'destructive'
    case 'draft':
      return 'secondary'
    default:
      return 'ghost'
  }
}

export default function StaticForm() {
  const [entries, setEntries] = useState<Entry[]>(initialData)
  const [query, setQuery] = useState('')
  const [filterEmployee, setFilterEmployee] = useState<'all' | 'yes' | 'no'>('all')

  

  const filtered = entries.filter((r) => {
    if (filterEmployee === 'yes' && !r.isEmployee) return false
    if (filterEmployee === 'no' && r.isEmployee) return false
    if (query && !`${r.fullName} ${r.loginName} ${r.partyName}`.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  return (
    <div className="p-4">
    

      

      <div className="mb-3 flex items-center gap-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="input" />
        <select value={filterEmployee} onChange={(e) => setFilterEmployee(e.target.value as any)} className="input">
          <option value="all">All</option>
          <option value="yes">Employee</option>
          <option value="no">Non-employee</option>
        </select>
      </div>

      <Table>
        <TableHeader>
          <tr>
            <TableHead>S. No</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Login Name</TableHead>
            <TableHead>Is Employee</TableHead>
            <TableHead>Party Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </tr>
        </TableHeader>
        <TableBody>
          {filtered.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.loginName}</TableCell>
              <TableCell>{row.isEmployee ? 'Yes' : 'No'}</TableCell>
              <TableCell>{row.partyName}</TableCell>
              <TableCell>
                <Badge variant={badgeVariant(row.status)}>{row.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon-sm">👁️</Button>
                  <Button variant="ghost" size="icon-sm">✏️</Button>
                  <Button variant="ghost" size="icon-sm">🗑️</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
