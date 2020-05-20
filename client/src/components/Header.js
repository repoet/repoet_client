import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link, useHistory } from "react-router-dom"

import { threeBoxCloud } from './assets/threeBoxCloud'

const MY_ADDRESS = '0xff904FBaA8f849815616849dE6E9A57C64055105' // Ganache account 2

// TODO hover states
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Spartan',
  },
  smalllogo: {
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontSize: 72,
    fontWeight: 700,
    color: '#ffcb9a',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none',
    color: '#ffcb9a',
    margin: '5px 0'
  },
  donateButton: {
    outline: 'none',
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#86e4cc',
    height: 38,
    width: 150,
    fontSize: 12,
    fontWeight: 700,
    fontFamily: 'Spartan',
    cursor: 'pointer',
    marginRight: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  connectWalletButton: {
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
    marginRight: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  connectButton: {
    outline: 'none',
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    height: 38,
    width: 150,
    fontSize: 12,
    fontWeight: 700,
    fontFamily: 'Spartan',
    cursor: 'pointer',
    marginRight: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  menuGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  threeBoxLogo: {
    marginRight: 25,
  }
}

const Header = props => {
  const { classes, threeBoxConnected, walletConnected, connectWallet, account, web3 } = props
  const history = useHistory()

  // Add error handling to UI
  const openDonation = () => {
    if (!web3 || !account) return
    web3.eth.sendTransaction(
      {
        to: MY_ADDRESS,
        from: account,
        value: web3.utils.toWei('0.01', 'ether'),
      }, 
      (err, transactionHash) => {
        if (err) {
          console.log(`Your transaction could not be processed. ${err.message}`) 
          return 
        }
        console.log('Thanks for your generosity!')
      }
    )
      
  }

  const openConnect = () => {
    // Navigate to 3box connect page.
    history.push('/connect3box')
  }

  // TODO add pending state
  const threeboxSection = () => threeBoxConnected ? <div className={classes.threeBoxLogo}>{threeBoxCloud}</div> : <button className={classes.connectButton} onClick={openConnect}><span>Connect to 3box</span></button>

  return (
    <div className={classes.header}>
      <div><img height="150" src="REPOET.png" alt="repoet logo"/></div>
      <div className={classes.menuGroup}>
        {walletConnected ? threeboxSection() : null}
        <button className={classes.connectWalletButton} onClick={connectWallet}><span>{walletConnected ? "Wallet Connected" : "Connect Wallet"}</span></button>
        <button className={classes.donateButton} onClick={openDonation}><span>Donate</span></button>
        <div className={classes.menu}>
          <Link className={classes.link} to="/">Home</Link>
          <Link className={classes.link} to="/account">Account</Link>
          <Link className={classes.link} to="/gallery">Gallery</Link>
          <Link className={classes.link} to="/artists">Artists</Link>
          <Link className={classes.link} to="/create">Create</Link>
          <a className={classes.link} href="https://github.com/repoet" target="_blank" rel="noopener noreferrer">Code</a>
      </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Header)