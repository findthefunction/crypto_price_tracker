import React, { useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then(res => {
        setCoins(res.data);
        console.log(res.data);
    }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  
  return (
    <div className="coin-app">
    <div className="coin-search">
      <h1 className="coin-text">Enter Crypto Currency </h1>
      <h2 className='coin-text'>Prices is $CAD</h2>
      <form>
        <input 
        type="text" 
        placeholder="Search" 
        className="coin-input" 
        onChange={handleChange}/>
      </form>
    </div>

    {filteredCoins.map(coin => {
      return (
        <Coin 
        key={coin.id} 
        name={coin.name} 
        image={coin.image}
        symbol={coin.symbol}
        volume={coin.market_cap}
        price={coin.current_price}
        marketcap={coin.total_volume}
        priceChange={coin.price_change_percentage_24h}
        />
      );
    })}

    </div>
  );
}

export default App;
