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
  const [drizzleReadinessState, setDrizzleReadinessState] = useState({drizzleState: null, loading: true})
  
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
              <Header />
              <Home />
            </div>
          </Route>
          <Route exact path="/account">
            <div className={classes.app}>
              <Header />
              <Account drizzle={drizzle} drizzleState={drizzleReadinessState.drizzleState} />
            </div>
          </Route>
          <Route exact path="/gallery">
            <div className={classes.app}>
              <Header />
              <Gallery />
            </div>
          </Route>
          <Route exact path="/artists">
            <div className={classes.app}>
              <Header />
              <Artists />
            </div>
          </Route>
          <Route exact path="/create">
            <div className={classes.app}>
              <Header />
              <CreatePoem drizzle={drizzle} drizzleState={drizzleReadinessState.drizzleState}/>
            </div>
          </Route>
        </Switch>
      </Router>
  )
}

export default withStyles(styles)(App)
