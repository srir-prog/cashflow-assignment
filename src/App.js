import React from 'react';
import Header from './components/Header/Header';
import AddBudget from './components/Budget/AddBudget';
import SankeyChart from './components/SankeyChart/SankeyChart';

function App() {
  return (
    <>
      <Header />
      <AddBudget />
      <SankeyChart />
    </>
  );
}

export default App;
