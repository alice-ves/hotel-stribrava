import { Card } from '../Pokoj-karta/karta';

export const Pokoje = () => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Nase pokoje</h2>
        <p>Vyberte si, ktery y nasich pokoju je pro Vas ten pravy</p>
        <div className="cards-row">
          <Card></Card>
        </div>
      </div>
    </section>
  );
};
