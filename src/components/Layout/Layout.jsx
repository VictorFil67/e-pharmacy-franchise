import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import FooterContent from "../FooterContent/FooterContent";
import { Container, Footer, FooterContainer } from "./Layout.styled";
import { useSelector } from "react-redux";
import {
  selectAuthPath,
  // selectPath,
  selectToken,
  selectUser,
} from "../../store/auth/selectors";
import { useEffect } from "react";

const Layout = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  // const path = useSelector(selectPath);
  const authPath = useSelector(selectAuthPath);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container $path={authPath}>
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
