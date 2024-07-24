// import "./MobileBurger.Styled.css";
import ExitSVG from "../../../images/hederImg/ExitSVG";
import {
  Backdrop,
  BurgerButtonExit,
  BurgerButtonLogAut,
  BurgerContainer,
  BurgerLink,
  BurgerLinkWraper,
  BurgerMenu,
  LinkContainer,
} from "./MobileBurger.Styled";
import { selectShop } from "../../../store/shops/selectors";
import { useSelector } from "react-redux";

const MobileBurger = ({ closeBurger, isOpen, handleLogout }) => {
  const shop = useSelector(selectShop);

  function close(e) {
    if (e.target === e.currentTarget) {
      closeBurger();
    }
  }

  function onLogout() {
    closeBurger();
    handleLogout();
  }

  return (
    <>
      <Backdrop onClick={close}>
        <BurgerContainer $isOpen={isOpen}>
          <BurgerButtonExit onClick={closeBurger}>
            <ExitSVG />
          </BurgerButtonExit>
          <BurgerMenu>
            <BurgerLinkWraper>
              <LinkContainer>
                <BurgerLink
                  to={shop ? "/shop" : "/create-shop"}
                  onClick={closeBurger}
                  aria-label="Shop"
                >
                  Shop
                </BurgerLink>
              </LinkContainer>
              <LinkContainer>
                <BurgerLink to={"/medicine"} onClick={closeBurger}>
                  Medicine
                </BurgerLink>
              </LinkContainer>
              <LinkContainer>
                <BurgerLink to={"/statistics"} onClick={closeBurger}>
                  Statistics
                </BurgerLink>
              </LinkContainer>
            </BurgerLinkWraper>
            <BurgerButtonLogAut onClick={onLogout}>Log out</BurgerButtonLogAut>
          </BurgerMenu>
          {/* </div> */}
          {/* </> */}
        </BurgerContainer>
      </Backdrop>
    </>
  );
};
export default MobileBurger;
