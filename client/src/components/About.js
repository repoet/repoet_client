import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  text: {
    marginTop: 25
  }
}

const About = props => {
  const { classes } = props

  return (
    <div className={classes.text}>
      Save your poems and turn them into non-fungible, tradable POEM tokens!
      Ensure uniqueness - the same poem cannot be stored more than once.
      Plagiarism module installed.
    </div>
  )
}

export default withStyles(styles)(About)