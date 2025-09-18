import React from 'react';
import { Button, ButtonProps } from '@react-email/components';

export const ImmichButton = ({ children, ...props }: ButtonProps) => (
  <Button
    {...props}
    style={{
      backgroundColor: '#4f46e5',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '12px 24px',
      borderRadius: '9999px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      display: 'inline-block',
      lineHeight: '1.2',
    }}
  >
    {children}
  </Button>
);
