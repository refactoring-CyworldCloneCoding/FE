import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GetHomeInfo } from "../apis/userApi";
import Layout from "../components/layout/Layout";
import Cover from "../components/miniHome/Cover";
import Menu from "../components/miniHome/Menu";
import Player from "../components/miniHome/Player";
import Profile from "../components/miniHome/Profile";

const MiniHome = () => {
  const { myHomeId } = useParams();

  const { data } = GetHomeInfo(myHomeId);
  const userInfo = data?.data;
  const userData = userInfo?.User;

  return (
    <Layout>
      <StFlex>
        <Cover>
          <Profile userInfo={userInfo} />
          <Menu userData={userData} />
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
