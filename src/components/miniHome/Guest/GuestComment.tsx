import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GetBook } from "../../../apis/guestApi";
import { IBook } from "../../../types/guestBook";
import { getBookMinimi } from "../../../utils/getItem";

const GuestComment = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { homeId } = useParams();

  const { data } = GetBook(homeId);
  const books = data?.data;

  return (
    <>
      {books?.map((book: IBook) => (
        <>
          <StTitle>
            <p>
              No.11
              <span>김싸이 🏠</span>
              (2020.20.20 19:20)
            </p>
            <div>
              <button onClick={() => setIsEdit((x) => !x)}>
                {isEdit ? "완료" : "수정"}
              </button>
              <button>삭제</button>
            </div>
          </StTitle>
          <StBookDiv>
            <StMinimi src={getBookMinimi()} alt="미니미" />
            {isEdit ? (
              <StEditText />
            ) : (
              <StText>안녕하세요. 150자 제한, src 넘버도 넘기기</StText>
            )}
          </StBookDiv>
        </>
      ))}
    </>
  );
};

export default GuestComment;

const StBookDiv = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  padding: 0.4rem;
  font-size: 0.9rem;
`;

const StMinimi = styled.img`
  width: 22%;
`;

const StTitle = styled.div`
  width: 100%;
  padding: 0.4rem 0;
  background-color: #f1f1f1;
  border-top: 0.1rem solid #838383;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 0.7rem;
    color: #3e3e3e;
    margin-left: 1rem;
  }
  span {
    font-size: 1rem;
    margin: 0 0.5rem;
    color: #2222b5;
    cursor: pointer;
  }
  button {
    border: none;
    font-size: 0.8rem;
  }
`;

const StText = styled.div`
  width: 75%;
  padding: 1rem;
`;

const StEditText = styled.textarea`
  width: 75%;
  padding: 1rem;
  border: 0.1rem solid #eee;
  margin: 0.4rem 0;
`;
