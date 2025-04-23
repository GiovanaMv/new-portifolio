import styled from "styled-components";

const Container = styled.header`
  background-color: #977dff;
  color: white;
  padding-top: 15px;
  text-align: center;
  color:rgb(122, 255, 140); 
`;

export function Header() {
  return (
    <Container>
      <h1>Meu Portifolio 2025</h1>
    </Container>
  );
}