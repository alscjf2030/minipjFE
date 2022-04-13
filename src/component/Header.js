import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../elements/Grid";
import { actionCreators as userActions } from "../redux/modules/user";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const token = sessionStorage.getItem("jwt_token") ? true : false;

  const logout = () => {
    dispatch(userActions.LogOutSP(sessionStorage.getItem("jwt_token")));
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      dispatch(userActions.LoginCheckSP(sessionStorage.getItem("jwt_token")));
    }
  }, [token]);

  if (token && userInfo) {
    return (
      <Navbar
        bg="primary"
        variant="dark"
        style={{ width: "100%", height: "120px", fontSize: "1.4em" }}
      >
        <Container>
          <Grid width={"100%"} is_flex>
            <img src={"img/logo.png"} style={{ height: "120px" }} />
            <Grid is_flex>
              {/* <Navbar.Brand href="/">Hang 9</Navbar.Brand> */}
              <Nav className="me-auto">
                <Grid is_flex>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/mypage">내 정보</Nav.Link>
                  <Nav.Link onClick={logout}>로그아웃</Nav.Link>
                </Grid>
              </Nav>
            </Grid>
          </Grid>
        </Container>
      </Navbar>
    );
  }
  return (
    <Navbar
      bg="primary"
      variant="dark"
      style={{ width: "100%", height: "120px", fontSize: "1.4em" }}
    >
      <Container>
        <Grid width={"100%"} is_flex>
          <img src={"img/logo.png"} style={{ height: "120px" }} />
          <Grid is_flex>
            {/* <Navbar.Brand href="/">Hang 9</Navbar.Brand> */}
            <Nav className="me-auto">
              <Grid is_flex>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">회원가입</Nav.Link>
                <Nav.Link href="/login">로그인</Nav.Link>
              </Grid>
            </Nav>
          </Grid>
        </Grid>
      </Container>
    </Navbar>
  );
};

export default Header;
