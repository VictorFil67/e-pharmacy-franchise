import FooterLogo from "../../images/svg/logo/FooterLogo";
// import LogoMobile from "../../images/svg/logo/LogoMobile";
import { HeaderLogo } from "../Header/Header.Styled";
import {
  FooterLink,
  FooterLogoText,
  FooterTop,
  FooterTopText,
  LinksBlock,
  LogoBlock,
} from "./FooterContent.Styled";

const FooterContent = () => {
  return (
    <>
      <FooterTop>
        <LogoBlock>
          <HeaderLogo to="/" aria-label="Home">
            <FooterLogo />
            <FooterLogoText>E-Pharmacy</FooterLogoText>
          </HeaderLogo>
          <FooterTopText>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </FooterTopText>
        </LogoBlock>
        <LinksBlock>
          <FooterLink>Shop</FooterLink>
          <FooterLink>Medicine</FooterLink>
          <FooterLink>Statistics</FooterLink>
        </LinksBlock>
      </FooterTop>
      <div></div>
    </>
  );
};

export default FooterContent;
