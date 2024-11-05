import React, { useState, useEffect, useMemo } from 'react';
import TodoCard from './components/TodoCard';
import AppBar from './components/AppBar'
import PriorityBoard from './components/PriorityBoard';
//import { fetchTickets } from './services/api';


function App() {

  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [sortBy, setSortBy] = useState('priority');
  const [groupBy, setGroupBy] = useState('status');

  const getTodos = async () => {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      setTodos(data.tickets);
      setUsers(data.users);
  }

  useEffect(()=>{
    getTodos();
  }, []);

  return (
    <>
        <AppBar setSortBy={setSortBy} setGroupBy={setGroupBy}/>
        <PriorityBoard todos={todos} users={users} sortBy={sortBy} groupBy={groupBy}/>
    </>
    
  );
}

export default App;

