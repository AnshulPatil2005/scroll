import PhoneModel from "./sections/PhoneModel";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";

const TextContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 8vw, 6rem);
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3));
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: #a8b2d1;
  font-weight: 300;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PhoneModel />
      <TextContainer>
        <Title>iPhone 13 Pro</Title>
        <Subtitle>Experience the future</Subtitle>
      </TextContainer>
    </>
  );
}

export default App;
