import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PostBook } from "../../../apis/guestApi";
import { getBookMinimi } from "../../../utils/getItem";
import { bookVaild } from "../../../utils/vaild";

const GuestInput = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { homeId } = useParams();

  const postBook = useMutation(PostBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("getGestBook");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  /** 제출 오류 */
  const errHandler = () => {
    errors?.guestbook?.message === undefined
      ? alert("다시 시도해주세요.")
      : alert(errors?.guestbook?.message);
  };

  const randomNum = `${Math.floor(Math.random() * 6)}`;

  /** 정상 제출*/
  const writeBook = (data: FieldValues) => {
    data["bookImage"] = randomNum;
    if (data.guestbook.trim() === "") {
      alert("공백이 아닌 내용을 입력해주세요.");
    } else {
      postBook.mutate({ data, homeId });
    }
  };

  return (
    <StBookDiv onSubmit={handleSubmit(writeBook, errHandler)}>
      <StFlex>
        <StMinimi src={getBookMinimi()} alt="미니미" />
        <StText maxLength={150} {...register("guestbook", bookVaild())} />
      </StFlex>
      <button>등록</button>
    </StBookDiv>
  );
};

export default GuestInput;

const StBookDiv = styled.form`
  width: 100%;
  font-size: 0.9rem;
  width: 100%;
  padding: 0.5rem;
  background-color: #f1f1f1;
  margin-bottom: 1rem;
  button {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    float: right;
  }
`;

const StMinimi = styled.img`
  width: 22%;
  border: 0.1rem solid gray;
  background-color: white;
`;

const StText = styled.textarea`
  width: 75%;
  margin-left: 1rem;
`;

const StFlex = styled.div`
  display: flex;
`;
