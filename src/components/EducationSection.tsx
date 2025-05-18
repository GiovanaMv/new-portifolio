import styled from "styled-components";

import Pintura from '../assets/images/pintura.png';
import Costura from '../assets/images/costura.png';
import Croche from '../assets/images/croche.png';
import Game from '../assets/images/game.png';

const Section = styled.section`
  display: flex;
  margin-top: 6px;
  gap: 89px;

  @media (max-width: 768px){
      display: block;
    }

  .block-skills{
    li{
      display:flex;
    }
  }
  ul{
    padding-left: 21px;  
  li{
      list-style: none;
    }
  }
  h2{
    color: royalblue;
    font-size: 24px;
  }
  h3{ 
    font-size: 18px;  
  }
  h5{
    font-size: 18px;
    margin-bottom: 12px;
  }
  h3, h5{
    color:rgb(191, 0, 216);
  }
  h4{
    font-size: 14px;
    color:rgb(110, 108, 90);
  }

  .left-column{
    max-width: 350px;
    margin-left: 174px;

    p{
      font-size: 14px;
    }

    @media (max-width: 768px){
      margin-left: 0px;
      max-width: 350px;

      h2{
        margin: 4px 0px 12px;
        font-size: 18px;
      }
      h3{ 
        font-size: 16px;
        margin-top: -8px;  
      }
      ul{
        padding-left: 34px;  
      li{
          list-style: none;
        }
      }
    }
  }
  .right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 550px;

    .block {
      h2 {
        font-size: 24px;
      }
      ul {
      display: flex;
      padding-left: 0px;
      margin-bottom: 0px;
      li {
        margin-left: 12px;
        text-align: inherit;
        list-style: none;
        font-size: 0.9rem;
        }
      }
    }
  .block-experience {
    ul{
          display: grid;
          grid-template-columns: 150px 150px 150px 150px;
        }
      li {
        margin-left: 12px;
      }

    @media (max-width: 768px){
      max-width: 280px;
      ul{
          display: grid;
          grid-template-columns: 150px 150px;
          padding-left: 21px;
        }
      li {
        margin-left: 12px;
        max-width: 138px;
      }
      h2{
        font-size: 18px;
      }
      h5{
        font-size: 16px;
        margin: 1px 0px 6px;
        }
      }
    }
  }
    .block-education{
      ul{
        list-style: none;
        display: flex;
        gap: 16px;
      }
      li{
        padding: 6px;
        position: static;
        font-size: 13px;
        display: block;
        border-radius: 10px;
        text-align: center;
        max-width: 130px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: transform 0.2s ease, box-shadow 0.2s ease; 
        &:hover{
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }
      }
      img{
        width: 80px;
        margin-bottom: 12px;
      }
      @media (max-width: 768px){
      max-width: 280px;
      ul{
          display: flex;
          gap: 16px;
          margin-left: 5px;
        }
      li {
        font-size: 10px;
        padding: 6px;
      }
      h2{
        font-size: 18px;
      }
      img{
        width: 50px;
      }
    }
  }
  .block-skills{
    ul{
      display: flex;

      li{
        font-size: 14px;
        margin-left: 12px;
      }
    }
    @media (max-width: 768px){
      
    ul{
      display: flex;
      li{
        font-size: 10px;
        margin-left: 12px;
      }
    }
    h2{
        font-size: 18px;
      }
  }
`;

export function EducationSection() {
  return (
    <Section id="education">
      <div  className="left-column">
        <h2 className="education-title"><i className="bi bi-stars m-2"></i>Experiência Profissional</h2>
          <ul>
            <li>
              <h3>Empresa Polyvox Tecnologia Digital</h3>
              <h4>Diarista - 03/2025</h4>
              <p>Trabalhava no setor de montagem de placas e cabos eletrônicos.</p>
            </li>
            <li>
              <h3>Hostel Vet  - Hostel e creche para pets</h3>
              <h4>Ajudante - 02/2025</h4>
              <p>
                Fazia atividades didáticas e educativas como monocromia, sons calmos, e “caça ao tesouro”.
              </p>
            </li>
            <li>
              <h3>Medicina Ocupacional Amazon Life</h3>
              <h4>Estágio de Análise Clínica - 05/2023 - 08/2023</h4>
              <p>Executava tipagem e coleta sanguínea, exames laboratoriais.
                Colaborava com a análise e avaliação dos resultados e exames.
            </p>
            </li>
          </ul>
        </div>
        
        <div className= "right-column">
          <div className="block-experience">
            <h2><i className="bi bi-stars m-2"></i>Formação</h2>
            <ul>
              <li><h5>Engineer Software</h5><h4>Universidade Centro Universitário União das Américas - 2025 | 2028</h4></li>
              <li><h5>Engenharia de Front-end</h5><h4>EBAC - Escola Britânica de Artes Criativas e Tecnologia - 2024 | 2025</h4></li>
              <li><h5>User Experience</h5><h4>Universidade Centro Universitário União das Américas - 01/2025</h4></li>
              <li><h5>Figma</h5><h4>EBAC - Escola Britânica de Artes Criativas e Tecnologia - 11/2024</h4></li>
            </ul>
          </div>
        <div className="block-education">
          <h2><i className="bi bi-stars m-2"></i>Hobbies</h2>
            <ul >
              <li><img src={Pintura} alt="Flor decorativa" />Pinturas em telas</li>
              <li><img src={Croche} alt="Flor decorativa" />Crochê</li>
              <li><img src={Costura} alt="Flor decorativa" />Costurar</li>
              <li><img src={Game} alt="Flor decorativa" />   Jogos digitais</li>
            </ul>
          </div>
        <div className="block-skills">
          <h2><i className="bi bi-stars m-2"></i>Skills</h2>
            <ul>
              <li> ⚛️REACT</li>
              <li>Figma</li>
              <li>🧙‍♂️Babel</li>
              <li>✨SASS</li>
              <li>Typescript⚡</li>
              <li>💅Styled Component</li>
            </ul>
          </div>
        </div>
    </Section>
  );
}