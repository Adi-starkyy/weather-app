import React from 'react'
import { Search } from 'lucide-react';

const button = (props) => {
  return (
    <button className='button' onClick={props.onClick}>
        {props.value}
    </button>
  )
}

export default button