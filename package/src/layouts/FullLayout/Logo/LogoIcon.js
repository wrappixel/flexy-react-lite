import React from "react";
import logoicn from "../../../assets/images/logo-dark.svg";
import { Link } from 'react-router';

const LogoIcon = (props) => {
  return <Link to="/" > <img alt="Logo" src={logoicn} {...props} /> </Link>;
};

export default LogoIcon;
