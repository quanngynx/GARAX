import { useNavigate } from "react-router";

import I1 from "./components/1.svg?react";
import styled from "styled-components";

export default function Page404() {
  const navigate = useNavigate();

  const handleNavToHome = () => {
    navigate("/");
  };
  return (
    <div className="">
      <Styled>
        <I1 />
        <div className="message-box">
          <StyleFont>
            <div className="erica-one-regular">404</div>
          </StyleFont>
          <div className="flex flex-col justify-center items-center mt-5">
          <div className="text-black translate-y-[-4rem] max-w-[600px] text-center mb-4">
            The page you are looking for doesn&apos;t exist or has been moved.
            Please go back to the homepage.
          </div>
          <div className="text-black translate-y-[-4rem] max-w-[600px] text-center">
            <button
              onClick={handleNavToHome}
              className="border-[1px] border-slate-400 px-4 py-2 rounded-3xl"
            >
              Go back home
            </button>
          </div>
        </div>
        </div>
      </Styled>
    </div>
  );
}

const StyleFont = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Erica+One&display=swap");

  .erica-one-regular {
    font-family: "Erica One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 180px;
    color: #000000;
  }
`;

const Styled = styled.div`
  body {
    background-color: #2f3242;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -400px;
  }
  .message-box {
    height: 200px;
    width: 380px;
    position: absolute;
    top: 35%;
    left: 50%;
    margin-top: -100px;
    margin-left: 50px;
    color: #fff;
    font-family: Roboto;
    font-weight: 300;
  }
  .message-box h1 {
    font-size: 60px;
    line-height: 46px;
    margin-bottom: 40px;
  }
  .buttons-con .action-link-wrap {
    margin-top: 40px;
  }
  .buttons-con .action-link-wrap a {
    background: #68c950;
    padding: 8px 25px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s linear;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;
  }
  .buttons-con .action-link-wrap a:hover {
    background: #5a5c6c;
    color: #fff;
  }

  #Polygon-1,
  #Polygon-2,
  #Polygon-3,
  #Polygon-4,
  #Polygon-4,
  #Polygon-5 {
    animation: float 1s infinite ease-in-out alternate;
  }
  #Polygon-2 {
    animation-delay: 0.2s;
  }
  #Polygon-3 {
    animation-delay: 0.4s;
  }
  #Polygon-4 {
    animation-delay: 0.6s;
  }
  #Polygon-5 {
    animation-delay: 0.8s;
  }

  @keyframes float {
    100% {
      transform: translateY(20px);
    }
  }
  @media (max-width: 450px) {
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -250px;
      margin-left: -190px;
    }
    .message-box {
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -190px;
      text-align: center;
    }
  }
`;
