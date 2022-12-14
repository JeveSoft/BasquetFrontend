import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
  opacity: 0;
  &.loaded {
    opacity: 1;
  }
`;

export const NavBoton = styled.button`
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  color: white;
  box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0, 9),
    inset 0 --3em 3em rgba(3, 3, 3, 0, 5);
  transform: translate(0, -50%);
  ${(props) =>
    props.right === true
      ? css`
          right: 2%;
        `
      : css`
          left: 2%;
        `}
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0);
`;
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.active === true
      ? css`
          background-color: white;
        `
      : css`
          background-color: grey;
        `}
`;
