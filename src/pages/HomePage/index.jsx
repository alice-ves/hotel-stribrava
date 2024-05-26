import './style.css';
import { Header } from '../../components/Header/header';
import { Pokoje } from '../../components/Pokoje/pokoje';
import { Detail } from '../../components/Pokoj-detail/detail';
import { Footer } from '../../components/Footer/footer';
import { useState } from 'react';

export const HomePage = () => {
  const [vybranyPokoj, setvybranyPokoj] = useState(null);

  const handleSelect = (props) => {
    setvybranyPokoj(props);
  };

  return (
    <div className="container">
      <Header></Header>
      <Pokoje handleRoomSelect={handleSelect}></Pokoje>
      <Detail
        name={vybranyPokoj?.name}
        cena={vybranyPokoj?.cena}
        popis={vybranyPokoj?.popis}
        obrazek={vybranyPokoj?.obrazek}
      ></Detail>
      <Footer />
    </div>
  );
};
