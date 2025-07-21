import InstagramSvg from "../../images/footerImg/InstagramSvg";
import YoutubeSvg from "../../images/footerImg/YoutubeSvg";
import FacebookSvg from "../../images/footerImg/FacebookSvg";

import FooterLogo from "../../images/footerImg/FooterLogo";

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
            <FooterLink to="/shop" aria-label="Create shop">
              Shop
            </FooterLink>
            <FooterLink to="/medicine" aria-label="Medicine">
              Medicine
            </FooterLink>
            <FooterLink to="/statistics" aria-label="Statistics">
              Statistics
            </FooterLink>
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
