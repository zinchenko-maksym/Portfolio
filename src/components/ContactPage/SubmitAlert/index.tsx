import React, { useEffect } from 'react';
import * as Styled from './style';

interface SubmitData {
  submited: boolean,
  status: number,
  submitHandle(com?: boolean, st?: number): any,
}

function SubmitAlert({ submited, status, submitHandle } : SubmitData) {
  const submitSuccess = () => {
    if (submited) {
      console.log(2);
    }
  };
  useEffect(() => {
    if (submited && status === 250) {
      console.log(1);
    }
  }, [submited]);

  return (
    <Styled.SubmitAlert submited={submited} id="Contact">
      Message submitted succesfully
      <Styled.CloseAlert onClick={() => submitHandle(false)}>&#x2717;</Styled.CloseAlert>
    </Styled.SubmitAlert>
  );
}

export default SubmitAlert;
