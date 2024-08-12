import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: red;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

export const NavLink = styled.li`
  background: red;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
`;
