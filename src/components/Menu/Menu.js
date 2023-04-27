import { MainHolderMenu, HolderOptions } from "./MenuStyle";
import { OptionMenu } from "../../Data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Menu = () => {
  const [active, setActive] = useState(0);
  return (
    <MainHolderMenu>
      <HolderOptions>
        {OptionMenu.map((item, index) => (
          <Link
            onClick={() => setActive(index)}
            className={active === index ? "activeClass" : ""}
            key={index}
            to={item.href}
            smooth={true}
          >
            {item.option}
          </Link>
        ))}
      </HolderOptions>
    </MainHolderMenu>
  );
};

export default Menu;
