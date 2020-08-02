// Create a new POEM
// Create NFT

import React, { useState } from "react"
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  inputPoemHeader: {
    boxSizing: 'border-box',
    minWidth: 200,
    minHeight: 75,
    height: 75,
    borderRadius: 6,
    border: 'none',
    outline: 'none',
    fontSize: 16,
    fontFamily: 'Spartan',
    padding: 10,
    overflow: 'scroll',
    resize: 'none',
    whiteSpace: 'pre-wrap',
    marginBottom: 25,
  },
  inputPoem: {
    boxSizing: 'border-box',
    minWidth: 200,
    minHeight: 300,
    height: 300,
    borderRadius: 6,
    border: 'none',
    outline: 'none',
    fontSize: 16,
    fontFamily: 'Spartan',
    padding: 10,
    overflow: 'scroll',
    resize: 'none',
    whiteSpace: 'pre-wrap',
  },
  buttonGroup: {
    margin: '25px 0',
    display: 'flex',
    alignItems: 'center',
  },
  saveButton: {
    cursor: 'pointer',
  },
  submitButton: {
    outline: 'none',
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#ffcb9a',
    height: 38,
    width: 150,
    fontSize: 12,
    fontWeight: 700,
    fontFamily: 'Spartan',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  draftHeader : {
    height: 38,
    fontSize: 12,
    fontWeight: 700,
    fontFamily: 'Spartan',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  drafts: {
    marginTop: 95, 
    marginLeft: 25,
    minHeight: 120,
    padding: 25,
    borderRadius: '6px',
    border: '3px solid #ffffff',
  },
  poemCard: {
    borderRadius: '6px',
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'Spartan',
    // whiteSpace: 'pre-wrap'
  },
  text: {
    marginTop: 25,
  },
}

const WriteNew = props => {

  // TODO: whitespace handling
  // TODO: useEffect to update on new storageData
  // TODO: explain to user what their options are: 1. Save draft, 2. 'Create POEM' to create POEM token!

  const [stackId, setStackID] = useState(null)
  const [poem, setPoem] = useState({title: null, content: null, author: null})
  const { classes, drizzle, drizzleState, threeBoxConnected, savePoem, storageData } = props

  const onSubmit = () => setValue(poem)

  const handleChange = e => {
    e.preventDefault()
    // const newPoem = {}
    // newPoem[e.target.id] = e.target.value
    // console.log(newPoem)
    setPoem({ 
      ...poem,
      [e.target.id]: e.target.value 
    })
  }

  const setValue = value => {
    const contract = drizzle.contracts.MyStringStore
    const stackId = contract.methods["mint"].cacheSend(value, {
      from: drizzleState.accounts[0]
    })
    setStackID(stackId)
  }

  const getTxStatus = () => {
    if (drizzleState) {
      const { transactions, transactionStack } = drizzleState
      const txHash = transactionStack[stackId]
      if (!txHash) return null
      return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`
    }
  }

  const saveDraft = (key, value) => {
    savePoem(key, value)
  }

  // TODO: fix save draft onClick
  // TODO: fix submit onClick (dependent on Repoet.sol)
  // TODO: return "No drafts stored in 3box" if nothing stored
  // TODO: get all keys from storageData object and map poems as cards
  // TODO: save drafts in redux; add button for clearing text areas
  // TODO: make draft poems editable by toggle move to main text area (if it's empty, otherwise save current draft)
  // TODO: responsive view
  // TODO: create button only visible when wallet is connected
  // TODO: save button only visible when 3box is connected

  const getPoemCards = () => <pre className={classes.poemCard}>{storageData['poem-0']}</pre>

  return (
    <Grid container>
      <Grid item container xs={6} direction="column">
        <>
          <div className={classes.buttonGroup}>
            <button className={classes.submitButton} onClick={onSubmit}><span>Create POEM!</span></button>
            <img className={classes.saveButton} src="disk.png" height="45" alt="save button" onClick={() => saveDraft('poem-0', poem)} />
            <div>{getTxStatus()}</div>
          </div>
          <input className={classes.inputPoemHeader} type="text" id="author" placeholder="POEM author" onChange={e => handleChange(e)} /> 
          <input className={classes.inputPoemHeader} type="text" id="title" placeholder="POEM title" onChange={e => handleChange(e)} /> 
          <textarea className={classes.inputPoem} type="text" id="content" placeholder="POEM content" onChange={e => handleChange(e)} /> 
        </> 
      </Grid>
      <Grid item container xs={6} direction="column">
        <div className={classes.drafts}>
          <div className={classes.draftHeader}><span>Drafts</span></div>
          {storageData ? getPoemCards() : <div className={classes.text}>Connect to 3box to see your draft POEMs!</div>} 
        </div>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(WriteNew)
