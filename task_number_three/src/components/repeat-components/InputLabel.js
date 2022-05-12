import React from 'react'

const InputLabel = ({ labelName, inputName, value, change }) => {
  return (
    <div className='labels-block'>
        <label className='input-label' htmlFor={inputName}>
            <p>{labelName}</p>
            <input
                className='input-label__input'
                name={inputName}
                placeholder={labelName}
                value={value}
                id={inputName}
                onChange={(event) => change(event.target)}
            />
        </label>
    </div>
  )
}

export default InputLabel