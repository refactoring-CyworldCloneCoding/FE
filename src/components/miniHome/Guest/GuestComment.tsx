import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DeleteBook, GetBook } from "../../../apis/guestApi";
import { IBook } from "../../../types/guestBook";
import { getBookMinimi } from "../../../utils/getItem";
import { getMinihome } from "../../../utils/getMinihome";
import { IsMyHome } from "../../../utils/isToken";

const GuestComment = () => {
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const { homeId } = useParams();

  const { data } = GetBook(homeId);
  const books = data?.data;

  const deleteBook = useMutation(DeleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("getGestBook");
      alert("방명록이 삭제되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  return (
    <>
      {books?.map((book: IBook) => (
        <>
          <StTitle>
            <p>
              No.{book?.guestBookNum}
              <span onClick={() => getMinihome(book?.userId)}>
                {book?.name} 🏠
              </span>
              ({book?.updatedAt})
            </p>
            {IsMyHome(book.myhomeId) || IsMyHome(book.userId) ? (
              <div>
                <button onClick={() => setIsEdit((x) => !x)}>
                  {isEdit ? "완료" : "수정"}
                </button>
                <button onClick={() => deleteBook.mutate(book.guestbookId)}>
                  삭제
                </button>
              </div>
            ) : null}
          </StTitle>
          <StBookDiv>
            <StMinimi src={getBookMinimi(book?.bookImage)} alt="미니미" />
            {isEdit ? <StEditText /> : <StText>{book?.guestBook}</StText>}
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
