import React from 'react';
import StoreDashboard from './views/StoresDashboard';
import ShowStore from './views/ShowStore';
import Edit from './views/Edit';
import AddStore from './views/AddStore';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={ <StoreDashboard /> } path="/stores" />
        <Route element={ <ShowStore /> } path="/stores/:id" />
        <Route element={ <Edit /> } path="/stores/edit/:id" />
        <Route element={ <AddStore /> } path="/stores/add" />
      </Routes>
    </div>
  );
}

export default App;
