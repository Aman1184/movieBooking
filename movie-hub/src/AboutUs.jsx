import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: red;
  text-align: center;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  background-color: #333;
  color: white;
  width: 200px;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
`;

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.cardsRef = React.createRef();
    this.state = {
      cardsVisible: false,
    };
  }

  handleScroll = () => {
    if (this.cardsRef.current) {
      const rect = this.cardsRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        this.setState({ cardsVisible: true });
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { cardsVisible } = this.state;
    return (
      <Container>
        <Heading>Who We Are</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
          semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </Paragraph>
        <CardsContainer ref={this.cardsRef} className={cardsVisible ? 'visible' : ''}>
          <Card>
            <CardTitle>Card 1</CardTitle>
            <CardDescription>
              This is the description for card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Card 2</CardTitle>
            <CardDescription>
              This is the description for card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Card 3</CardTitle>
            <CardDescription>
              This is the description for card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
          </Card>
        </CardsContainer>
      </Container>
    );
  }
}

export default AboutUs;
