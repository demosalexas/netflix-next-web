import useBillboard from '@/hooks/useBillboard';
import React from 'react';

const Billboard = () => {

  const { data, error, isLoading } = useBillboard();
  return (
    <div>

    </div>
  )
}

export default Billboard;
