import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../redux/todoSlice';

const FilterField = () => {
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();

    function handleChangeInput(event) {
        setValue(event.target.value)
        dispatch(filter(event.target.value))
    }
    return (
        <div className='filter-field'>
            <input 
                type='text'
                placeholder={`I'm looking for...`}
                value={value}
                onChange={handleChangeInput} 
            />
            <button
                onClick={() => setValue('')}
            >X</button>
        </div>
    )
}

export default FilterField