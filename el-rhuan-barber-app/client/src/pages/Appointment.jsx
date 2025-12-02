import React from 'react';
import { Link } from 'react-router-dom';

function Appointment() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#d4af37' }}>Página de Agendamento</h1>
      <p>Parabéns! Você está logado e pronto para agendar seu serviço.</p>
      <p>Aqui será implementada a lógica de seleção de serviços, barbeiros e horários.</p>
      <Link to="/" style={{ color: '#d4af37', marginTop: '20px', display: 'block' }}>Voltar para a Home</Link>
    </div>
  );
}

export default Appointment;
