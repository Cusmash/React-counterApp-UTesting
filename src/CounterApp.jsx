import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
    
    //console.log('render');

    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSub = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>
            +1
        </button>
        <button onClick={ handleSub }>
            -1
        </button>
        <button onClick={ handleReset }>
            Reset
        </button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}