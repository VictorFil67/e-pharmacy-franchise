import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
// import "./Layout.css";
// import Footer from "../FooterContent/FooterContent";
import FooterContent from "../FooterContent/FooterContent";
import { Container, Footer, FooterContainer } from "./Layout.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { useEffect } from "react";

const Layout = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return;
    }
    navigate("/register");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
