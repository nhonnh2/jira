import React, { Suspense } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import withLayout from "../../hocs/withLayout";

function ClientLayout(props) {
  return (
    <>
      {/* { component: Loader, delay: 500 } */}
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
export default withLayout(ClientLayout);
