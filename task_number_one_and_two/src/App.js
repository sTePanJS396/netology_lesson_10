import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import FilterField from './components/FilterField';
import InputBlock from './components/InputBlock';
import List from './components/List';
import ListItem from './components/ListItem';

function App() {
  const todos = useSelector((store) => store.todo.todoList);
  const [array, setArray] = React.useState(todos);
  const filterString = useSelector((store) => store.todo.filter.foundusString);

  function filter(filterStr, filterArr) {
    if (!filterStr) {
      return filterArr;
    };
    return filterArr.filter(({ text }) => (
      text.toLowerCase().includes(filterStr.toLowerCase())
    ))
  };

  React.useEffect(() => {
    setArray(todos)
  }, [todos])

  React.useEffect(() => {
    const Debounce = setTimeout(() => {
      const onFilters = filter(filterString, todos);
      setArray(onFilters);
    }, 300);

    return () => clearTimeout(Debounce)
  }, [filterString])

  // переделать через includes
  return (
    <div className="container">
      <InputBlock/>
      <FilterField/>
      <List>
        {(() => (filterString !== '' ? array : todos))().map((el) => (<ListItem key={el.id} id={el.id} text={el.text}/>))}
      </List>
    </div>
  );
}

export default App;
