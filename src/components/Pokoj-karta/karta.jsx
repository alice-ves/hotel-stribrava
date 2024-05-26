import { useEffect } from 'react';
import { useState } from 'react';

export const Card = ({ onSelectCard }) => {
  const [pokoje, setPokoje] = useState([]);

  useEffect(() => {
    const fetchPokoje = async () => {
      const response = await fetch('http://localhost:4000/api/pokoje');
      const data = await response.json();
      console.log(data);
      setPokoje(data.data);
    };
    fetchPokoje();
  }, []);
  return (
    <>
      {pokoje.map((pokoj) => {
        return (
          <div
            className="card"
            key={pokoj.id}
            onClick={() => {
              onSelectCard(pokoj);
            }}
          >
            <img
              className="card__image"
              src="../../../public/img-pokoje/pokoj01.jpg"
            />
            <div className="card__title">{pokoj.name}</div>
            <div className="card__body">{pokoj.cena}Kc na osobu</div>
          </div>
        );
      })}
    </>
  );
};
