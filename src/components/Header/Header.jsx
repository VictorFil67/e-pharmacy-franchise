import { useState } from "react";
// import { Link } from "react-router-dom";
import LogoMobile from "../../images/svg/logo/LogoMobile";
import "./Header.Styled.css";
import MobileBurger from "../Modal/MobileBurger/MobileBurger";
import BurgerMobileSVG from "../../images/svg/burger/BurgerMobileSVG";
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

const Header = () => {
  const [MobileBurgerMenu, setMobileBurgerMenu] = useState(false);
  // const [isLargeScreen, setIsLargeScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsLargeScreen(window.innerWidth >= 1440);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  const openBurger = () => {
    setMobileBurgerMenu(true);
  };

  const closeBurger = () => {
    setMobileBurgerMenu(false);
  };

  const user = true;

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
        {/* {isLargeScreen && ( */}
        <HeaderLinkWraper>
          <LinkContainer>
            <HeaderLink to="/">Shop</HeaderLink>
          </LinkContainer>
          <LinkContainer>
            <HeaderLink to="/medicine">Medicine</HeaderLink>
          </LinkContainer>
          <LinkContainer>
            <HeaderLink to="/statistics">Statistics</HeaderLink>
          </LinkContainer>
        </HeaderLinkWraper>
        {/* )} */}

        {user && (
          <>
            {/* {!isLargeScreen ? ( */}
            <BurgerButton onClick={openBurger}>
              <BurgerMobileSVG />
            </BurgerButton>
            {/* ) : ( */}
            <HeaderLogAut>Log Aut</HeaderLogAut>
            {/* )} */}
          </>
        )}
      </HeaderWrap>
    </>
  );
};

export default Header;
