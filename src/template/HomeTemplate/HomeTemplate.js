import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const HomeTemplate = (props) => {
  const { component: RouteComponent, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return (
          <Fragment>
            <Header />
            <RouteComponent {...routeProps} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
