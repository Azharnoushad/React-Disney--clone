import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginDetails } from "../redux/userSlice/userSlice";

const Header = () => {
  const disptach = useDispatch();

  const { name, email, photo } = useSelector((state) => state.authUser);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const setUser = (user) => {
    disptach(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>

      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </a>

        <a href="/home">
          <img src="/images/search-icon.svg" alt="Home" />
          <span>SEARCH</span>
        </a>

        <a href="/home">
          <img src="/images/watchlist-icon.svg" alt="Home" />
          <span>WATCHLIST</span>
        </a>

        <a href="/home">
          <img src="/images/original-icon.svg" alt="Home" />
          <span>ORIGINALS</span>
        </a>

        <a href="/home">
          <img src="/images/movie-icon.svg" alt="Home" />
          <span>MOVIES</span>
        </a>

        <a href="/home">
          <img src="/images/series-icon.svg" alt="Home" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <Login onClick={handleGoogleSignIn}>LOGIN</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  inset: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  gap: 25px;

  a {
    display: flex;
    align-items: center;
    position: relative;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        opacity: 0;
        transition: 0.5s ease-in-out;
      }
    }

    &:hover {
      span:before {
        width: 100%;
        opacity: 1;
      }
    }
  }

  /* @media (max-width : 768px){
        display: none;
    } */
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgb(249, 249, 249);
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
