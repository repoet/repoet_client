// Read latest POEM
// Get all user POEMs

import React, { useState, useEffect } from "react"

const ReadPoem = props => {
  const [dataKey, setDataKey] = useState(null)
  const { drizzle, drizzleState } = props
  const { Repoet } = drizzleState.contracts

  useEffect( 
    () => {
      const contract = drizzle.contracts.Repoet
      if (contract) {
        // const dataKey = contract.methods['myString'].cacheCall()
        // setDataKey(dataKey)
      }
      
    }, [/*dataKey*/, drizzle.contracts.Repoet])

    // const string = Repoet.myString[dataKey]
  
    // TODO show POEM cards, read all user's poems

  return (
    <div>My latest POEMs <pre></pre></div>
  )
}

export default ReadPoem