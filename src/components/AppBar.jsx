import React, { useState } from 'react';

const AppBar = ({setSortBy, setGroupBy}) => {
  const [grouping, setGrouping] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');

  const handleGroupChange = (e) => {
    const group = e.target.value;
    setGrouping(group);
    setGroupBy(group.toLowerCase());
  }

  const handleOrderChange = (e) => {
    const order = e.target.value;
    setOrdering(order);
    setSortBy(order.toLowerCase());
  }
  return (
    <div className="top-bar">
      <div className="display-dropdown">
        <button className="button-with-icons">
            <span className="icon top-icon"><img src="/assets/Display.svg" /></span>
            <span className="button-text">Display</span>
            <span className="icon bottom-icon"><img src="/assets/down.svg" /></span>
        </button>
        <div className="dropdown-content">
          <div className="flex dropdown-group">
            <label>Grouping</label>
            <select value={grouping} onChange={handleGroupChange}>
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
          </div>
          <div className="flex dropdown-group">
            <label>Ordering</label>
            <select value={ordering} onChange={handleOrderChange}>
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
