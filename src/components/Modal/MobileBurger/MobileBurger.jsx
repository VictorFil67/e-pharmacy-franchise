// import { Link } from "react-router-dom";
// import Backdrop from "../../Backdrop/Backdrop";
import "./MobileBurger.Styled.css";
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
// import { useDispatch } from "react-redux";
// import { logoutThunk } from "../../../store/auth/operations";

const MobileBurger = ({ closeBurger, isOpen, handleLogout }) => {
  // const dispatch = useDispatch();

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
                <BurgerLink to={"/"}>Shop</BurgerLink>
              </LinkContainer>
              <LinkContainer>
                <BurgerLink to={"/medicine"}>Medicine</BurgerLink>
              </LinkContainer>
              <LinkContainer>
                <BurgerLink to={"/statistics"}>Statistics</BurgerLink>
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
