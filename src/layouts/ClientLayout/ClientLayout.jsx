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
      <SideBar />
      <Menu />
      <Loader />
      <div style={{ paddingLeft: "23%", paddingTop: "2%", paddingRight: "1%" }}>
        {props.children}
      </div>
    </>
  );
}
export default withLayout(ClientLayout);
