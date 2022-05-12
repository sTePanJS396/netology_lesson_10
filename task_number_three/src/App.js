import React from 'react';
import './App.css';
import MarketInput from './components/static-components/MarketInput';
import MarketList from './components/static-components/MarketList';

function App() {
  return (
    <div className="container">
      <h1>Маркет</h1>
      <MarketInput/>
      <MarketList/>
    </div>
  );
}

export default App;
/*
Картинки для теста:
1. https://images.pexels.com/photos/8585563/pexels-photo-8585563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
2. https://images.pexels.com/photos/11796388/pexels-photo-11796388.png?auto=compress&cs=tinysrgb&dpr=1&w=500
3. https://images.pexels.com/photos/11544837/pexels-photo-11544837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
4. https://images.pexels.com/photos/11189048/pexels-photo-11189048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
5. https://images.pexels.com/photos/10913514/pexels-photo-10913514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
6. https://images.pexels.com/photos/11629663/pexels-photo-11629663.png?auto=compress&cs=tinysrgb&dpr=1&w=500
*/