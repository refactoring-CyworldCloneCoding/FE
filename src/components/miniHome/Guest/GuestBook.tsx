import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GetBook } from "../../../apis/guestApi";
import { TBook } from "../../../types/guestBook";
import GuestComment from "./GuestComment";
import GuestInput from "./GuestInput";

const GuestBook = () => {
  const { homeId } = useParams();
  const { data } = GetBook(homeId);
  const books = data?.data;

  return (
    <StGuestBox>
      <GuestInput />
      {books?.map((book: TBook) => (
        <GuestComment key={book.guestbookId} book={book} />
      ))}
    </StGuestBox>
  );
};

export default GuestBook;

const StGuestBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
