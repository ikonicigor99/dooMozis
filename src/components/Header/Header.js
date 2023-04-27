import { MainHolderContent, Content } from "./HeaderStyle";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
const Header = () => {
  return (
    <MainHolderContent>
      <Content>
        <Logo />
        <Menu />
      </Content>
    </MainHolderContent>
  );
};
export default Header;
