import React, { useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom"

const styles = {
 threeBoxContent: {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex'
 }
}

const Connect3box = props => {
  const history = useHistory()
  const { classes, threeBoxConnected, setName, setEmail, updateProfile, profileName, authenticate3box, getProfile, getName, getStorageData } = props
  useEffect( 
    () => {
      authenticate3box()
      getProfile()
      getName()
      getStorageData()
      closeConnect()
    }, [])
  
  const closeConnect = () => {
    // Go to CREATE page
    history.push('/create')
  }
  
  // TODO: add check to see if wallet is connected
  if (!threeBoxConnected) return (
    <div className={classes.threeBoxContent}>Loading 3box user profile...</div>
  )

  // TODO: Decide whether name & email are useful
  // if (threeBoxConnected && profileName === undefined) return (
  //   <div className={classes.threeBoxContent}>
  //     Customise your 3box profile with your name and email address
  //     <form>
  //      <div><label>Name</label><input id="name" type="text" onChange={e => setName(e.target.value)}></input></div>
  //      <div><label>Email</label><input id="email" type="text" onChange={e => setEmail(e.target.value)}></input></div>
  //      <button onClick={e => updateProfile(e)}>Submit</button>
  //    </form>
  //   </div>
  // )

  if (threeBoxConnected /* && profileName !== undefined */ ) 
  return (
    <div className={classes.threeBoxContent}>
      Welcome{profileName ? `, ${profileName}` : null}! Your 3box profile is all set up
    </div>
  )

}

export default withStyles(styles)(Connect3box)