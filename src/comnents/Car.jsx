import React from 'react'

export const Car = (props, ...res) => {
  return (
      <>
          <div>{props.children}</div>
          <div>{props.name}</div>
          <div>{res[0]}</div>
      </>
  )
}
