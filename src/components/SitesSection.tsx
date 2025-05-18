import styled from "styled-components";
import logoImg from '../assets/images/logo.png';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 33px;

  @media (max-width: 768px){
      display: block;
      margin: 32px 25px 24%;
      
    }
`;
const GroupIcon = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  gap: 16px;
  margin-left: 132px;

  @media (max-width: 768px){
    margin-left: 8px;
    padding-left: 3px;
    display: grid;
    grid-template-columns: 90px 90px 90px;
    
  }
`;
const IconItem = styled.li`
  background-color: rgb(255, 255, 255);
  padding: 10px;
  width: 120px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  img{
    width: 100%;
    border-radius: 10px;
    margin-bottom: 6px;
  }
  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  }
  a{
    text-decoration: none;
    color:rgb(83, 139, 202);
    font-weight: bold;
    line-height: 1;
    font-size: 14px;
  }

    @media (max-width: 768px){
    width: 90%;
    padding: 8px;
    margin-left: 4px;
    max-height: 110px;
    margin-bottom: 0px;

    img {
    margin-bottom: 0px;
    }
    a {
      font-size: 9px;
      line-height: 0px;
    }
  }
`;
const TextCard = styled.li`
  list-style: none;
  max-width: 362px;
  margin-left: 20%;
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
    margin-left: 23px;
    margin-top: 48px;

    h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
    .description {
    font-size: 12px;
    margin-bottom: 39px;
  }
`;

export function SitesSection() {
  return (
    <>
      <Section>
        <GroupIcon>
        <IconItem>
          <a href="https://chihiro-nine.vercel.app/" target="blank"><img src="https://i.pinimg.com/originals/49/66/28/4966288bf50394180d6a1509e08b61b6.gif" alt="Logo chihiro" />Chihiro</a>              
        </IconItem>
        <IconItem>
          <a href="https://site-signos-bootstrap.vercel.app/" target="blank"><img src="https://i.pinimg.com/originals/df/0e/9a/df0e9a1b5aef3f929291e9ac47025ecf.gif" alt="Site exemplar informativo sobre Signos" />Signos</a>              
        </IconItem>
        <IconItem>
          <a href="https://github.com/GiovanaMv/clone_disneyplus.git"><img src="https://i.pinimg.com/736x/ba/39/b0/ba39b091b81d5acabf86f4dbd4fe45ad.jpg" alt="Clone DisneyPlus" />Disney+</a>              
        </IconItem>
        <IconItem>
          <a href="https://sorteador-grunt-five-omega.vercel.app/" target="blank"><img src="https://i.pinimg.com/originals/df/5e/a4/df5ea4085a438be37674bbd8aa6c8a3d.gif" alt="Site Sorteio" />Sorteio</a>              
        </IconItem>
        <IconItem>
          <a href="https://parapura.vercel.app/" target="blank"><img src={logoImg} alt="Informação sobre responsabilidade, ecosistema e sustentabilidade" />ParáPurá</a>              
        </IconItem>
        <IconItem>
          <a href="https://project-list-vue.vercel.app/" target="blank"><img src="https://i.pinimg.com/736x/52/1e/5e/521e5e5d60fcb7defd29006480657462.jpg" alt="Lista Divertida de Super Mercados" />Lista-compras</a>              
        </IconItem>
        </GroupIcon>
          <TextCard>
            <h3>Sites Dinâmicos</h3>
            <p className="description">
              São sites divertidos, dinâmicos e interativos. Feitos com: Typescript, Javascript, HTML, CSS, SASS, Bootstrap, JQuery, React, Vue.js, AOS, Babel, ES6, Parcel, Gulp, Grunt.
            </p>
        </TextCard>
      </Section>
    </>
  );
  
}
