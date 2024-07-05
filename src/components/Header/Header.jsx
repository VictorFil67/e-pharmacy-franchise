import { useState } from "react";
import LogoMobile from "../../images/hederImg/LogoMobile";
import "./Header.Styled.css";
import MobileBurger from "../Modal/MobileBurger/MobileBurger";
import BurgerMobileSVG from "../../images/hederImg/BurgerMobileSVG";
import {
  BurgerButton,
  HeaderLink,
  HeaderLinkWraper,
  HeaderLogAut,
  HeaderLogo,
  HeaderLogoText,
  HeaderWrap,
  LinkContainer,
} from "./Header.Styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";

const Header = () => {
  const user = useSelector(selectUser);
  const [MobileBurgerMenu, setMobileBurgerMenu] = useState(false);

  const openBurger = () => {
    setMobileBurgerMenu(true);
  };

  const closeBurger = () => {
    setMobileBurgerMenu(false);
  };

  // const user = true;

  return (
    <>
      {MobileBurgerMenu && (
        <MobileBurger closeBurger={closeBurger} isOpen={MobileBurgerMenu} />
      )}

      <HeaderWrap>
        <HeaderLogo to="/" aria-label="Home">
          <LogoMobile />
          <HeaderLogoText>E-Pharmacy</HeaderLogoText>
        </HeaderLogo>
        {user && (
          <>
            <HeaderLinkWraper>
              <LinkContainer>
                <HeaderLink to="/" aria-label="Shop">
                  Shop
                </HeaderLink>
              </LinkContainer>
              <LinkContainer>
                <HeaderLink to="/medicine" aria-label="Medicine">
                  Medicine
                </HeaderLink>
              </LinkContainer>
              <LinkContainer>
                <HeaderLink to="/statistics" aria-label="Statistics">
                  Statistics
                </HeaderLink>
              </LinkContainer>
            </HeaderLinkWraper>

            <BurgerButton onClick={openBurger}>
              <BurgerMobileSVG />
            </BurgerButton>
            <HeaderLogAut>Log Aut</HeaderLogAut>
          </>
        )}
      </HeaderWrap>
    </>
  );
};

export default Header;
