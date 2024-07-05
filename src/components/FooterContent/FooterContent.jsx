import InstagramSvg from "../../images/footer/InstagramSvg";
import YoutubeSvg from "../../images/footer/YoutubeSvg";
import FacebookSvg from "../../images/footer/FacebookSvg";
// import FacebookSvg from "../../images/footer/FacebookSvg";
import FooterLogo from "../../images/svg/logo/FooterLogo";

import {
  ClarificationLink,
  Copyright,
  FooterBottom,
  FooterLink,
  FooterLogoText,
  FooterLogoWrap,
  FooterTop,
  FooterTopText,
  FooterTopTextDesk,
  LinksBlock,
  LogoBlock,
  MediaLinks,
  PagesLinks,
} from "./FooterContent.Styled";

const FooterContent = () => {
  return (
    <>
      <FooterTop>
        <LogoBlock>
          <FooterLogoWrap to="/" aria-label="Home">
            <FooterLogo />
            <FooterLogoText>E-Pharmacy</FooterLogoText>
          </FooterLogoWrap>
          <FooterTopText>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </FooterTopText>
          <FooterTopTextDesk>
            Created a drug franchise that embodies effective formulas and
            changes the approach to treatment.
          </FooterTopTextDesk>
        </LogoBlock>
        <LinksBlock>
          <PagesLinks>
            <FooterLink>Shop</FooterLink>
            <FooterLink>Medicine</FooterLink>
            <FooterLink>Statistics</FooterLink>
          </PagesLinks>
          <MediaLinks>
            <FooterLink
              to="https://facebook.com"
              target="_blank"
              aria-label="facebook"
            >
              <FacebookSvg />
            </FooterLink>
            <FooterLink
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="facebook"
            >
              <InstagramSvg />
            </FooterLink>
            <FooterLink
              to="https://www.youtube.com/"
              target="_blank"
              aria-label="facebook"
            >
              <YoutubeSvg />
            </FooterLink>
          </MediaLinks>
        </LinksBlock>
      </FooterTop>
      <FooterBottom>
        <Copyright>© E-Pharmacy 2023. All Rights Reserved</Copyright>
        <ClarificationLink target="_blank">Privacy Policy</ClarificationLink>
        <ClarificationLink target="_blank">
          Terms & Conditions
        </ClarificationLink>
      </FooterBottom>
    </>
  );
};

export default FooterContent;
