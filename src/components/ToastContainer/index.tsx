import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toaster';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastConatiner: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransictions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );
  // Rotação
  // from: { right: '-120%', opacity: 0, transform: 'rotatez(0deg)' },
  // enter: { right: '0%', opacity: 1, transform: 'rotatez(360deg)' },
  // leave: { right: '-120%', opacity: 0, transform: 'rotatez(0deg)' },
  return (
    <Container>
      {messageWithTransictions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastConatiner;
