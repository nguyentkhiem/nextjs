'use client'
import { ColumnsTable } from '@/types/table.type'
import DataTable from 'react-data-table-component'

export default function Table() {
  const columns: ColumnsTable[] = [
    {
      name: 'Title',
      selector: (row: any) => row.title,
    },
    {
      name: 'Year',
      selector: (row: any) => row.year,
    },
  ]

  const data: any = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]

  return (
    <>
      <h1 className="text-blue-500 font-bold text-2xl">Table</h1>
      <p>Use react data table component liabry</p>

      <DataTable title="Table" columns={columns} data={data} pagination />
    </>
  )
}
