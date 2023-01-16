import styled from '@emotion/styled';

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ButtonOptions = styled.button`
  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  transition: all 500ms ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
  }
`;
