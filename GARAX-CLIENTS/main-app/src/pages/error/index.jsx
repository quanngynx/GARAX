// import { motion } from "framer-motion";
// import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router";

import styled from "styled-components";
// material

// ----------------------------------------------------------------------

export default function Page404() {
  const navigate = useNavigate();

  const handleNavToHome = () => {
    navigate("/");
  };
  return (
      <div className="flex flex-col justify-center w-1/2">
        {/* <div className="text-black">Error</div> */}
        <StyleFont>
          <div className="erica-one-regular">404</div>
        </StyleFont>
        <div className="flex flex-col justify-center items-center">
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
  );
}

const StyleFont = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Erica+One&display=swap");

  .erica-one-regular {
    font-family: "Erica One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 333px;
    ${"" /* line-height: 0.9em */}
    color: #000000
  }
`;
