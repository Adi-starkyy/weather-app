import React from 'react'

const button = (props) => {
  return (
    <button className='border p-0.5 rounder-rm px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl shadow-md transition-all' onClick={props.onClick}>
        {props.value}
    </button>
  )
}

export default button