import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video
          autoPlay
          loop
          playsInline
          src="/videos/1564674844-disney.mp4"
        ></video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="/videos/1564676115-marvel.mp4"
        ></video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="/videos/1564676296-national-geographic.mp4"
        ></video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="/videos/1564676714-pixar.mp4"
        ></video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          src="/videos/1608229455-star-wars.mp4"
        ></video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  overflow: hidden;
  position: relative;
  transition: all 250, s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    width: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    inset: 0;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }

  video {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: 0.5s ease-in-out;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
    transition-duration: 200ms;
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
