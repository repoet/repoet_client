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
import CreatePoem from "./components/CreatePoem"
import Connect3box from "./components/Connect3box"

let web3

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
  const [loading, setLoading] = useState(true)

  // 3box state
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [customisedProfile, setCustomisedProfile] = useState()
  const [threeBoxConnected, setThreeBoxConnected] = useState(false)
  
  const authenticate3box = async() => {
    const box = await Box.openBox(drizzleReadinessState.drizzleState.accounts[0], window.web3.currentProvider)
    await box.syncDone
    const space = await box.openSpace('Repoet')
    await space.syncDone
    setLoading(false)
  }

  const getProfile = async() => {
    const profile = await Box.getProfile(drizzleReadinessState.drizzleState.accounts[0])
    console.log(profile)
  }

  const setProfile = async() => {
    const box = await Box.openBox(drizzleReadinessState.drizzleState.accounts[0], window.web3.currentProvider)
    await box.public.set('name', name)
    await box.private.set('email', email)
  }

  const getName = async() => {
    const box = await Box.openBox(drizzleReadinessState.drizzleState.accounts[0], window.web3.currentProvider)
    const name = await box.public.get('name')
    setCustomisedProfile(name)
    setThreeBoxConnected(true)
  }

  const updateProfile = e => {
    e.preventDefault()
    setProfile()
    getName()
  }

  useEffect( 
    () => {
      const unsubscribe = drizzle.store.subscribe(async() => {
        const drizzleState = drizzle.store.getState()
        if (drizzleState.drizzleStatus.initialized && web3 === undefined) {
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
          } catch (error) {
            alert(
              `Wallet not connected. Refresh the page to continue.`,
            )
            console.error(error)
          }
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
  
  if (drizzleReadinessState.loading || web3 === undefined) {
    return <div className={classes.app}><div className={classes.failMessage}>Please connect your Wallet to continue</div></div>
  }
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} />
              <Home />
            </div>
          </Route>
          <Route exact path="/account">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} />
              <Account drizzle={drizzle} drizzleState={drizzleReadinessState.drizzleState} />
            </div>
          </Route>
          <Route exact path="/gallery">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} />
              <Gallery />
            </div>
          </Route>
          <Route exact path="/artists">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} />
              <Artists />
            </div>
          </Route>
          <Route exact path="/create">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} />
              <CreatePoem drizzle={drizzle} drizzleState={drizzleReadinessState.drizzleState}/>
            </div>
          </Route>
          <Route exact path="/connect3box">
            <div className={classes.app}>
              <Header threeBoxConnected={threeBoxConnected} />
              <Connect3box threeBoxConnected={threeBoxConnected} authenticate3box={authenticate3box} getProfile={getProfile} getName={getName} setName={setName} setEmail={setEmail} updateProfile={updateProfile} customisedProfile={customisedProfile} />
            </div>
          </Route>
        </Switch>
      </Router>
  )
}

export default withStyles(styles)(App)
