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
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/auth/selectors";
import { logoutThunk } from "../../store/auth/operations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [MobileBurgerMenu, setMobileBurgerMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logoutThunk())
      .then(() => {
        toast.success("You  logged out successfully!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

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
        <MobileBurger
          closeBurger={closeBurger}
          isOpen={MobileBurgerMenu}
          handleLogout={handleLogout}
        />
      )}

      <HeaderWrap>
        <HeaderLogo to="/" aria-label="Home">
          <LogoMobile />
          <HeaderLogoText>E-Pharmacy</HeaderLogoText>
        </HeaderLogo>
        {user && token && (
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
            <HeaderLogAut onClick={handleLogout}>Log Aut</HeaderLogAut>
          </>
        )}
      </HeaderWrap>
    </>
  );
};

export default Header;
