import React from 'react';

import './App.css';
import Dashboard from './components/DashboardComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Exchange</h1>
      </header>
      <main>
        <Dashboard/>
      </main>
    </div>
  );
}

export default App;
