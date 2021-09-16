import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const HomeTemplate = (props) => {
  const { component: RouteComponent, ...restProps } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return (
          <div style={{ backgroundColor: "#1a191f", color: "#fff" }}>
            <Header />
            <RouteComponent {...routeProps} />
            <Footer />
          </div>
        );
      }}
    />
  );
};
