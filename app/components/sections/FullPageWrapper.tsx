import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HomeSection from './HomeSection';

const FullPageWrapper = () => {
  const [resetHomeSection, setResetHomeSection] = useState(false);

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      
      onLeave={(_origin: any, destination: any, _direction: any) => {
        setResetHomeSection(false);
        
      }}
      
      afterLoad={(_origin: any, destination: any, _direction: any) => {
        if (destination.index === 0) {
          setResetHomeSection(false); // Reinicia primero
          setResetHomeSection(true);  // Luego activa
        }
      }}

      render={() => (
        <ReactFullpage.Wrapper>
          <HomeSection reset={resetHomeSection} />
          <div className="section">
            <h1>Sección 2</h1>
            <p>Contenido de la sección 2</p>
          </div>
          {/* ... (el resto de tu código aquí) */}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};


export default FullPageWrapper;
