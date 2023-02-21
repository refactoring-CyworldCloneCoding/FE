import styled from "styled-components";
import { FlexCenter } from "../../styles/css";
import { getgenderCon } from "../../utils/getItem";

const Profile = () => {
  return (
    <StPageBox>
      <StToday>
        Today<span> 122</span> | Total 11111
      </StToday>
      <StProf>
        <StEmotion>
          TODAY is ... <span>행복🥰</span>
        </StEmotion>
        <StProfileImage src="http://res.heraldm.com/content/image/2021/07/16/20210716000671_0.jpg" />
        <StIntro>난... ㄱ ㅏ끔... 눈물을 흘린 ㄷ ㅏ...</StIntro>
        <StHistory>히스토리</StHistory>
        <StPado>파도타기</StPado>
        <StUserinfo>
          김싸이({getgenderCon("남자")}) <span>1999.09.90</span>
          <p>cyworld@cyworld.com</p>
        </StUserinfo>
      </StProf>
    </StPageBox>
  );
};

export default Profile;

//프로필 전체 박스
const StPageBox = styled.div`
  width: 100%;
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
  margin-top: 2rem;
  margin-bottom: 10rem;
  text-align: center;
  font-size: 0.8rem;
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
