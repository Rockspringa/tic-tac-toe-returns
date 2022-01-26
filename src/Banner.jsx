import React from "react";

function Banner(props) {
  return (
    <h1 className={`w-full ${props.bg} text-center text-white text-3xl`}>
      {props.title}
    </h1>
  );
}

export default Banner;
