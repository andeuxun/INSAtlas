import React, { useState } from 'react';



  
const Form = () => {
  const [showPopup, setShowPopup] = useState(false); 

  return (
    <div>
        <button onClick={() => setShowPopup(true)} 
            style={{
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
            zIndex: 1000}}>+    

        {showPopup && (
          <div style={{ background: 'grey', position: 'absolute', fontSize: '20px', top: '150px', right: '120%'}}>
            <form>
              <label style={{ fontSize: '20px' }}>Ajouter une salle</label>
              <div></div>
              <label style={{ fontSize: '16px' }} htmlFor="numero">Numero :</label>
              <input type="text" id="name" name="numero" />

              <label style={{ fontSize: '16px' }} htmlFor="batiment">Batiment :</label>
              <input type="text" id="email" name="batiment" />

              <label style={{ fontSize: '16px' }} htmlFor="etage">Etage :</label>
              <input type="text" id="email" name="etage" />

              <label style={{ fontSize: '16px' }} htmlFor="autres">Autres indications :</label>
              <input type="text" id="email" name="autres" />

              <button type="submit">Soumettre</button>
            </form>
            <button onClick={() => setShowPopup(false)}>x</button>
          </div>
        )}

      </button>    
    </div>
  );
}

export default Form;
