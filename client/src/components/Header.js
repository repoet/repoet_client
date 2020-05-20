import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link, useHistory } from "react-router-dom"

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

const threeBoxLogo = (
  <svg width="90px" height="59px" viewBox="0 0 179 118" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>3BoxCloudWhite</title>
    <defs>
        <filter x="-7.6%" y="-11.8%" width="115.2%" height="123.6%" filterUnits="objectBoundingBox" id="filter-1">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="3BoxCloudWhite" filter="url(#filter-1)" transform="translate(4.000000, 2.000000)" fillRule="nonzero">
            <g id="Group-10" fill="#181F21">
                <g id="Group-8">
                    <rect id="Rectangle" x="35" y="87" width="103" height="20"></rect>
                    <g id="Group-7">
                        <g id="noun_Cloud_926941" transform="translate(85.500000, 55.000000) scale(-1, 1) translate(-85.500000, -55.000000) " stroke="#181F21">
                            <path d="M81.4758151,0.5 C57.1740597,0.5 36.8491933,19.1017086 32.5131621,45.1812882 L32.4298736,45.6822364 L31.9302791,45.5911797 C31.1330157,45.4458695 30.5721241,45.4166626 29.3479931,45.4166666 C29.3431148,45.4166667 29.3431148,45.4166667 29.3382353,45.4166667 C13.4144802,45.4166667 0.5,59.4287481 0.5,76.6347652 C0.5,94.5089897 13.6918381,109.5 29.3382353,109.5 L131.098691,109.5 C153.268264,109.5 170.5,91.0416167 170.5,67.2819015 C170.5,43.7228891 152.781163,24.5159498 131.098691,24.5159498 C128.36851,24.5159498 125.959513,24.7358266 123.661404,25.2384537 L123.311254,25.3150364 L123.126291,25.0080201 C113.828039,9.57404867 98.3992276,0.5 81.4758151,0.5 Z M121.782292,27.5666829 C122.217577,28.0258802 122.691859,28.2255136 123.120156,28.1094737 C126.100934,27.4982833 128.740737,27.1826165 131.268956,27.1826165 C151.677713,27.1826165 168.314052,45.2037401 168.314052,67.2819015 C168.314052,89.3810289 151.993153,106.833333 131.268956,106.833333 L29.3382353,106.833333 C14.9522952,106.833333 2.85294118,93.0173278 2.85294118,76.6347652 C2.85294118,60.9726044 14.7978228,48.0833333 29.3382353,48.0833333 C29.3440891,48.0833333 29.3440891,48.0833333 29.3499489,48.0833333 C30.9563474,48.0833289 31.8205989,48.115909 33.1319927,48.2774961 C33.6487242,48.3905122 34.2550139,47.8951868 34.3771273,47.2293042 C38.1076563,21.6391844 57.7962279,3.16666667 81.4758151,3.16666667 C97.9432901,3.16666667 112.994781,12.265391 121.782292,27.5666829 Z" id="Shape"></path>
                        </g>
                        <ellipse id="Oval-5" cx="89" cy="54.5" rx="49" ry="52.5"></ellipse>
                        <ellipse id="Oval-5" cx="40" cy="67" rx="38" ry="40"></ellipse>
                        <path d="M131,107 C139.674283,107 149.128937,107.369997 155.437711,103.181808 C163.990899,97.5036254 168,85.853185 168,76 C168,58.8791728 151.434536,45 131,45 C110.565464,45 94,58.8791728 94,76 C94,93.1208272 110.565464,107 131,107 Z" id="Oval-5"></path>
                    </g>
                </g>
            </g>
            <g id="3Box3" transform="translate(63.000000, 36.000000)" fill="#FFFFFF">
                <path d="M7.02702703,0 L43.7426354,0 C47.6235552,2.73403586e-15 50.7696624,3.14610716 50.7696624,7.02702703 L50.7696624,43.5675676 C50.7696624,47.4484874 47.6235552,50.5945946 43.7426354,50.5945946 L7.02702703,50.5945946 C3.14610716,50.5945946 4.7527561e-16,47.4484874 0,43.5675676 L0,7.02702703 C-4.75275615e-16,3.14610716 3.14610716,7.12913413e-16 7.02702703,0 Z M25.6364912,8.37226746 C24.1407044,8.37226746 22.7423206,8.57871411 21.4412977,8.99161358 C20.1402747,9.40451305 18.9872898,10.0199578 17.982308,10.8379661 C16.9773262,11.6559745 16.1398542,12.6765221 15.4698662,13.8996394 C14.7998784,15.1227566 14.348033,16.5445118 14.1143163,18.1649475 L17.152618,18.7024933 C17.433078,18.7492365 17.6979529,18.7726078 17.9472508,18.7726078 C18.4770085,18.7726078 18.9054827,18.6440657 19.232686,18.3869772 C19.5598894,18.129889 19.8169739,17.7053099 20.0039473,17.1132277 C20.3623128,15.9758065 20.9933384,15.044849 21.8970429,14.3203274 C22.8007475,13.5958056 23.9381515,13.2335502 25.3092895,13.2335502 C26.8206574,13.2335502 28.0125945,13.6425482 28.8851368,14.4605566 C29.7576791,15.278565 30.1939436,16.4899783 30.1939436,18.094833 C30.1939436,18.8427263 30.0848776,19.5282849 29.8667419,20.1515294 C29.6486064,20.774774 29.2629796,21.308419 28.7098501,21.7524806 C28.1567207,22.1965424 27.4127338,22.5432169 26.4778671,22.7925148 C25.5430002,23.0418125 24.366644,23.17425 22.9487627,23.189831 L22.9487627,27.3032241 C24.6626851,27.3032241 26.0299072,27.4356617 27.05047,27.7005405 C28.0710328,27.9654194 28.8539721,28.3315701 29.399311,28.7990034 C29.9446499,29.2664368 30.3030101,29.8312436 30.4744023,30.493441 C30.6457945,31.1556382 30.7314894,31.8918347 30.7314894,32.7020526 C30.7314894,33.3408782 30.6107375,33.9757989 30.3692303,34.606834 C30.127723,35.237869 29.7615725,35.8104663 29.2707674,36.324643 C28.7799624,36.8388197 28.1684129,37.2556083 27.4361006,37.5750211 C26.7037884,37.8944339 25.84684,38.0541378 24.86523,38.0541378 C23.9926877,38.0541378 23.2409104,37.9255955 22.6098752,37.6685073 C21.9788401,37.4114188 21.4296142,37.0764301 20.9621808,36.6635305 C20.4947475,36.2506311 20.0935399,35.7793094 19.758546,35.2495517 C19.423552,34.7197938 19.1158298,34.1822535 18.8353697,33.6369146 C18.6639774,33.3097113 18.4185786,33.0604172 18.0991658,32.8890249 C17.779753,32.7176328 17.4174975,32.6319379 17.0123887,32.6319379 C16.5605364,32.6319379 16.1164814,32.7254232 15.6802103,32.9123965 L13.1327111,33.9641164 C13.6001445,35.4131597 14.1610561,36.6907919 14.8154628,37.7970508 C15.4698696,38.9033098 16.2644944,39.8381624 17.199361,40.601637 C18.1342279,41.3651115 19.2326798,41.941604 20.4947499,42.3311318 C21.75682,42.7206596 23.2370033,42.9154205 24.9353446,42.9154205 C26.4934558,42.9154205 27.9697441,42.6894978 29.3642536,42.2376455 C30.7587631,41.7857933 31.9857574,41.1197107 33.045273,40.239378 C34.1047886,39.3590451 34.946156,38.2722788 35.5694005,36.9790464 C36.1926451,35.6858142 36.5042627,34.1978403 36.5042627,32.5150801 C36.5042627,30.5362789 36.0056744,28.8924962 35.0084834,27.5836828 C34.0112922,26.2748693 32.4999469,25.3010645 30.4744023,24.6622389 C31.3157824,24.3817788 32.0675597,24.031209 32.7297571,23.610519 C33.3919543,23.1898291 33.9528659,22.67566 34.4125087,22.0679967 C34.8721516,21.4603332 35.2227213,20.7475081 35.4642285,19.9294996 C35.7057358,19.1114913 35.8264876,18.1649528 35.8264876,17.0898562 C35.8264876,15.8589483 35.5888793,14.7137537 35.1136553,13.6542381 C34.6384314,12.5947225 33.9567679,11.6715554 33.0686446,10.8847092 C32.1805211,10.0978631 31.1093358,9.48241839 29.8550563,9.03835668 C28.6007766,8.59429498 27.1946023,8.37226746 25.6364912,8.37226746 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>
)

const Header = props => {
  const { classes, threeBoxConnected, walletConnected, connectWallet } = props
  const history = useHistory()

  const openDonation = () => {
    // Pop up window. Function to allow donations to repoet.eth
  }

  const openConnect = () => {
    // Navigate to 3box connect page.
    history.push('/connect3box')
  }

  // TODO add pending state
  const threeboxSection = () => threeBoxConnected ? <div className={classes.threeBoxLogo}>{threeBoxLogo}</div> : <button className={classes.connectButton} onClick={openConnect}><span>Connect to 3box</span></button>

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
          <a className={classes.link} href="https://github.com/atkinsonholly">Code</a>
      </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Header)