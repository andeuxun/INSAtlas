// import React, { useState } from 'react';

function AddButton() {

  return (
    <div>
        <button style={{
            position: 'absolute',
            right: '15px',
            top: '25px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000}}>
        +</button>
    </div>
  );
}

export default AddButton;
