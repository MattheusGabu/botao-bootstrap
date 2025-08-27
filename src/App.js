import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Exemplo com Bootstrap</h1>

      {/* Botão */}
      <button className="btn btn-primary mb-4">Clique Aqui</button>

      {/* Card */}
      <div className="card" style={{ width: '18rem' }}>
        <img 
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQa_NTcMKb5EX4TN1zNSx3SvBzWZvezNeFSDgcBSnykKhQgXnK4uHRbhYGX8AHPpxKVqgJ7w5Hsle_ux4X7MdOnUmrjomZhv06NRkGc7Y4" 
          className="card-img-top" 
          alt="Exemplo" 
        />
        <div className="card-body">
          <h5 className="card-title">Dinossauro</h5>
          <p className="card-text">
            Baryonix.
          </p>
          <a href="#" className="btn btn-secondary">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
}

export default App;
