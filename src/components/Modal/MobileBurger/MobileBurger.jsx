// import { Link } from "react-router-dom";
// import Backdrop from "../../Backdrop/Backdrop";
import "./MobileBurger.Styled.css";
import ExitSVG from "../../../images/svg/Exit/ExitSVG";
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

const MobileBurger = ({ closeBurger, isOpen }) => {
  function close(e) {
    if (e.target === e.currentTarget) {
      closeBurger();
    }
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
                <BurgerLink to={"/"}>Shop</BurgerLink>
              </LinkContainer>
              <LinkContainer>
                <BurgerLink to={"/medicine"}>Medicine</BurgerLink>
              </LinkContainer>
              <LinkContainer>
                <BurgerLink to={"/statistics"}>Statistics</BurgerLink>
              </LinkContainer>
            </BurgerLinkWraper>
            <BurgerButtonLogAut>Log out</BurgerButtonLogAut>
          </BurgerMenu>
          {/* </div> */}
          {/* </> */}
        </BurgerContainer>
      </Backdrop>
    </>
  );
};
export default MobileBurger;
