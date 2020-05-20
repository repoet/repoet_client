import React, { useState, useEffect } from 'react'
import { Drizzle } from "@drizzle/store"
import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { withStyles } from '@material-ui/core/styles'

import { onboardConfig } from './config/onboardConfig'
import MyStringStore from "./contracts/MyStringStore.json"

import Header from "./components/Header"
import Home from "./components/Home"
import Account from "./components/Account"
import Gallery from "./components/Gallery"
import Artists from "./components/Artists"
import WriteNew from "./components/WriteNew"
import Connect3box from "./components/Connect3box"

let web3

// TODO create styleguide / theme
const styles = {
  app: {
    backgroundColor: '#082628',
    backgroundImage: 'url(/Dragon-Scales.svg)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'contain',
    fontFamily: 'Spartan',
    minHeight: '100vh',
    padding: 40,
    color: '#86e4cc',
    display: 'flex',
    flexDirection: 'column',
  },
  failMessage: {
    fontSize: 24,
    fontWeight: 700,
    color: '#86e4cc',
  },
}

const onboard = Onboard({
  dappId: onboardConfig.dappId, 
  networkId: onboardConfig.networkId, 
  subscriptions: {
    wallet: wallet => {
      web3 = new Web3(wallet.provider)
    }
  }
})

const options = {
  contracts: [MyStringStore],
}

const drizzle = new Drizzle(options)

const App = props => {
  const { classes } = props
  const Box = require('3box')
  
  // Drizzle state
  const [drizzleReadinessState, setDrizzleReadinessState] = useState({drizzleState: null, loading: true})

  // Wallet state
  const [walletConnected, setWalletConnected] = useState(false)

  // 3box state
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [profileName, set3boxProfileName] = useState()
  const [storageData, setStorageData] = useState()
  const [threeBoxConnected, setThreeBoxConnected] = useState(false)

  let box
  let space
  
  // TODO add 3box error handling
  const authenticate3box = async() => {
    box = await Box.openBox(drizzleReadinessState.drizzleState.accounts[0], window.web3.currentProvider)
    await box.syncDone
    space = await box.openSpace('Repoet')
    await space.syncDone
  }

  const getProfile = async() => {
    const profile = await Box.getProfile(drizzleReadinessState.drizzleState.accounts[0])
    console.log(profile)
  }

  const setProfile = async() => {
    box = await Box.openBox(drizzleReadinessState.drizzleState.accounts[0], window.web3.currentProvider)
    await box.public.set('name', name)
    await box.private.set('email', email)
  }

  const getName = async() => {
    box = await Box.openBox(drizzleReadinessState.drizzleState.accounts[0], window.web3.currentProvider)
    const name = await box.public.get('name')
    if (name !== null && name !== undefined) {
      set3boxProfileName(name)
    }
  }

  const getStorageData = async() => {
    box = await Box.openBox(drizzleReadinessState.drizzleState.accounts[0], window.web3.currentProvider)
    space = await box.openSpace('Repoet')
    const spaceData = await space.private.all()
    if (spaceData !== null && spaceData !== undefined){
      setStorageData(spaceData)
    }
    setThreeBoxConnected(true)
  }

  const savePoem = async(key, value) => {
    console.log(key, value)
    box = await Box.openBox(drizzleReadinessState.drizzleState.accounts[0], window.web3.currentProvider)
    space = await box.openSpace('Repoet')
    await space.private.set(key, value)
    getStorageData()
  }

  const updateProfile = e => {
    e.preventDefault()
    setProfile()
    getName()
    getStorageData()
  }

  const connectWallet = async() => {
    try {
      await onboard.walletSelect()
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      )
      console.error(error)
    }
    if (web3 !== undefined) try {
      await onboard.walletCheck()
      setWalletConnected(true)
    } catch (error) {
      alert(
        `Wallet not connected. Refresh the page to continue.`,
      )
      console.error(error)
    }
  }

  useEffect( 
    () => {
      const unsubscribe = drizzle.store.subscribe(async() => {
        const drizzleState = drizzle.store.getState()
        if (drizzleState.drizzleStatus.initialized && web3 === undefined) {
        }
        if (drizzleState.drizzleStatus.initialized){
          setDrizzleReadinessState({drizzleState, loading: false})
        }
      })
      return () => {
        unsubscribe()
      }
    }, [drizzleReadinessState]
  )
 
  // TODO create page component
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} walletConnected={walletConnected} connectWallet={connectWallet} />
              <Home />
            </div>
          </Route>
          <Route exact path="/account">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} walletConnected={walletConnected} connectWallet={connectWallet} />
              <Account drizzle={drizzle} drizzleState={drizzleReadinessState.drizzleState} storageData={storageData} />
            </div>
          </Route>
          <Route exact path="/gallery">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} walletConnected={walletConnected} connectWallet={connectWallet} />
              <Gallery />
            </div>
          </Route>
          <Route exact path="/artists">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} walletConnected={walletConnected} connectWallet={connectWallet} />
              <Artists />
            </div>
          </Route>
          <Route exact path="/create">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} walletConnected={walletConnected} connectWallet={connectWallet}/>
              <WriteNew drizzle={drizzle} drizzleState={drizzleReadinessState.drizzleState} threeBoxConnected={threeBoxConnected} savePoem={savePoem} storageData={storageData} />
            </div>
          </Route>
          <Route exact path="/connect3box">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} walletConnected={walletConnected} connectWallet={connectWallet} />
              <Connect3box threeBoxConnected={threeBoxConnected} authenticate3box={authenticate3box} getProfile={getProfile} getName={getName} setName={setName} setEmail={setEmail} updateProfile={updateProfile} getStorageData={getStorageData} profileName={profileName} />
            </div>
          </Route>
        </Switch>
      </Router>
  )
}

export default withStyles(styles)(App)
