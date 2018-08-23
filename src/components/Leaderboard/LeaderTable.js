import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon';
import Trophy from '@material-ui/icons/Trophy';

import './style.css'


const LeaderTable = ({users}) => {
  const sortedUsers = users.sort((a,b) => b.total - a.total)
  return (
    <Paper className='leaderboard'>
      <Table className='leaderboard-table'>
        <TableHead>
          <TableRow>
            <TableCell className='leaderboard-table__cell'>Rank</TableCell>
            <TableCell className='leaderboard-table__name'>User</TableCell>
            <TableCell numeric className='leaderboard-table__cell'>Questions Asked</TableCell>
            <TableCell numeric className='leaderboard-table__cell'>Questions Answered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.map((user, i) => {
            return (
              <TableRow key={i}>
                <TableCell className='leaderboard-table__cell'>{i+1 === 1 ? <Icon><Trophy/></Icon> : i+1 }</TableCell>
                <TableCell className='leaderboard-table__name'>{user.name}</TableCell>
                <TableCell numeric className='leaderboard-table__cell'>{user.questionsLength}</TableCell>
                <TableCell numeric className='leaderboard-table__cell'>{user.answersLength}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default LeaderTable