import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff6f61, #d4a5a5);
  color: white;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
`;

const Content = styled.div`
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: slideInFromLeft 1.5s ease-out;
`;

const Subheading = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 30px;
  opacity: 0.9;
  animation: slideInFromRight 1.5s ease-out;
`;

const Emoji = styled.div`
  font-size: 3rem;
  animation: bounce 2s infinite;
`;

const slideInFromLeft = `
  @keyframes slideInFromLeft {
    0% { transform: translateX(-100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
`;

const slideInFromRight = `
  @keyframes slideInFromRight {
    0% { transform: translateX(100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
`;

const bounce = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

const PropMaking = () => {
    return (
      <Container>
        <Content>
          <Heading>Sorry, this page is unavailable</Heading>
          <Subheading>Coming Soon</Subheading>
          <Emoji>🚧</Emoji>
        </Content>
      </Container>
    );
  };

  export default PropMaking;
