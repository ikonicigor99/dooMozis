import React from "react";
import { BackgroundImages } from "../../Data";
import {
  MainHolderSlider,
  HolderContent,
  Content,
  Title,
  Text,
} from "./SliderImagesStyle";
import HeroSlider from "hero-slider/dist/HeroSlider";
import { Slide } from "hero-slider";
const SliderImages = () => {
  return (
    <MainHolderSlider>
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfrerChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0,0,0,0.33)",
        }}
        settings={{
          slidingDuration: 250,
          slidingDeley: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoPlayDuration: 5000,
          height: "60vh",
        }}
      >
        {BackgroundImages.map((item, index) => (
          <Slide
            key={index}
            background={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              filter: "brightness(0.4)",
            }}
          />
        ))}
      </HeroSlider>

      <HolderContent>
        <Content>
          <Title>DOO MOZIS</Title>
          <Text>
            Je osnovana 1996.god. kao samostalna zanatska radnja pilana do
            2005.god, od 2005.god prelazi u preduzece 'd.o.o Mozis'. Pilana se
            bavi obradom drveta pocevsi od grube obrade trupaca do prerade
            elemenata za dalju proizvodnju drvnih proizvoda (neobradjena drska
            za metlu,elementi za namjestaj), kao i gotovih proizvoda (raznih
            vrsta paleta).
          </Text>
        </Content>
      </HolderContent>
    </MainHolderSlider>
  );
};

export default SliderImages;
