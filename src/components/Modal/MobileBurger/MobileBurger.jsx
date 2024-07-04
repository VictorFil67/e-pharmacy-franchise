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
  return (
    <>
      <Backdrop onClick={closeBurger} />
      <BurgerContainer $isOpen={isOpen}>
        <BurgerButtonExit onClick={closeBurger}>
          <ExitSVG />
        </BurgerButtonExit>
        <BurgerMenu>
          <BurgerLinkWraper>
            <LinkContainer>
              <BurgerLink to={"/"}>Home</BurgerLink>
            </LinkContainer>
            <LinkContainer>
              <BurgerLink to={"/shop"}>Medicine store</BurgerLink>
            </LinkContainer>
            <LinkContainer>
              <BurgerLink to={"/medicine"}>Medicine</BurgerLink>
            </LinkContainer>
          </BurgerLinkWraper>
          <BurgerButtonLogAut>Log out</BurgerButtonLogAut>
        </BurgerMenu>
        {/* </div> */}
        {/* </> */}
      </BurgerContainer>
    </>
  );
};
export default MobileBurger;
