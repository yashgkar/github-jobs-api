import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 6px;
  width: 80%;
  padding: 0 1.6rem;
  height: auto;
  background-color: white;

  .company-logo {
    transform: translate(20px, -20px) scale(1.5);
    width: 2.5rem;
    height: 2.5rem;
    background-color: dodgerblue;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 1.8rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #6E8098;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #19202D;
  }

  h5 {
    color: #5964e0;
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  column-gap: 2rem;
  row-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: 65rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;
