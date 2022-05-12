import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/marketSlice';
import InputLabel from '../repeat-components/InputLabel';

const MarketInput = () => {
    const [field, setField] = React.useState({name: '', image: '', price: ''});
    const dispatch = useDispatch()
    
    function handleChangeInput({value, name}) {
        setField(prev => ({...prev, [name]: value}))
    }
    return (
        <div className='input-block'>
            <div className='input-block__wrap'>
                <InputLabel 
                        labelName='Название товара' 
                        inputName='name' 
                        value={field.name}
                        change={handleChangeInput} 
                    />
                <InputLabel 
                        labelName='Картинка (ссылка)' 
                        inputName='image' 
                        value={field.image}
                        change={handleChangeInput} 
                    />
                    {/* можно сделать input добавления файла */}
                <InputLabel 
                        labelName='Цена товара' 
                        inputName='price' 
                        value={field.price}
                        change={handleChangeInput} 
                    />
                <div className='input-block__button'>
                    <button
                        onClick={() => {
                            dispatch(addProduct(field))
                            setField({name: '', image: '', price: ''})
                        }}
                    >Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default MarketInput