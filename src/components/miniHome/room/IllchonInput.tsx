import { FieldValues, useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PostBests } from "../../../apis/illChonApi";
import { FlexCenter } from "../../../styles/css";

const IllchonInput = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { homeId } = useParams();

  const postBests = useMutation(PostBests, {
    onSuccess: () => {
      queryClient.invalidateQueries("getBests");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  const wirteBests = (data: FieldValues) => {
    if (data?.nick.trim() === "" || data?.ilchonpyung.trim() === "") {
      alert("공백 없이 작성해주세요");
    } else {
      postBests.mutate({ data, homeId });
      reset();
    }
  };

  return (
    <StIllchon as="form" onSubmit={handleSubmit(wirteBests)}>
      <p>일촌평</p>
      <input
        className="nick"
        type="text"
        placeholder="일촌명"
        maxLength={10}
        {...register("nick")}
      />
      <input
        type="text"
        placeholder="일촌과 나누고 싶은 이야기를 나눠보세요~!"
        className="comment"
        maxLength={30}
        {...register("ilchonpyung")}
      />
      <button type="submit">등록</button>
    </StIllchon>
  );
};

export default IllchonInput;

const StIllchon = styled.form`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  ${FlexCenter}
  background-color: #f4f4f4;

  input {
    margin-left: 0.5rem;
    border: 1px solid #dedddd;
    &:focus {
      outline: none;
    }
  }
  p {
    font-weight: 700;
    color: #1ea7cc;
  }
  button {
    margin-left: 0.5rem;
    background-color: #ffffff;
    border: 1px solid #dedddd;
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
  & .nick {
    width: 4rem;
  }
  & .comment {
    width: 22rem;
  }
`;
