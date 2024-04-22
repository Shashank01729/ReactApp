import React from 'react';
import { render } from 'react-dom';
import Card from './Card';
import CardBig from './CardBig';
import Header from "./Header";
import './style.css';

const App = () => (
  <div>
    <Header /> 
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 0 30%', marginRight: '20px', height: '100vh', overflow: 'auto' }}>
        {Array(8).fill().map((_, i) => (
          <div key={i} style={{ marginBottom: '20px' }}>
            <Card>
              <h2>Card {i + 1}</h2>
            </Card>
          </div>
        ))}
      </div>
      <div style={{ flex: '10000' }}> 
        <div style={{ display: 'flex', flexDirection: 'column' }}> 
          <div style={{ marginBottom: '20px' }}>
            <CardBig>
              <h2>Big Card 1</h2>
            </CardBig>
          </div>
        </div>
      </div>
    </div>
  </div>
);

render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
