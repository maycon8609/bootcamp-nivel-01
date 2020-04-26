import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

export default function App() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProject(response.data);
    });
  }, []);

  async function handleAddProject() {
    const { data } = await api.post('project', {
      title: `new project ${Date.now()}`,
      owner: "maycon silva"
    });

    setProject([...projects, data]);
  }

  return (
    <>
      <Header title="GoStack" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}
