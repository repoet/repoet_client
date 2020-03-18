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
    
  return (
    <p>My latest poem: {string && string.value}</p>
  )
}

export default ReadPoem