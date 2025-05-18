import styled from "styled-components";
import MeImg from '../assets/images/me.png';

const Section = styled.section`
  display: flex;
  gap: 100px;
  
  .info{
    width: 600px;

    h1{
        margin: 20px 0 20px;
        font-size: 2rem;
        color: #0e00d8;
    }
    h2{
        margin: 0 0 12px;
        font-size: 1.5rem;
        color: #6c56c4; 
    }
    h3{
        margin: 25px 0 10px;
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
        padding: 0px;
        gap: 12px;
        display: flex;
        list-style: none;
    }
    li {
        margin-bottom: 8px;
        color: #6c56c4; 
    }    
  }
    @media (max-width: 768px){
    display: block;
    margin-top: 8px;
    width: 280px;

    .info {
      width: 280px;
      margin-left: 16%;
      margin-bottom: 12%;

      h1 {
        margin: 19px 0 8px;
        font-size: 16px;
        text-align: center;
      }
      h2 {
        margin: 12px 0px 6px;
        font-size: 14px;
        text-align: center;
      }
      h3 {
        font-size: 14px;
        text-align: center;
        margin-top: 0px;
      }
      p {
        font-size: 14px;
        margin: 12px 0 24px;
      }
      ul {
        gap: 32px;
        margin-left: 4px;
        margin-top: 8px;
    }
      li {
        margin: 0px;
        font-size: 12px;
      }
    }
  }
`;

const Card = styled.div`
  display: block;
  margin: 8px 0 10px;
  margin-left: 12%;
  background: #eee;
  padding: 3px;
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
        width: 90%;
        margin-left: 12px;
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

    @media (max-width: 768px){
    display: flex;
    margin-left: 16%;
    padding: 0px;
    width: 100%;
    height: auto;
    margin-bottom: 12%;

    img {
      margin-left: 0px;
      width: 120px;
      height: 120px;
    }
    h3{
      margin: 10px;
      font-size: 12px;        
    }
    p {
      font-size: 12px;
    }
  }
`;

export function AboutSection() {
  return (
    <Section id="sobre-mim">
      <Card>
        <img src={MeImg} alt="Flor decorativa" />              
      <div>
          <h3>Olá sou Giovana</h3>
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
                <li className="info-p"><i className="bi bi-envelope m-2"></i><a href="mailto:maiagiovana644@gmail.com">Gmail</a></li>
                <li className="info-p"><i className="bi bi-github m-2"></i><a href="https://github.com/GiovanaMv">Github</a></li>
                <li className="info-p"><i className="bi bi-linkedin m-2"></i><a href="https://www.linkedin.com/in/giovana-maia1212/">LinkedIn</a></li>
              </ul>
          </div>
    </Section>
  );
}