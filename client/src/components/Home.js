import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  title: {
    fontWeight: 700,
  },
  list: {
    display: 'flex',
    margin: '25px 0',
  },
  listContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    margin: '10px 0',
  },
}

const Home = props => {
  const { classes } = props

  return (
    <div className={classes.list}>
      <div className={classes.listContent}>
        <div className={classes.title}>Key features:</div>
        <ul >
          <li className={classes.listItem}>Save your poems and turn them into unique, tradable POEM tokens!</li>
          <li className={classes.listItem}>Uses an ERC-721 compliant “POEM” token structure.</li>
          <li className={classes.listItem}>Leverages OpenZeppelin token standards such as ERC-20 and EIP-721.</li>
        </ul>
      </div>
    </div>
  )
}

export default withStyles(styles)(Home)