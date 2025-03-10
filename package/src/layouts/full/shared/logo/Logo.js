import { Link } from "react-router";
import { ReactComponent as LogoDark1 } from "src/assets/images/logos/logo-dark.svg";
import { styled } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled
      to="/"
      height={70}
      style={{
        display: "flex",
        alignItems: "center", justifyContent: 'center'
      }}
    >
      <LogoDark1 />
    </LinkStyled>
  );
};

export default Logo;
