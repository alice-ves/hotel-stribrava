import { useState } from 'react';
import { Card } from '../Pokoj-karta/karta';

export const Pokoje = ({ handleRoomSelect }) => {
  const [vybranyPokoj, setVybranyPokoj] = useState('Ahoj');

  const handleSelectCard = (props) => {
    setVybranyPokoj(props.name);
    setVybranyPokoj(props.cena);
    setVybranyPokoj(props.popis);

    handleRoomSelect(props);

    console.log('Vybraný pokoj:', props.name, props.cena, props.popis);
  };
  return (
    <section className="dark">
      <div className="container">
        <h2>Nase pokoje</h2>

        <p>Vyberte si, ktery y nasich pokoju je pro Vas ten pravy</p>
        <div className="cards-row">
          <Card onSelectCard={handleSelectCard} />
        </div>
      </div>
    </section>
  );
};
