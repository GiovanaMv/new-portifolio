import styled from "styled-components";

const Container = styled.header`
  background-color: #977dff;
  color: white;
  padding-top: 15px;
  text-align: center;
  color: rgb(225, 255, 156);

  @media (max-width: 768px){
      width: 100%;
      padding: 16px;
      
      h1 {
        line-height: 32px;
        margin-bottom: 0px;
        font-weight: bold;
        font-size: 24px;
        margin-left: 0px;
      }
    }
`;

export function Header() {
  return (
    <Container>
      <h1>Meu Portifolio 2025</h1>
    </Container>
  );
}