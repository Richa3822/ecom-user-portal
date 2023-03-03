import React from 'react'

function Button(props) {
    const {type , className,buttonText }= props;
  return (
   <button type={type} className={className}>{buttonText}</button>
  )
}

export default Button
