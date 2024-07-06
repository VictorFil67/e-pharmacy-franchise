import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
// import "./Layout.css";
// import Footer from "../FooterContent/FooterContent";
import FooterContent from "../FooterContent/FooterContent";
import { Container, Footer, FooterContainer } from "./Layout.styled";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/auth/selectors";
import { useEffect } from "react";

const Layout = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return;
    } else if (user) {
      navigate("/login");
    } else {
      navigate("/register");
    }
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
      {user && token && (
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
