import React from "react";
import Loader from "react-loader-spinner";

import GetScreen from "../Hook/CatchScreen";

const Loadder = () => {
  const size = GetScreen();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {size.width === 375 ? (
        <Loader
          type="TailSpin"
          color="#fadb14"
          height={30}
          width={30}
          timeout={3000}
        />
      ) : (
        <Loader
          type="TailSpin"
          color="#fadb14"
          height={80}
          width={80}
          timeout={3000}
        />
      )}

    </div>
  );
};

export default Loadder;
