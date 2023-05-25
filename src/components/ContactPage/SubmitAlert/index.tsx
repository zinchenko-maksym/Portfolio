import React from 'react';
import * as Styled from './style';

interface SubmitData {
  submited: boolean;
  submitHandle(com?: boolean, st?: number): void;
}

function SubmitAlert({ submited, submitHandle }: SubmitData) {
  return (
    <Styled.SubmitAlert submited={submited.toString()} id="Contact">
      Message submitted succesfully
      <Styled.CloseAlert
        onClick={() => {
          return submitHandle(false);
        }}
      >
        &#x2717;
      </Styled.CloseAlert>
    </Styled.SubmitAlert>
  );
}

export default SubmitAlert;
