import React, { Suspense } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Menu from "../../components/Menu/Menu";
import withLayout from "../../hocs/withLayout";

function ClientLayout(props) {
  return (
    <>
      {/* { component: Loader, delay: 500 } */}
      {console.log("SideBar", SideBar)}
      <SideBar />
      <Menu />
      {props.children}
    </>
  );
}
export default withLayout(ClientLayout);
