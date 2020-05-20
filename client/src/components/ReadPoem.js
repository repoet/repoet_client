// Read latest POEM
// Get all user POEMs

import React, { useState, useEffect } from "react"

const ReadPoem = props => {
  const [dataKey, setDataKey] = useState(null)
  const { drizzle, drizzleState } = props
  const { MyStringStore } = drizzleState.contracts

  useEffect( 
    () => {
      const contract = drizzle.contracts.MyStringStore
      if (contract) {
        const dataKey = contract.methods['myString'].cacheCall()
        setDataKey(dataKey)
      }
      
    }, [dataKey, drizzle.contracts.MyStringStore])

    const string = MyStringStore.myString[dataKey]
  
    // TODO show POEM cards, read all user's poems

  return (
    <div>My latest poem: <pre>{string && string.value}</pre></div>
  )
}

export default ReadPoem