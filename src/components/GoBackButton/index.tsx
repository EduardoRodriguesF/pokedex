import React, { useCallback } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { Button } from './styles';

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate('/');
  }, []);
  
  return (
    <Button onClick={handleGoBack}>
      <IoIosArrowRoundBack size={42} title="Go back" />
    </Button>
  );
}

export default GoBackButton;