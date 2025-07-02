import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: ${(props) => props.width || "6rem"};
  height: ${(props) => props.height || "6rem"};
  border-radius: ${(props) => props.$borderRadius || "9999px"};
  margin: ${(props) => props.$margin || "0 auto 1rem"};
  border: ${(props) => props.$border || ""};
`;

export default StyledImage;
