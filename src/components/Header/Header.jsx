import { useState } from "react";
import LogoMobile from "../../images/hederImg/LogoMobile";
import MobileBurger from "../Modal/MobileBurger/MobileBurger";
import BurgerMobileSVG from "../../images/hederImg/BurgerMobileSVG";
import {
  BurgerButton,
  HeaderLink,
  HeaderLinkMed,
  HeaderLinkWraper,
  HeaderLogAut,
  HeaderLogo,
  HeaderLogoText,
  HeaderWrap,
  LinkContainer,
} from "./Header.Styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPath,
  selectToken,
  selectUser,
} from "../../store/auth/selectors";
import { logoutThunk } from "../../store/auth/operations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { selectShop } from "../../store/shops/selectors";

const Header = () => {
  const user = useSelector(selectUser);
  const shop = useSelector(selectShop);
  const token = useSelector(selectToken);
  const path = useSelector(selectPath);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [MobileBurgerMenu, setMobileBurgerMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
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
                <HeaderLink
                  to={shop ? "/shop" : "/create-shop"}
                  $path={path}
                  aria-label="Create shop"
                >
                  Shop
                </HeaderLink>
              </LinkContainer>
              <LinkContainer>
                <HeaderLinkMed
                  to={shop ? "/medicine" : "/create-shop"}
                  $path={path}
                  aria-label="Medicine"
                >
                  Medicine
                </HeaderLinkMed>
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
            <HeaderLogAut onClick={handleLogout}>Log out</HeaderLogAut>
          </>
        )}
      </HeaderWrap>
    </>
  );
};

export default Header;
