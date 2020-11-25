import styled from 'styled-components';
import HeaderBG from '../assets/images/bg-header.svg';

const Header = styled.header`
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${HeaderBG});
  background-size: 100%;
  background-repeat: no-repeat;
  margin-bottom: 6rem;
`;

export default Header;
