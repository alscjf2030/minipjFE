import React, { useEffect }from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Image from "../elements/Image";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const state = useSelector((state) => {
    console.log(state);
  });
  const token = sessionStorage.getItem("jwt_token") ? true : false;

  const logout = () => {
    dispatch(userActions.LogOutSP(sessionStorage.getItem("jwt_token")));
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      dispatch(userActions.LoginCheckSP(sessionStorage.getItem("jwt_token")));
    }
  }, []);

  if (token && userInfo) {
    return (
        <Grid
            is_flex
            width={"90%"}
            border={"2px solid black"}
            margin={"20px auto"}
            bor_radius
        >
          <Image
              src={require("../static/logo.png")}
              width={"100px"}
              height={"100px"}
              bor_radius
          >
            로고
          </Image>
          <Grid is_flex width={"390px"}>
            <Button
                width={"120px"}
                margin={"0 5px"}
                onClick={() => {
                  navigate("/signup");
                }}
            >
              내 정보
            </Button>
            <Button
                width={"120px"}
                margin={"0 5px"}
                onClick={() => {
                  navigate("/login");
                }}
            >
              알림
            </Button>
            <Button width={"120px"} margin={"0 5px"} onClick={logout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
    );
  }
  return (
      <Grid
          is_flex
          width={"90%"}
          border={"2px solid black"}
          margin={"20px auto"}
          bor_radius
      >
        <Image
            src={require("../static/logo.png")}
            width={"100px"}
            height={"100px"}
            bor_radius
        >
          로고
        </Image>
        <Grid is_flex width={"260px"}>
          <Button
              width={"120px"}
              margin={"0 5px"}
              onClick={() => {
                navigate("/signup");
              }}
          >
            회원 가입
          </Button>
          <Button
              width={"120px"}
              margin={"0 5px"}
              onClick={() => {
                navigate("/login");
              }}
          >
            로그인
          </Button>
        </Grid>
      </Grid>
  );
};

export default Header;
