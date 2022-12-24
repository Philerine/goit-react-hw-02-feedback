import styled from 'styled-components';

export const Button = styled.div`
  padding: 10px;
  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: rgba(255, 113, 99, 0.6);
    cursor: pointer;
    border: 6px groove rgba(172, 235, 222, 1);
    :not(:last-child) {
      margin-right: 15px;
    }
    :hover {
      background-color: rgba(255, 113, 99, 0.9);
    }
  }
`;