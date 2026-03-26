import { useState } from "react";
import "../styles/AdminDashboard.css";
import proprietario from "../assets/proprietario.jpg";

export default function AdminDashboard() {
  const [section, setSection] = useState("dashboard");
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const changeSection = (newSection) => {
    setSection(newSection);
    setSidebarOpen(false);
  };

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">El Rhuan Barber</div>
          <div className="sidebar-subtitle">Painel Administrativo</div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Principal</div>

            <div
              className={`nav-item ${section === "dashboard" ? "active" : ""}`}
              onClick={() => changeSection("dashboard")}
            >
              <i className="fas fa-chart-line"></i>
              Dashboard
            </div>

            <div
              className={`nav-item ${section === "appointments" ? "active" : ""}`}
              onClick={() => changeSection("appointments")}
            >
              <i className="fas fa-calendar-alt"></i>
              Agendamentos
              <span className="nav-badge">5</span>
            </div>

            <div
              className={`nav-item ${section === "clients" ? "active" : ""}`}
              onClick={() => changeSection("clients")}
            >
              <i className="fas fa-users"></i>
              Clientes
            </div>
          </div>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main-content">

        {/* HEADER */}
        <header className="main-header">
          <div className="header-left">
            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>

            <h1 className="page-title">
              {section === "dashboard" && "Dashboard"}
              {section === "appointments" && "Agendamentos"}
              {section === "clients" && "Clientes"}
            </h1>
          </div>

          <div className="header-actions">
            <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
              <i className="fas fa-plus"></i>
              Novo Agendamento
            </button>

            <div className="admin-profile">
              <span>Rhuan Pedro</span>
              <img src={proprietario} alt="Admin" className="admin-avatar" />
            </div>
          </div>
        </header>

        {/* CONTEÚDO */}
        <div className="content-area">

          {/* DASHBOARD */}
          {section === "dashboard" && (
            <>
              <div className="dashboard-top">
                <div className="dashboard-title">
                  <h2>Resumo do Sistema</h2>
                  <p className="dashboard-subtitle">
                    Visão geral dos agendamentos e desempenho da barbearia
                  </p>
                </div>
                <div className="dashboard-image">
                  <img src={proprietario} alt="Admin" />
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">R$ 12.450</div>
                  <div className="stat-label">Receita do Mês</div>
                </div>

                <div className="stat-card">
                  <div className="stat-value">156</div>
                  <div className="stat-label">Agendamentos</div>
                </div>

                <div className="stat-card">
                  <div className="stat-value">89</div>
                  <div className="stat-label">Novos Clientes</div>
                </div>

                <div className="stat-card">
                  <div className="stat-value">4.8</div>
                  <div className="stat-label">Avaliação Média</div>
                </div>
              </div>

              <div className="card">
                <h3 className="card-title">Agendamentos de Hoje</h3>

                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Cliente</th>
                        <th>Horário</th>
                        <th>Serviço</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>João Silva</td>
                        <td>09:00</td>
                        <td>Corte + Barba</td>
                        <td><span className="status confirmed">Confirmado</span></td>
                      </tr>

                      <tr>
                        <td>Pedro Santos</td>
                        <td>10:30</td>
                        <td>Corte Clássico</td>
                        <td><span className="status pending">Pendente</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* AGENDAMENTOS */}
          {section === "appointments" && (
            <div className="card">
              <h3 className="card-title">Gerenciar Agendamentos</h3>
              <p className="placeholder">
                Seção de agendamentos em desenvolvimento...
              </p>
            </div>
          )}

          {/* CLIENTES */}
          {section === "clients" && (
            <div className="card">
              <h3 className="card-title">Gerenciar Clientes</h3>
              <p className="placeholder">
                Seção de clientes em desenvolvimento...
              </p>
            </div>
          )}
        </div>

        {/* MODAL */}
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="modal-title">Novo Agendamento</h3>

              <div className="form-group">
                <label>Cliente</label>
                <input type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label>Data</label>
                <input type="date" className="form-input" />
              </div>

              <div className="modal-actions">
                <button className="btn btn-secondary" onClick={() => setModalOpen(false)}>
                  Cancelar
                </button>

                <button className="btn btn-primary">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

    </div>
  );
}
