import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import './style.css'


const LeaderTable = (props) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell numeric>Rank</TableCell>
            <TableCell>User</TableCell>
            <TableCell numeric>Questions Asked</TableCell>
            <TableCell numeric>Questions Answered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell numeric>1</TableCell>
            <TableCell >ME</TableCell>
            <TableCell numeric>4</TableCell>
            <TableCell numeric>5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}

export default LeaderTable