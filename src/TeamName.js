import React from 'react'

function TeamName(props) {
    const {name, setName} = props

    return (
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    )
}

export default TeamName