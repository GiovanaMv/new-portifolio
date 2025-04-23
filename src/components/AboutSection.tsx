import styled from "styled-components";
import MeImg from '../assets/images/me.png';

const Section = styled.section`
  padding: 22px;
  display: flex;
  gap: 172px;
  
  .info{
    width: 500px;

    h1{
        margin: 0px 0 20px;
        font-size: 2rem;
        color: #0e00d8;
    }
    h2{
        margin: 0 0 15px;
        font-size: 1.5rem;
        color: #6c56c4;     
    }
    h3{
        margin: 10px 0 25px;
        font-size: 1rem;
        font-weight: bold;
        color: #0e00d8; 
    }
    p{
        margin: 0 0 20px;
        color: #444;
        text-align: justify;
    }
    ul {
        padding-left: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
        list-style: none;
        
    }
    li {
        margin-bottom: 8px;
        color: #6c56c4;  
    }    
  }
`;

const Card = styled.div`
  display: block;
  margin-left: 238px;
  background: #eee;
  padding: 10px;
  border-radius: 12px;
  width: 300px;
  text-align: center;
  background-color: #ffcfa7;
  border: 12px solid #ffcfa7;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover{
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    }
  img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 12px;
    }  
   h3{
        margin: 10px 0px 10px;
        color: #0e00d8;        
    }
    p{
    margin: 0;
    color: #000000;
    }
`;

export function AboutSection() {
  return (
    <Section id="sobre-mim">
      <Card>
        <img src={MeImg} alt="Flor decorativa" />              
      <div>
          <h3>Olá sou a Giovana</h3>
          <p>Dev Web, Games, e artista 🚀 . </p>
        </div>
      </Card>
        <div className="info">
          <h1>Estágio/Desenvolvedora Front-End</h1>
            <h2>Giovana Maia</h2>
            <p>
            Dev Front-End 🎨 e graduanda em Engenharia de Software. Profissional com perfil paciente, criativa, e analítica ⚡️. Possuo experiências em Desenvolvimento de WEB: com vários sites dinânmicos e projetos legais, um deles foi uma Page landing informativa, de responsabilidade ambiental para a ONG ParáPurá 💻, e também tenho 6 jogos que desenvolvi individualmente por diversão.
            </p>
            <h3>Contatos</h3>
              <ul >
                <li className="info-p"><i className="bi bi-envelope m-2"></i><a href="https://github.com/GiovanaMv">maiagiovana644@gmail.com</a></li>
                <li className="info-p"><i className="bi bi-github m-2"></i><a href="https://github.com/GiovanaMv">Meu Github</a></li>
                <li className="info-p"><i className="bi bi-linkedin m-2"></i><a href="https://www.linkedin.com/in/giovana-maia1212/">Meu LinkedIn</a></li>
              </ul>
          </div>
    </Section>
  );
}