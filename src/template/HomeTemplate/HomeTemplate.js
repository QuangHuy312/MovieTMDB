import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const HomeTemplate = (props) => {
  const { component: RouteComponent, ...restProps } = props;
  const sessionId = localStorage.getItem("sessionId");
  const { infoUser } = useSelector((state) => state.UserManagerReducer);

  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        return (
          <div style={{ backgroundColor: "#1a191f", color: "#fff" }}>
            <Header />
            <RouteComponent
              {...routeProps}
              infoUser={infoUser}
              sessionId={sessionId}
            />
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default HomeTemplate;
