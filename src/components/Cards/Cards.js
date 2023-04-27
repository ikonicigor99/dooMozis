import React from "react";
import { useState } from "react";
import { MainHolder, HolderAbout, Card } from "./CardsStyle";
// import { AboutCardContent } from "../../Data";
import Title from "../Title/Title";
const Cards = () => {
  // const [data, setData] = useState(AboutCardContent);
  const [popUp, setPopUp] = useState();
  return (
    <></>
    // <MainHolder>
    //   <HolderAbout>
    //     {data.map((item, index) => (
    //       <Card
    //         onMouseEnter={() => setPopUp(index)}
    //         onMouseLeave={() => setPopUp(null)}
    //         key={index}
    //         index={index}
    //       >
    //         <Title className="imageCard" title={item.title} />

    //         <img src={item.img} />
    //       </Card>
    //     ))}
    //   </HolderAbout>
    // </MainHolder>
  );
};

export default Cards;
