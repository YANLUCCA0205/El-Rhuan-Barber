import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: 'red' }}>Painel de Administração</h1>
      <p>Bem-vindo, Administrador! Aqui você gerenciará agendamentos, serviços e usuários.</p>
      <Link to="/" style={{ color: '#d4af37', marginTop: '20px', display: 'block' }}>Voltar para a Home</Link>
    </div>
  );
}

export default AdminDashboard;
