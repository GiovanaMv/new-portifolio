import styled from "styled-components";
import Croche from '../assets/images/croche.png';
import espagueteImg from '../assets/images/restaurante.png';
import sofa from '../assets/images/sofá.png';
import vasinhos from '../assets/images/vasinhos.png';
import colarImg from '../assets/images/colar.png';
import bagImg from '../assets/images/bag.png';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 18px;

  @media (max-width: 768px){
    display: block;
    margin: 16px 16px 24px;
  }
`;
const GroupIcon = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  list-style: none;
  gap: 24px;
  width: 100%;
  padding: 12px;
  margin-left: 182px;
  justify-items: center;

  @media (max-width: 768px) {
    margin: 24px 0;
  }
`;
const IconItem = styled.li`
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  img{
    width: 90%;
    border-radius: 10px;
  }
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  }
  a{
    text-decoration: none;
    color:rgb(83, 139, 202);
    font-weight: bold;
    font-size: 14px;
  }

    @media (max-width: 768px){
      padding: 6px;
      a {
        font-size: 9px;
      }
      img {
        width: 100%;
      }
    }
`;
const TextCard = styled.li`
  list-style: none;
  max-width: 362px;
  margin-left: 26%;
  text-align: center;
  margin-top: 30px;
  
  h3 {
    margin-bottom: 24px;
    color:rgb(83, 139, 202);
  }

  .description {
    color: #555;
    max-width: 500px;
    text-align: justify;
    
  }

  @media (max-width: 768px){
    max-width: 280px;
    margin-left: 6%;
    margin-top: 8px;
    margin-bottom: 28px;

    h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
    .description {
    font-size: 12px;
  }
  }
`;

export function EcommerceSection() {
  return (
    <>
      <Section>
          <TextCard>
            <h3>Sites Comerciais</h3>
            <p className="description">
            São sites voltados ao comercio, e lojas independentes. Feitos com: Javascript, HTML, CSS, SASS, Bootstrap, JQuery, React, Typescript, Vite, Vue.js, AOS, Babel, ES6, Parcel, Gulp, Grunt, Canva, Adobe.
            </p>
          </TextCard>
        <GroupIcon>
        <IconItem>
          <a href="https://boot-restaurant.vercel.app/" target="blank"><img src={espagueteImg} alt="Logo de prato de espaguete para Restaurante" />Restaurante</a>              
        </IconItem>
        <IconItem>
          <a href="https://loja-virtual-taupe.vercel.app/" target="blank"><img src={Croche} alt="Logo de Lã para Site de Linha e Croche" />Lana Colorata</a>              
        </IconItem>
        <IconItem>
          <a href="#"><img src={sofa} alt="Imagem de cadeira para loja de Móveis" />Loja Móveis</a>              
        </IconItem>
        <IconItem>
          <a href="https://goldenjewels-exercicio.vercel.app/" target="blank"><img src={colarImg} alt="Logo de um Colar em 3D com pedra verde para Loja" />GJoias</a>              
        </IconItem>
        <IconItem>
          <a href="#" target="blank"><img src={bagImg} alt="Informação" />Loja Virtual</a>              
        </IconItem>
        <IconItem>
          <a href="#" target="blank"><img src={vasinhos} alt="Lista Divertida de Super Mercados" />Home&Designer</a>              
        </IconItem>
        </GroupIcon>
      </Section>
    </>
  );
  
}

