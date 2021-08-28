import React from "react";
import { useMediaQuery } from "hooks/useMediaQuery";
import DrawerMenu from "components/DrawerMenu";
import NavList from "components/NavList";

const GlobalNav = () => {
  const mq = useMediaQuery();
  return <nav>{mq.isSp ? <DrawerMenu /> : <NavList isMobile={false} />}</nav>;
};

export default GlobalNav;
