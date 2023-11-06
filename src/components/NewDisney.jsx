import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewDisney = () => {
  return (
    <Container>
      <h4>New Disney +</h4>

      <Content>
        <Wrap>
          <Link to="">
            <img
              src="https://i.pinimg.com/originals/da/bf/2f/dabf2f1d139ba458bca944c849a6fe20.jpg"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="">
            <img
              src="https://i.pinimg.com/originals/da/bf/2f/dabf2f1d139ba458bca944c849a6fe20.jpg"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="">
            <img
              src="https://i.pinimg.com/originals/da/bf/2f/dabf2f1d139ba458bca944c849a6fe20.jpg"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="">
            <img
              src="https://i.pinimg.com/originals/da/bf/2f/dabf2f1d139ba458bca944c849a6fe20.jpg"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 0 30px ;

  h4 {
    text-transform: capitalize;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    width: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }

  &:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);

    transform: scale(1.05);
    transition-duration: 200ms;
  }
`;

export default NewDisney;
