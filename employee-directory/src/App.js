import './App.css';
import React from "react";
import employees from "./Assets/employees.json";
import Table from "./components/Table";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Table employees={employees} />;
    </div>
  );
}

export default App;
