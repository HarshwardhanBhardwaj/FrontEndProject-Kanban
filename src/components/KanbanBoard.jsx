import React from 'react';

function KanbanBoard({ groupedTickets }) {
  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div key={group} className="kanban-column">
          <h3>{group}</h3>
          {tickets.map(ticket => (
            <div key={ticket.id} className="kanban-ticket">
              <h4>{ticket.title}</h4>
              <p>Priority: {ticket.priority}</p>
              <p>Status: {ticket.status}</p>
              <p>Assigned to: {ticket.user}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
