import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  title: {
    fontWeight: 700,
  },
  imgContainer: {
    position: 'relative',
    color: '#082628',
  },
  list: {
    position: 'absolute',
    top: 50,
    left: 50,
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
  
      <div className={classes.imgContainer}><img width="100%" src="pen.jpg" alt="fountain pen by Art Lasovsky"/>
        <div className={classes.list}>
          <div className={classes.listContent}>
            <div className={classes.title}>Key features:</div>
            <ul >
              <li className={classes.listItem}>Mint your poems as unique POEM tokens.</li>
              <li className={classes.listItem}>Not quite ready to save? Store your draft poems instead using 3box.</li>
              <li className={classes.listItem}>Uses an ERC-721 compliant “POEM” token structure.</li>
              <li className={classes.listItem}>Leverages OpenZeppelin ERC-721 token standard.</li>
            </ul>
          </div>
          You will need to have an Ethereum wallet to save your poems on Repoet.
          Click 'Connect Wallet' and head over to 'Create' to begin!
        </div>
      </div>

  )
}

export default withStyles(styles)(Home)