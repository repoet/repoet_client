import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import ReadPoem from "./ReadPoem"

const styles = {
  text: {
    marginTop: 25
  }
}

const Account = props => {
  const { classes, drizzle, drizzleState } = props

  return (
    <div className={classes.text}>
      Placeholder for account holder POEMs
      <ReadPoem drizzle={drizzle} drizzleState={drizzleState} />
    </div>
  )
}

export default withStyles(styles)(Account)