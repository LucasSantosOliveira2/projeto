import styled from 'styled-components';

export const TabBarContainer = styled.ul`
  padding: 0 3rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  height: 50px;
`;

export const Tab = styled.li<{ $active: boolean }>`
    height: 60px;
    font-weight:  ${(props) => (props.$active ? '700' : '500')};;
    padding: 0 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    border-bottom:  ${(props) => (props.$active ? '2px solid #7551FF' : '0')};
    cursor: pointer;
`
