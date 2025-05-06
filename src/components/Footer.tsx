import styled from "styled-components";

const Rodape = styled.footer`
  background-image: linear-gradient(0deg, #977DFF,rgb(170, 151, 248),  #fcffe6);
  text-align: center;
  padding: 10px;
  margin-top: 5px;

  .links {
    display: flex;
    justify-content: center;  
    gap: 20px;                
    list-style: none;
    margin-bottom: 0px;   
    margin-top: 9px;       
}

.links-contact i {
    font-size: 32px; 
    color: rgb(225, 255, 156);
    courser: ponter;         
}

.links-contact i a {
    text-decoration: none;   
    color: inherit;  
}
    @media (max-width: 768px){
      padding: 6px;
      margin-top: 0px;
      width: 100%;

      .links {
        justify-content: normal;
        margin-left: 8%;
        gap: 90px;
      }

      .links-contact i {
        font-size: 16px;        
}
    }
`;

export function Footer() {
  return (
    <Rodape>
      <ul className="links" id="contacts">
        <li className="links-contact">
          <a href="https://github.com/GiovanaMv" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li className="links-contact">
          <a href="https://www.linkedin.com/in/giovana-maia1212/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li className="links-contact">
          <a href="mailto:maiagiovana644@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </li>
    </ul>
    </Rodape>
  );
}