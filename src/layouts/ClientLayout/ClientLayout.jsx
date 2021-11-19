import React, { Suspense } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Menu from "../../components/Menu/Menu";
import withLayout from "../../hocs/withLayout";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";

function ClientLayout(props) {
  const { isloading } = useSelector((state) => state.loaderReducer);
  return (
    <>
      {/* { component: Loader, delay: 500 } */}
      {console.log("SideBar", SideBar)}
      <SideBar />
      <Menu />
      {isloading ? (
        <Loader />
      ) : (
        <div
          style={{ paddingLeft: "23%", paddingTop: "2%", paddingRight: "1%" }}
        >
          {props.children}
        </div>
      )}
    </>
  );
}
export default withLayout(ClientLayout);
