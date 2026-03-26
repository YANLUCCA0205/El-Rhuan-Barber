import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../index.css'
import '../styles/Modal.css';
import Modal from '../components/Modal'; // Vamos criar este componente

// IMPORTAÇÕES DAS IMAGENS
import logo from '../assets/logobgremoved.png';
import cabeloIcon from '../assets/cabelo.png';
import barbaIcon from '../assets/barba.png';
import targetIcon from '../assets/target.png';
import proprietario from '../assets/proprietario.jpg';
import fachada from '../assets/fachada - Copia.jpg';
import pomada from '../assets/pomada.jpeg';
import lancamento from '../assets/lancamento.png';
import locoes from '../assets/locoes.png';


function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal (chamada pelos botões de Agendar/Assinar)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Efeito para o smooth scroll (migrado do seu JS)
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="home">
      {/* O MODAL DE LOGIN/CADASTRO SERÁ UM COMPONENTE SEPARADO */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* HEADER */}
      <header>
        <div className="container nav">
          <div className="brand">
            {/* Você precisará colocar a imagem logobgremoved.png na pasta assets */}
            <img src={logo} alt="Logo El Rhuan Barber" />
            <strong className="title">El Rhuan Barber</strong>
          </div>
          <nav>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#localizacao">Local</a></li>
              <li><a href="#contato">Fale comigo</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* SERVIÇOS */}
      <section id="servicos" className="section container">
        <h2 className="titulo-centralizado">Serviços</h2>
        <div className="grid-3">
          {/* Cabelos */}
          <article className="service-card">
            <div className="service-content">
              <div className="icon">
                {/* Você precisará colocar a imagem cabelo.png na pasta assets */}
                <img src={cabeloIcon} alt="Ícone Cabelo" />
              </div>
            </div>
            <h3>Cabelos</h3>
            <div className="services-list">
              <div className="service-item">
                <span>Social</span>
                <span className="price">R$ 25,00</span>
              </div>
              <div className="service-item">
                <span>Degradê</span>
                <span className="price">R$ 30,00</span>
              </div>
              <div className="service-item">
                <span>Navalhado</span>
                <span className="price">R$ 35,00</span>
              </div>
            </div>
            <button className="btn" onClick={openModal}>Agendar</button>
          </article>

          {/* Outros Serviços */}
          <article className="service-card">
            <div className="icon">
              {/* Você precisará colocar a imagem barba.png na pasta assets */}
              <img src={barbaIcon} alt="Ícone Barba" />
            </div>
            <h3>Outros Serviços</h3>
            <div className="services-list">
              <div className="service-item">
                <span>Barba</span>
                <span className="price">R$ 15,00</span>
              </div>
              <div className="service-item">
                <span>Bigode</span>
                <span className="price">R$ 10,00</span>
              </div>
              <div className="service-item">
                <span>Sobrancelha</span>
                <span className="price">R$ 10,00</span>
              </div>
              <div className="service-item">
                <span>Manut. de prótese</span>
                <span className="price">R$ 130,00</span>
              </div>
            </div>
            <button className="btn" onClick={openModal}>Agendar</button>
          </article>

          {/* Combos */}
          <article className="service-card">
            <div className="icon">
              {/* Você precisará colocar a imagem target.png na pasta assets */}
              <img src={targetIcon} alt="Ícone Alvo" />
            </div>
            <h3>Combos</h3>
            <div className="services-list">
              <div className="service-item">
                <span>Barba + bigode</span>
                <span className="price">R$ 20,00</span>
              </div>
              <div className="service-item">
                <span>Cabelo + barba</span>
                <span className="price">R$ 40,00</span>
              </div>
              <div className="service-item">
                <span>Completo</span>
                <span className="price">R$ 55,00</span>
              </div>
            </div>
            <button className="btn" onClick={openModal}>Agendar</button>
          </article>
        </div>
      </section>

      {/* ASSINATURAS */}
      <section id="assinaturas" className="section container">
        <h2 className="titulo-centralizado">Assinaturas</h2>
        <div className="grid-3">
          {/* Plano Cabelo */}
          <article className="plan">
            <span className="tag-cupom">Cupom -10% até dia 5</span>
            <h3>Cabelo</h3>
            <div className="val">R$ 74,99</div>
            <ul>
              <li>corte de cabelo ilimitado</li>
              <li>acesso a sorteios exclusivos</li>
              <li>acesso ao grupo VIP</li>
            </ul>
            <button className="btn solid" onClick={openModal}>Assine já</button>
          </article>
          {/* Plano Barba */}
          <article className="plan">
            <span className="tag-cupom">Cupom -10% até dia 5</span>
            <h3>Barba</h3>
            <div className="val">R$ 49,99</div>
            <ul>
              <li>barba</li>
              <li>relaxamento</li>
              <li>refri</li>
            </ul>
            <button className="btn solid" onClick={openModal}>Assine já</button>
          </article>
          {/* Plano Cabelo + Barba */}
          <article className="plan">
            <span className="tag-cupom">Cupom -10% até dia 5</span>
            <h3>Cabelo + Barba</h3>
            <div className="val">R$ 114,99</div>
            <ul>
              <li>corte de cabelo</li>
              <li>barba</li>
              <li>relaxamento</li>
            </ul>
            <button className="btn solid" onClick={openModal}>Assine já</button>
          </article>
        </div>
      </section>

      {/* PRODUTOS (carrossel) */}
      <section id="produtos" className="section container">
        <h2>Produtos</h2>
        <div className="carousel">
          {/* O carrossel em CSS puro é complexo de migrar para React sem JS,
              mas vamos manter a estrutura para o CSS funcionar. */}
          <input type="radio" name="slide" id="s1" defaultChecked />
          <input type="radio" name="slide" id="s2" />
          <input type="radio" name="slide" id="s3" />

          <div className="slides">
            <figure className="slide">
              {/* Você precisará colocar a imagem pomada.jpeg na pasta assets */}
              <img src={pomada} alt="Foto de pomada" />
              <figcaption className="caption">
                <h4>Pomadas Two Brothers</h4>
                <p>Venha conhecer os produtos</p>
              </figcaption>
              <div className="more"><a className="btn solid" href="#">Veja mais</a></div>
            </figure>
            <figure className="slide">
              {/* Você precisará colocar a imagem lancamento.png na pasta assets */}
              <img src={lancamento} alt="Foto de gel capilar" />
              <figcaption className="caption">
                <h4>Lançamento Two Brothers</h4>
                <p>Sobre o gel</p>
              </figcaption>
              <div className="more"><a className="btn solid" href="#">Veja mais</a></div>
            </figure>
            <figure className="slide">
              {/* Você precisará colocar a imagem locoes.png na pasta assets */}
              <img src={locoes} alt="Foto de spray" />
              <figcaption className="caption">
                <h4>Sprays Two Brothers</h4>
                <p>Sobre os sprays</p>
              </figcaption>
              <div className="more"><button className="btn solid" onClick={openModal}>Veja mais</button></div>
            </figure>
          </div>

          <div className="dots">
            <label className="dot" htmlFor="s1" aria-label="Slide 1"></label>
            <label className="dot" htmlFor="s2" aria-label="Slide 2"></label>
            <label className="dot" htmlFor="s3" aria-label="Slide 3"></label>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="section about">
        <div className="container">
          <h2 className="titulo-centralizado">Quem Somos</h2>
          {/* Primeiro bloco: Proprietário */}
          <div className="about-block">
            <div className="photo">
              {/* Você precisará colocar a imagem proprietario.jpg na pasta assets */}
              <img src={proprietario} alt="Proprietário da Barbearia" />
            </div>
            <div className="card">
              <h3>Biografia</h3>
              <p>Sou <strong>Rhuan Pedro</strong>, barbeiro profissional com 3 anos de experiência na arte da barbearia,
                onde transformo cada corte em uma experiência única. Formado pela renomada Alfa Academy, me especializei em
                visuais modernos, clássicos e personalizados para realçar o melhor de cada cliente. Há 2 anos atuo como
                empresário no ramo, levando qualidade, excelência e atendimento diferenciado no comando da minha própria
                barbearia. Profissionalismo, estilo e paixão pelo que faço estão presentes em cada detalhe do meu trabalho.
              </p>
            </div>
          </div>

          {/* Segundo bloco: Missão, Visão e Valores */}
          <div className="about-block">
            <div className="card">
              <h3>Missão, Visão e Valores</h3>
              <p>Missão: Despertar em nossos clientes a postura de quem conquista o mundo com autenticidade e confiança.</p>
                

              <p>Visão: Tornar-nos a franquia de barbearia mais admirada de Conceição das Alagoas e região, sinônimo de
                excelência e estilo</p>
                

              <p>Valores: Compromisso com qualidade, pontualidade e um ambiente acolhedor.</p>
            </div>
            <div className="photo">
              {/* Você precisará colocar a imagem fachada - Copia.jpg na pasta assets */}
              <img src={fachada} alt="Fachada da Barbearia El Rhuan Barber" />
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="section container">
        <h2>Localização</h2>
        <div className="map-wrap">
          <div>
            <p>Estamos localizados na Av. Brasil, 519F - Centro.</p>
            <a className="btn solid" target="_blank" rel="noopener noreferrer"
              href="https://www.google.com.br/maps/place/El+Rhuan+Barber/@-19.9228471,-48.3812108,17z/data=!3m1!4b1!4m6!3m5!1s0x94bb3925790e670d:0xc03d82f1f7d8666c!8m2!3d-19.9228471!4d-48.3786359!16s%2Fg%2F11x7qzbyrd!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D">Calcular
              rota</a>
          </div>
          <div className="map">
            <iframe title="Mapa" loading="lazy" allowFullScreen
              src="https://maps.google.com/maps?q=Av.+Brasil%2C+519F+-+Centro%2C+Concei%C3%A7%C3%A3o+das+Alagoas+-+MG%2C+38120-000&t=&z=20&ie=UTF8&iwloc=&output=embed"
              frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </div>
        </div>
      </section>

      {/* CONTATO / FOOTER */}
      <footer id="contato">
        <div className="container foot">
          <div className="brand">
            {/* Você precisará colocar a imagem logobgremoved.png na pasta assets */}
            <img src={logo} alt="Logo El Rhuan Barber" />
            <strong className="title">El Rhuan Barber</strong>
          </div>
          <div className="social" aria-label="Redes sociais">
            <a href="https://www.instagram.com/el_rhuanbarber/" aria-label="Instagram" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.link/sryrcm" aria-label="WhatsApp" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554725348876" aria-label="Facebook" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
   );
}

export default Home;
