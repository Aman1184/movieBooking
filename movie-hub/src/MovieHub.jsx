import React from 'react';
import styled from 'styled-components';
import backgroundImage from './assets/img1.jpg';  // Update this path
import Navbar from './Navbar';

const Container = styled.div`
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  color: white;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  color: red;
`;

const HeroSubtitle = styled.h3`
  font-size: 2rem;
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
`;

const HeroButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;

const MovieHub = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection>
        <HeroTitle>Get your tickets book Now</HeroTitle>
        <HeroSubtitle>Get amazing offers on group booking</HeroSubtitle>
        <HeroDescription>
          We provide you all the latest movies with all the extra features. Please come and enjoy our services.
        </HeroDescription>
        <HeroButton>Check Movies</HeroButton>
      </HeroSection>
    </Container>
  );
}

export default MovieHub;
