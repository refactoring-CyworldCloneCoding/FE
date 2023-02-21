import styled from "styled-components";
import Layout from "../components/layout/Layout";
import Cover from "../components/miniHome/Cover";
import Menu from "../components/miniHome/Menu";
import Player from "../components/miniHome/Player";
import Profile from "../components/miniHome/Profile";

const MiniHome = () => {
  return (
    <Layout>
      <StFlex>
        <Cover>
          <Profile />
          <Menu />
        </Cover>
        <Player />
      </StFlex>
    </Layout>
  );
};

export default MiniHome;

const StFlex = styled.div`
  display: flex;
  flex-direction: row;
`;
