import React from 'react';
import TodoCard from './TodoCard';
import Avatar from './Avatar'; // Assuming there's an Avatar component

const priorities = [
  { label: 'No priority', icon: '/assets/priority/no-priority.svg' },
  { label: 'Low', icon: '/assets/priority/low.svg' },
  { label: 'Medium', icon: '/assets/priority/medium.svg' },
  { label: 'High', icon: '/assets/priority/high.svg' },
  { label: 'Urgent', icon: '/assets/priority/urgent.svg' }
];

const statuses = [
  { label: 'Todo', icon: '/assets/status/todo.svg' },
  { label: 'In progress', icon: '/assets/status/in-progress.svg' },
  { label: 'Done', icon: '/assets/status/done.svg' },
  { label: 'Cancelled', icon: '/assets/status/cancelled.svg'},
  { label: 'Backlog', icon: '/assets/status/backlog.svg'}
];

const sortTasks = (tasks, sortBy) => {
    for(let group in tasks){
        tasks[group].sort((ta, tb) => {
            if(sortBy === 'title')
                return ta.title.localeCompare(tb.title, undefined, { sensitivity: 'base' });
            else if(sortBy === 'priority')
                return tb.priority - ta.priority;
        });
    }
};

const setDefaultTaskArray = (tasks, groupBy) => {
    if(groupBy === 'priority'){
        for(let key of priorities){
            tasks[key.label] = [];
        }
    }
    else if(groupBy === 'status'){
      for(let key of statuses){
        tasks[key.label] = [];
      }
    }
}

const PriorityBoard = ({ todos, users, sortBy, groupBy }) => {
    console.log(groupBy);
    const tasks = {};
    setDefaultTaskArray(tasks, groupBy);
    console.log(tasks);
    todos.forEach(todo => {
        let group;
        if(groupBy === 'priority') group = priorities[todo.priority].label;
        else if(groupBy === 'user') group = todo.userId;
        else if(groupBy === 'status') group = todo.status;

        if(!tasks[group]) tasks[group] = [];
        tasks[group].push(todo);
    });

    sortTasks(tasks, sortBy);

    const userList = {};
    users.forEach(user => {
        userList[user.id] = user;
    });

    const getHeaderInfo = (group, groupBy) => {
        if (groupBy === 'priority') {
            const priority = priorities.find(p => p.label === group);
            return { avatar: 'na', icon: priority?.icon, label: priority?.label };
        } else if (groupBy === 'status') {
            const status = statuses.find(s => s.label === group);
            return { avatar: 'na', icon: status?.icon, label: status?.label };
        } else if (groupBy === 'user') {
            const user = userList[group];
            return { icon: 'na', avatar: user, label: user ? user.name : 'Unknown User' };
        }
    };

    return (
        <div className="board">
          {Object.keys(tasks).map((group, index) => {
              const { icon, label, avatar } = getHeaderInfo(group, groupBy);
              return (
                  <div key={index} className="column">
                      <div className="column-header">
                          <div className="header-info">
                              {groupBy === 'user' ? (
                                  <Avatar user={avatar} type={'group'}/> // For 'user' groupBy, show avatar instead of icon
                              ) : (
                                  <img src={icon} alt={label} className="group-icon" />
                              )}
                              <span>
                                  {label} {tasks[group].length || 0}
                              </span>
                          </div>
                          <div>
                              <img src="/assets/add.svg" alt="Add" className="add-icon" />
                              <img src="/assets/menu.svg" alt="Menu" className="menu-icon" />
                          </div>
                      </div>
                      <div className="cards">
                          {tasks[group].map((task, i) => (
                              <TodoCard 
                                  key={i}  
                                  user={userList[task.userId]} 
                                  todo={task} 
                                  showPriority={groupBy !== 'priority'}
                                  showStatus={groupBy !== 'status'}
                                  showUser={groupBy !== 'user'}
                              />
                          ))}
                      </div>
                  </div>
              );
          })}
        </div>
    );
};

export default PriorityBoard;
