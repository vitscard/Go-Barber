import React, { ButtonHTMLAttributes } from 'react';
import { Conatiner } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Conatiner type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Conatiner>
);

export default Button;
