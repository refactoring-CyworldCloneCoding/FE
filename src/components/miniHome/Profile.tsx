import styled from "styled-components";
import { FlexCenter } from "../../styles/css";
import { getgenderCon } from "../../utils/getItem";
import { getRamdomMinihome } from "../../utils/getMinihome";

const Profile = ({ userInfo }: IInfo) => {
  const userData = userInfo?.User;

  return (
    <StPageBox>
      <StToday>
        Today<span> {userInfo?.today}</span> | Total {userInfo?.total}
      </StToday>
      <StProf>
        <StEmotion>
          TODAY is ... <span>행복🥰</span>
        </StEmotion>
        <StProfileImage src="http://res.heraldm.com/content/image/2021/07/16/20210716000671_0.jpg" />
        <StIntro>{userInfo?.intro}</StIntro>
        <StHistory>히스토리</StHistory>
        <StPado onClick={getRamdomMinihome}>파도타기</StPado>
        <StUserinfo>
          {userData?.name}({getgenderCon(userData?.gender)}){" "}
          <span>{userData?.birth}</span>
          <p>{userData?.email}</p>
        </StUserinfo>
      </StProf>
    </StPageBox>
  );
};

export default Profile;

//프로필 전체 박스
const StPageBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

//프로필 박스
const StProf = styled.div`
  width: 14rem;
  margin: 0.5rem 0;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid #cdd5d8;
  padding: 0.5rem;
  ${FlexCenter}
  flex-direction: column;
`;

const StEmotion = styled.div`
  width: 85%;
  margin: 1rem 0;
  text-align: center;
  padding: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #1ea7cc;
  border: 0.1rem solid #cdd5d8;
  span {
    color: black;
    font-weight: 600;
  }
`;

//투데이표기
const StToday = styled.div`
  width: 14rem;
  font-size: 0.8rem;
  text-align: center;
  span {
    color: red;
  }
`;

const StProfileImage = styled.img`
  width: 80%;
`;

const StIntro = styled.div`
  width: 10rem;
  height: 4.8rem;

  margin-top: 2rem;
  margin-bottom: 5.9rem;
  word-break: break-all;
  font-size: 0.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; // 얘네를 추가히준다
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

const StHistory = styled.div`
  width: 85%;
  padding: 0.4rem;
  border-bottom: 0.1rem solid #cdd5d8;
  font-size: 0.8rem;
  font-weight: 700;
  color: #1ea7cc;
`;

const StPado = styled.div`
  width: 85%;
  margin-top: 0.4rem;
  padding: 0.4rem;
  text-align: center;
  border: 0.1rem solid #cdd5d8;
  font-size: 0.8rem;
  cursor: pointer;
`;

const StUserinfo = styled.div`
  width: 85%;
  margin: 1rem 0;
  font-size: 0.8rem;
  font-weight: 700;
  span {
    color: gray;
    font-weight: 500;
  }
  p {
    margin-top: 0.4rem;
    color: #fe6f03;
    font-weight: 500;
  }
`;
