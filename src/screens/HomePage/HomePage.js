import react from "react-dom";
import AboutProducts from "../AboutProducts/AboutProducts";
import SliderImages from "../../components/SliderImages/SliderImages";
import { MainHolder } from "./HomePageStyle";

const HomePage = () => {
  return (
    <section id="#">
      <MainHolder>
        <SliderImages />
      </MainHolder>
    </section>
  );
};

export default HomePage;
