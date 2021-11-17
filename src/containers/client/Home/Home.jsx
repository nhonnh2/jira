import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { userLogin } = useSelector((state) => state.authReducer);
  console.log("userlogin");
  return (
    <div>
      <h1>Home</h1>
      <h3>{userLogin?.name}</h3>
    </div>
  );
}
