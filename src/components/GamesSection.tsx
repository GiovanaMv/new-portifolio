import styled from "styled-components";
import jogo1 from '../assets/images/joginho1.gif';
import jogo4 from '../assets/images/joguinho4.gif';
import jogo5 from '../assets/images/joguinho5.gif';
import jogo2 from '../assets/images/joguinho2.gif';
import jogo3 from '../assets/images/joguinho3.gif';

const Section = styled.section`
  display: block;  
`;
const GroupIcon = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin-top: 53px;
  justify-content: center;
  align-items: flex-start;
  
`;
const IconItem = styled.li`
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  width: 180px; 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  img{
    width: 100%;
    margin-bottom: 13px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover{
      transform: translateY(-9px);
    }
  }
  a{
    color:rgb(255, 123, 248);
    font-weight: bold;
    text-decoration: none;
    }
`;
const TextCard = styled.li`
  list-style: none;
  max-width: 900px;
  margin-left: 18%;
  text-align: center;
  margin-top: 30px;
  h3 {
    margin-bottom: 24px;
    color:rgb(255, 123, 248);
  }

  .description {
    color: #555;
    text-align: justify;
  }
`;

export function GamesSection() {
  return (
    <>
      <Section>
      <TextCard>
            <h3>Jogos Digitais</h3>
            <p className="description">
            Alguns desses jogos são responsivos e estão em processo de testes, utilizei sensor de movimento, então pode-se jogar movendo a tela | smartphone.
            <br></br>● Usei no desenvolvimento : HTML, CSS, Javascript e Python, GameMaker.
            </p>
        </TextCard>
      <GroupIcon>
        <IconItem>
          <a href="https://ophelia-eight.vercel.app/" target="blank"><img src={jogo4} alt="A" />Ophelia - Labirinto</a>              
        </IconItem>
        <IconItem>
          <a href="https://jgbolinhascolors.vercel.app/" target="blank"><img src={jogo1} alt="A" />Bolinhas e Cubinhos</a>              
        </IconItem>
        <IconItem>
          <a href="https://jogo-aventura-submarina.vercel.app/index.html" target="black"><img src={jogo5} alt="A" />Aventura Submarina</a>              
        </IconItem>
        <IconItem>
          <a href="https://sky-bounce.vercel.app/" target="blank"><img src={jogo3} alt="A" />Sky Bounce</a>              
        </IconItem>
        <IconItem>
          <a href="https://jogo-bolinhas.vercel.app/" target="blank"><img src={jogo2} alt="A" />Bolinhas Coloridas</a>              
        </IconItem>
        </GroupIcon>
          
      </Section>
    </>
  );
  
}
