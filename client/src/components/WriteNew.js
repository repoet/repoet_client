// Create a new POEM
// Create NFT

import React, { useState } from "react"
import { withStyles } from '@material-ui/core/styles'

const styles = {
  inputPoem: {
    width: '100%',
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
  },
  buttonGroup: {
    margin: '25px 0',
    display: 'flex',
    alignItems: 'center'
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
  }
}

const WriteNew = props => {
  const [stackId, setStackID] = useState(null)
  const [poem, setPoem] = useState(null)
  const { classes, drizzle, drizzleState, savePoem } = props

  const onSubmit = () => setValue(poem)

  const handleKeyDown = e => setPoem(e.target.value)

  const setValue = value => {
    const contract = drizzle.contracts.MyStringStore
    const stackId = contract.methods["set"].cacheSend(value, {
      from: drizzleState.accounts[0]
    })
    setStackID(stackId)
  }

  const getTxStatus = () => {
    const { transactions, transactionStack } = drizzleState
    const txHash = transactionStack[stackId]
    if (!txHash) return null;
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`
  }

  const saveDraft = (key, value) => {
    savePoem(key, value)
  }

  return (
    <>
      <div className={classes.buttonGroup}>
        <button className={classes.submitButton} onClick={onSubmit}><span>Create POEM!</span></button>
        <img className={classes.saveButton} src="disk.png" height="45" alt="save button" onClick={() => saveDraft('poem-0', JSON.stringify(poem))} />
        <div>{getTxStatus()}</div>
      </div>
      <textarea className={classes.inputPoem} type="text" onKeyDown={e => handleKeyDown(e)} />
    </>
  )
}

export default withStyles(styles)(WriteNew)