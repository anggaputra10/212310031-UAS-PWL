import React, { useState } from 'react';
import './App.css';
import Footer from './component/footer';

const recommendations = [
  { id: 1, name: 'Nasi Goreng', price: 15000, img: 'nasi_goreng.jpg' },
  { id: 2, name: 'Roti Bakar', price: 15000, img: 'roti_bakar.jpg' },
  { id: 3, name: 'Nasi Telor', price: 10000, img: 'nasi_telor.jpg' },
  { id: 4, name: 'Mie Goreng', price: 13000, img: 'mie_goreng.jpg' },
  { id: 5, name: 'Es Jeruk', price: 7000, img: 'es_jeruk.jpg' },
  { id: 6, name: 'Es Teh', price: 5000, img: 'es_teh.jpg' },
  { id: 7, name: 'Kentang Goreng', price: 7500, img: 'kentang_goreng.jpg' }
];

function App() {
  const [budget, setBudget] = useState(25000);

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const filteredRecommendations = recommendations.filter(item => item.price <= budget);

  return (
    <div className="App">
      <header className="App-header">
        <h1>REKOMENDASI MENU</h1>
        <label>
          Masukan Uang jajan anda:
          <input
            type="number"
            value={budget}
            onChange={handleBudgetChange}
          />
        </label>
      </header>
      <div className='content'>

        <div className="recommendations">
          {filteredRecommendations.map(item => (
            <div key={item.id} className="recommendation">
              <img src={item.img} alt={item.name} />
              <p>{item.name} Rp {item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
