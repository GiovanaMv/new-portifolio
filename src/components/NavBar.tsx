import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from "styled-components";

const NavLink = styled(RouterNavLink)`
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;

  &.active {
    border-bottom: 1px solid yellow;
  }

  @media (max-width: 768px){
    padding: 0px 6px 8px;
  }
`;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(180deg, #977DFF,rgb(170, 151, 248), #fcffe6);

  @media (max-width: 768px){
    margin-bottom: 0px;
    width: 100%;
    overflow: hidden;
    ul{
      padding-left: 8px;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  padding: 28px;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(180deg, #977DFF,rgb(170, 151, 248),  #fcffe6);

  @media (max-width: 768px){
      padding: 0px;
    }
  `;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 0;

  @media (max-width: 768px){
      margin-bottom: 0px;
      align-item: center;
      margin: 0px 0 12px;
    }
`;

export const NavItem = styled.li`
  margin-left: 110px;
  border-bottom: 1px solid #fdffe8;
  
  a {
    color: rgb(225, 255, 156); 
    font-weight: bold;
    }

    @media (max-width: 768px){
        margin-bottom: 8px;
        margin-left: 0px;
        
        a{
          font-size: 12px;
        }
      }
`;

export function NavBar() {
  return (
    <Container>
      <Navbar>
        <NavLinks>
        <NavItem><NavLink to="/">Sobre mim</NavLink></NavItem>
        <NavItem><NavLink to="/education">Formações</NavLink></NavItem>
        <NavItem><NavLink to="/Sites">Projetos</NavLink></NavItem>
        <NavItem><NavLink to="/Ecommerce">E-commerce</NavLink></NavItem>
        <NavItem><NavLink to="/games">Jogos</NavLink></NavItem>
        </NavLinks>
    </Navbar>
    </Container>
  );
}