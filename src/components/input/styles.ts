import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ConatineProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Conatiner = styled.div<ConatineProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  /* vai pegar a propriedade do container e alterar a cor da borda e icone */
  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}
       
/* vai pegar a propriedade do container indicando que contém value no input e manter o icone laranja */
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
    

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
