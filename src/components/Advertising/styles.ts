import styled from "styled-components";
import { baseBox } from "theme";

export const Container = styled.div`
${baseBox}
  width: 300px;
  height: 796px;
  margin-right: 16px;
  border: 1px solid ${({theme}) => theme.border};
`
