import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, toggle } from '../redux/todoSlice';

const ListItem = ({ text, id }) => {
  const dispatch = useDispatch()
  return (
    <li className='list-item'>
        {text}
        <button 
            className='list-item__edit'
            onClick={() => dispatch(toggle({id: id, isCancel: true}))}
        >&#9998;</button>
        <button 
            className='list-item__delete'
            onClick={() => dispatch(remove(id))}
        >&#10005;</button>
    </li>
  )
}

export default ListItem