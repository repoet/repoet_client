import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

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
  menuGroup: {
    display: 'flex',
    alignItems: 'center'
  }

}
const Header = props => {
  const { classes } = props

  const openDonation = () => {
    // Pop up window. Function to direct funds to my ETH address.
  }

  return (
    <div className={classes.header}>
      <div><img height="150" src="REPOET.png" alt="repoet logo"/></div>
      <div className={classes.menuGroup}>
        <button className={classes.donateButton} onClick={openDonation}><span>Donate</span></button>
        <div className={classes.menu}>
          <Link className={classes.link} to="/">Home</Link>
          <Link className={classes.link} to="/account">Account</Link>
          <Link className={classes.link} to="/gallery">Gallery</Link>
          <Link className={classes.link} to="/artists">Artists</Link>
          <Link className={classes.link} to="/create">Create</Link>
          <a className={classes.link} href="https://github.com/atkinsonholly">Code</a>
      </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Header)