import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import "./Layout.css";
// import Footer from "../FooterContent/FooterContent";
import FooterContent from "../FooterContent/FooterContent";
import { Container, Footer, FooterContainer } from "./Layout.styled";

const Layout = () => {
  const user = true;
  return (
    <>
      <Container>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
      {user && (
        <Footer>
          <FooterContainer>
            <FooterContent />
          </FooterContainer>
        </Footer>
      )}
    </>
  );
};

export default Layout;
