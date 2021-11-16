import React, { Suspense } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import withLayout from "../../hocs/withLayout";

function ClientLayout(props) {
  return (
    <>
      {/* { component: Loader, delay: 500 } */}
      <Header />
      <Suspense fallback={<Loader />}>{props.children}</Suspense>
      <Footer />
    </>
  );
}
export default withLayout(ClientLayout);
