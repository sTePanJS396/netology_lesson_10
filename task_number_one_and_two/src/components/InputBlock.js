import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, toggle } from '../redux/todoSlice';

const InputBlock = () => {
    const dispatch = useDispatch();
    const currentToggle = useSelector((store) => store.todo.isToggle);
    const [value, setValue] = React.useState({ name: '', price: '' });

    React.useEffect(() => {
        if (currentToggle.textToggle[0]?.text) {
            const [name, price] = currentToggle.textToggle[0]?.text?.split(' ');
            setValue({name: name, price: price})
        }
    }, [currentToggle.textToggle])

    function handleChangeInput(event) {
        setValue(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    return (
        <div className='input-block'>
            <input 
                type='text'
                name='name'
                value={value.name}
                onChange={handleChangeInput}
            />
            <input 
                type='text'
                name='price'
                value={value.price}
                onChange={handleChangeInput}
            />
            <button
                onClick={() => {
                    dispatch(add(value));
                    setValue({ name: '', price: '' })
                }}
            >SAVE</button>
            {currentToggle.isCancel && 
                <button
                    onClick={() => {
                        dispatch(toggle({isCancel: false}))
                        setValue({ name: '', price: '' })
                    }}
                >CANCEL</button>
            }
        </div>
    )
}

export default InputBlock