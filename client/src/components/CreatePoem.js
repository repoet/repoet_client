import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SetPoem from "./WriteNew"


const styles = {
  
}

const CreatePoem = props => {
  const { classes, drizzle, drizzleState } = props

  return (
    <SetPoem drizzle={drizzle} drizzleState={drizzleState} />
  )
}

export default withStyles(styles)(CreatePoem)