
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find(t => t.id === parseInt(id));

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map(t => 
      t.id === task.id ? { ...t, text: e.target.taskText.value } : t
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    navigate('/todos');
  };

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h2>Task Detail</h2>
      <form onSubmit={handleEdit}>
        <input type="text" name="taskText" defaultValue={task.text} />
        <button type="submit">Save Changes</button>
      </form>
      <Link to="/todos">Back to Todo List</Link>
    </div>
  );
};

export default TaskDetail;