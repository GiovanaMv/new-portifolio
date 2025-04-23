import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from "styled-components";
// import { BsMoonStars } from "react-icons/bs";

const NavLink = styled(RouterNavLink)`
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  &.active {
    border-bottom: 1px solid yellow;
  }
`;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(180deg, #977DFF,rgb(170, 151, 248), #fcffe6);
`;

export const Navbar = styled.nav`
  display: flex;
  padding: 28px;
  justify-content: space-between;
  align-items: center;
  background-color: #977dff;
  background-image: linear-gradient(180deg, #977DFF,rgb(170, 151, 248),  #fcffe6);
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 0;
`;

export const NavItem = styled.li`
  margin-left: 110px;
  border-bottom: 1px solid #fdffe8;

  a {
    color: rgb(225, 255, 156); 
    font-weight: bold;

    &:hover{
      color:rgb(122, 255, 140);
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
          {/* <NavItem>
          <ThemeButton>
            <BsMoonStars />
          </ThemeButton>
        </NavItem> */}
        </NavLinks>
    </Navbar>
    </Container>
  );
}