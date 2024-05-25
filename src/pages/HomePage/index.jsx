import './style.css';
import { Header } from '../../components/Header/header';
import { Pokoje } from '../../components/Pokoje/pokoje';
import { Detail } from '../../components/Pokoj-detail/detail';
import { Footer } from '../../components/Footer/footer';

export const HomePage = () => {
  return (
    <div className="container">
      <Header></Header>
      <Pokoje></Pokoje>
      <Detail></Detail>
      <Footer />
    </div>
  );
};
