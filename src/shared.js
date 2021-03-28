import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) =>
    props.theme.Mode === "red" ? "#DC143C" : "#5F9EA0"};
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => (props.theme.Mode === "red" ? "#5F9EA0" : "#DC143C")};
  display: flex;
  align-items: center;
  flex-flow: row;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${(props) =>
    props.theme.Mode == "red" ? "#DC143C" : "#5F9EA0"};
  color: white;
  margin-top: 30px;
  border-radius: 20px;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    background: #d2691e;
  }
`;

export const RegButton = styled(Button)`
  background-color: ${(props) =>
    props.theme.Mode === "red" ? "#DC143C" : "#5F9EA0"};
`;
