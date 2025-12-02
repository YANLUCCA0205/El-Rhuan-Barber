import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';

// URL base da API (o Vite fará o proxy para http://localhost:5000 )
const API_URL = '/api/auth';

function Modal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' ou 'register'
  const [step, setStep] = useState(1); // 1: Form, 2: Verification
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Resetar o estado ao abrir/fechar o modal
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setError('');
      setFormData({ name: '', email: '', password: '', phone: '' });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });

      localStorage.setItem('token', response.data.token);
      
      // Novos usuários são sempre clientes e vão para a página de agendamento
      alert('Registro realizado com sucesso! Redirecionando para Agendamento.');
      onClose();
      navigate('/appointment');
      
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao registrar. Verifique os dados.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem('token', response.data.token);
      
      // Supondo que o Back-end retorna o objeto do usuário com a função (role)
      const userRole = response.data.user.role; 
      
      if (userRole === 'admin') {
        alert('Login de Administrador realizado com sucesso!');
        navigate('/admin');
      } else {
        alert('Login realizado com sucesso! Redirecionando para Agendamento.');
        navigate('/appointment');
      }

      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao fazer login. Email ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  // Lógica de verificação (simulada, pois o Back-end não tem a lógica de WhatsApp)
  const handleVerification = (e) => {
    e.preventDefault();
    // Aqui você faria a chamada para a API de verificação
    alert('Verificação simulada concluída. Você está logado.');
    onClose();
    navigate('/appointment');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">El Rhuan Barber</h2>

        {/* Abas de Login/Cadastro */}
        <div className="form-tabs">
          <button
            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); setStep(1); setError(''); }}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); setStep(1); setError(''); }}
          >
            Cadastro
          </button>
        </div>

        {/* Mensagem de Erro */}
        {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>{error}</div>}

        {/* Conteúdo do Formulário */}
        <div className="modal-content">
          {/* ------------------------------------------------------------------ */}
          {/* ABA DE LOGIN */}
          {/* ------------------------------------------------------------------ */}
          <div className={`form-content ${activeTab === 'login' && step === 1 ? 'active' : ''}`}>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  className="form-input"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Senha</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  className="form-input"
                  placeholder="Sua senha"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="form-btn" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            <div className="form-divider">
              <span>ou</span>
            </div>

            <div className="social-login">
              <button className="social-btn">
                <i className="fab fa-google"></i> Google
              </button>
              <button className="social-btn">
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* ABA DE CADASTRO - PASSO 1: FORMULÁRIO */}
          {/* ------------------------------------------------------------------ */}
          <div className={`form-content ${activeTab === 'register' && step === 1 ? 'active' : ''}`}>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="register-name">Nome</label>
                <input
                  type="text"
                  id="register-name"
                  name="name"
                  className="form-input"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  className="form-input"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Senha</label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  className="form-input"
                  placeholder="Crie uma senha"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-phone">WhatsApp</label>
                <input
                  type="tel"
                  id="register-phone"
                  name="phone"
                  className="form-input"
                  placeholder="(99) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="form-btn" disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </button>
            </form>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* ABA DE CADASTRO - PASSO 2: VERIFICAÇÃO (Simulada) */}
          {/* ------------------------------------------------------------------ */}
          <div className={`form-content verification-step ${activeTab === 'register' && step === 2 ? 'active' : ''}`}>
            <form onSubmit={handleVerification}>
              <p>Enviamos um código de 6 dígitos para o seu WhatsApp.</p>
              <div className="whatsapp-info">
                <i className="fab fa-whatsapp"></i>
                <span>Verifique seu WhatsApp para o código.</span>
              </div>
              <div className="verification-code">
                <input type="text" className="code-input" maxLength="1" />
                <input type="text" className="code-input" maxLength="1" />
                <input type="text" className="code-input" maxLength="1" />
                <input type="text" className="code-input" maxLength="1" />
                <input type="text" className="code-input" maxLength="1" />
                <input type="text" className="code-input" maxLength="1" />
              </div>
              <button type="submit" className="form-btn">
                Verificar
              </button>
              <button type="button" className="resend-code">
                Reenviar Código
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
