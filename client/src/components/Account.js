import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import ReadPoem from "./ReadPoem"

const styles = {
  text: {
    marginTop: 25
  }
}

const Account = props => {
  const { classes, drizzle, drizzleState, storageData } = props

  return (
    <>
      <div className={classes.text}>
        DRAFTS placeholder
      </div>
      <div className={classes.text}>
        POEMs on the blockchain:
        <ReadPoem drizzle={drizzle} drizzleState={drizzleState} />
      </div>
    </>
  )
}

export default withStyles(styles)(Account)