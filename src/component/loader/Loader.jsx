import React from 'react'

const Loader = ({loadComponent,visible,height,width,...props}) => {
    const Component = loadComponent
  return (
    <Component
    visible={visible}
    height={height}
    width={width}
    {...props}
  />
  )
}

export default Loader