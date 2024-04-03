import React, { useState } from 'react';

const Form = () => {
  const [showPopup, setShowPopup] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = e.target.numero.value;
    const batiment = e.target.batiment.value;
    const etage = e.target.etage.value;
    const usage = e.target.usage.value;
    const departement = e.target.departement.value;
    const autres = e.target.autres.value;

    fetch('http://localhost:3001/addSalle', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "id": id,
        "batiment": batiment,
        "etage": etage,
        "usage": usage,
        "departement": departement,
        "autre": autres
      })
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const handleClose = () => {
    setTimeout(() => {
      setShowPopup(false);
    }, 1);
    //console.log(showPopup)
  }

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
            <form onSubmit={handleSubmit}>
              <label style={{ fontSize: '20px' }}>Ajouter une salle</label>
              <div></div>
              <label style={{ fontSize: '16px' }} htmlFor="numero">Numero :</label>
              <input type="text" id="name" name="numero" />

              <label style={{ fontSize: '16px' }} htmlFor="batiment">Batiment :</label>
              <input type="text" id="email" name="batiment" />

              <label style={{ fontSize: '16px' }} htmlFor="etage">Etage :</label>
              <input type="text" id="email" name="etage" />

              <label style={{ fontSize: '16px' }} htmlFor="usage">Usage :</label>
              <input type="text" id="email" name="usage" />

              <label style={{ fontSize: '16px' }} htmlFor="departement">Département :</label>
              <input type="text" id="email" name="departement" />

              <label style={{ fontSize: '16px' }} htmlFor="autres">Autres indications :</label>
              <input type="text" id="email" name="autres" />

              <button type="submit">Soumettre</button>
            </form>
            <button onClick={() => handleClose()}>x</button> {/* Button to close the form */}
          </div>
        )}

      </button>    
    </div>
  );
}

export default Form;
