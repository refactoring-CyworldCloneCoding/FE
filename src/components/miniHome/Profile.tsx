import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { EditIntro } from "../../apis/userApi";
import { FlexCenter } from "../../styles/css";
import { getgenderCon } from "../../utils/getItem";
import { getRamdomMinihome } from "../../utils/getMinihome";
import { IsMyHome } from "../../utils/isToken";

const Profile = ({ userInfo }: IInfo) => {
  const queryClient = useQueryClient();
  const userData = userInfo?.User;
  const { homeId } = useParams();
  const [editIntro, setEditIntro] = useState(false);
  const { register, handleSubmit } = useForm();

  const onEidtIntro = (data: FieldValues) => {
    putIntro.mutate({ data, homeId });
    setEditIntro(false);
  };

  /**소개글 수정 */
  const putIntro = useMutation(EditIntro, {
    onSuccess: () => {
      queryClient.invalidateQueries("homeInfo");
      alert("소개글이 수정되었습니다.");
    },
    onError: () => {
      alert("다시 시도해주세요.");
    },
  });

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
        <StIntro>
          {editIntro ? (
            <form id="introText" onSubmit={handleSubmit(onEidtIntro)}>
              <textarea
                {...register("intro")}
                maxLength={45}
                placeholder="45자이내로 작성하기."
                defaultValue={userInfo?.intro}
              />
            </form>
          ) : (
            userInfo?.intro
          )}
        </StIntro>
        <StFlex>
          <StHistory>히스토리</StHistory>
          <StBtnBox>
            {IsMyHome({ homeId: userData?.userId }) && (
              <>
                {editIntro ? (
                  <>
                    <button form="introText">수정 완료</button>
                    <span onClick={() => setEditIntro(false)}>취소</span>
                  </>
                ) : (
                  <span onClick={() => setEditIntro(true)}>소개글 수정</span>
                )}
              </>
            )}
          </StBtnBox>
        </StFlex>
        <StPado onClick={getRamdomMinihome}>파도타기</StPado>
        <StUserinfo>
          {userData?.name}({getgenderCon(userData?.gender)})
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
  padding: 0.2rem;
  word-break: break-all;
  font-size: 0.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; // 얘네를 추가히준다
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  textarea {
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
  }
`;

const StHistory = styled.div`
  padding: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #1ea7cc;
`;

const StBtnBox = styled.div`
  font-weight: 500;
  font-size: 0.6rem;
  span {
    cursor: pointer;
    color: #000000;
  }
  button {
    font-weight: 500;
    font-size: 0.6rem;
    background: none;
    border: none;
  }
`;

const StFlex = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid #cdd5d8;
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
