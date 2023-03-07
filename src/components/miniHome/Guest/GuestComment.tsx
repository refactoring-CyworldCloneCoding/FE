import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { DeleteBook, EditBook } from "../../../apis/guestApi";
import { IBook } from "../../../types/guestBook";
import { getBookMinimi } from "../../../utils/getItem";
import { getMinihome } from "../../../utils/getMinihome";
import { IsMy, IsOur } from "../../../utils/isToken";

const GuestComment = ({ book }: IBook) => {
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(book?.guestBook);
  /**방명록 삭제 */
  const deleteBook = useMutation(DeleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("getGestBook");
      alert("방명록이 삭제되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  /**방명록 수정*/

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const modifyBook = useMutation(EditBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("getGestBook");
      alert("방명록이 수정되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  const onEditBook = (guestbookId: number) => {
    if (text.trim() === "") {
      alert("공백이 아닌 내용을 입력해주세요.");
    } else {
      modifyBook.mutate({ text, guestbookId });
      setIsEdit(false);
    }
  };

  return (
    <>
      <StTitle>
        <p>
          No.{book?.guestBookNum}
          <span onClick={() => getMinihome(book?.userId)}>{book?.name} 🏠</span>
          ({book?.updatedAt})
        </p>
        {IsOur({ homeId: book?.myhomeId, anyId: book?.userId }) && (
          <>
            {isEdit ? (
              <div>
                <button onClick={() => onEditBook(book.guestbookId)}>
                  완료
                </button>
                <button onClick={() => setIsEdit(false)}>취소</button>
              </div>
            ) : (
              <div>
                {IsMy({ homeId: book?.userId }) && (
                  <button onClick={() => setIsEdit(true)}>수정</button>
                )}
                <button onClick={() => deleteBook.mutate(book.guestbookId)}>
                  삭제
                </button>
              </div>
            )}
          </>
        )}
      </StTitle>
      <StBookDiv>
        <StMinimi src={getBookMinimi(book?.bookImage)} alt="미니미" />
        {isEdit ? (
          <StEditText onChange={onChangeText} defaultValue={book?.guestBook} />
        ) : (
          <StText>{book?.guestBook}</StText>
        )}
      </StBookDiv>
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
  border: 0.1rem solid #eee;
  margin: 0.4rem 0;
  font-size: 0.9rem;
`;
