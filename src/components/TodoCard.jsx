import React from 'react';
import Avatar from './Avatar';
const priority = [
    '/assets/priority/no-priority.svg',
    '/assets/priority/low.svg',
    '/assets/priority/medium.svg',
    '/assets/priority/high.svg',
    '/assets/priority/urgent.svg',
];

const statusIcons = {
    "Done": '/assets/status/done.svg',
    "Backlog": '/assets/status/backlog.svg',
    "Todo": '/assets/status/todo.svg',
    "Cancelled": '/assets/status/cancelled.svg',
    "In progress": '/assets/status/in-progress.svg',
};

const TodoCard = ({ user, todo, showUser = true, showStatus = true, showPriority = true}) => {
    const getUserInitials = () => {
        const names = user.name ? user.name.split(' ') : [];
        const initials = names.map(name => name[0]).join('');
        return initials.toUpperCase();
      };
  return (
    <div className="todo-card">
      <div className="todo-id">{todo.id}</div>
      <div className="todo-title">
        {showStatus && (
            <img
                src={statusIcons[todo.status]}
                alt={`${todo.status} Icon`}
                className="status-icon"
            />
        )}
            {todo.title}
        </div>
      <div className="todo-tags">
        {showPriority &&  <img
            src={priority[todo.priority]}
            alt="Priority Icon"
            className="todo-priority"
          />}
        <span className="todo-tag">{todo.tag}</span>
      </div>
      {
        showUser
        &&
        <Avatar user={user} type={'user'}/>
      }
      
    </div>
  );
};


export default TodoCard;
