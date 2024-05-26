import { useState } from 'react';
import { Form } from './form';

export const Detail = ({ name, cena, popis }) => {
  return (
    <section className="light">
      <div className="container">
        {name ? (
          <>
            <h2>
              {name}, {cena} Kč na osobu na noc
            </h2>
            <div className="columns-2">
              <div className="column">
                <img src="img/image1.svg" alt="Pokoj" />
                <p>{popis}</p>
              </div>
              <Form />
            </div>
          </>
        ) : (
          <h2>Není vybrán žádný pokoj</h2>
        )}
      </div>
    </section>
  );
};
