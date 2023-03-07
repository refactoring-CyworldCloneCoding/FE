import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { PostDiary } from "../../../apis/diaryApi";
import { FlexCenter } from "../../../styles/css";

const DiaryModal = ({ setOpen, homeId }: Istate) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, watch } = useForm();

  const postDiary = useMutation(PostDiary, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDiary");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  const onPostDiary = (data: FieldValues) => {
    if (data.content.trim() === "") {
      alert("내용을 작성해주세요.");
    } else {
      const dirImg = data.dirImg[0];
      const formData = new FormData();
      formData.append("dirImg", dirImg);
      formData.append("content", data.content);
      postDiary.mutate({ data: formData, homeId });
      setOpen(false);
    }
  };

  const [imagePreview, setImagePreview] = useState("");

  const image = watch("dirImg");
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <StBg>
      <StModal onSubmit={handleSubmit(onPostDiary)}>
        <StTextBox>
          {imagePreview && <img alt="preview" src={imagePreview} />}
          <StInput
            {...register("content")}
            maxLength={80}
            placeholder="내용을 입력해주세요. (80자이내)"
          />
        </StTextBox>
        <input type="file" accept="image/*" {...register("dirImg")} />
        <StBtnBox>
          <button>작성하기</button>
          <button type="button" onClick={() => setOpen(false)}>
            돌아가기
          </button>
        </StBtnBox>
      </StModal>
    </StBg>
  );
};

export default DiaryModal;

const StModal = styled.form`
  width: 30rem;
  height: 26rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const StBg = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);

  ${FlexCenter}
`;

const StBtnBox = styled.div`
  ${FlexCenter}
  button {
    margin: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #238db4;
    color: white;
    padding: 0.4rem 1rem;
  }
`;

const StTextBox = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;
  height: 18rem;
  border: 0.1rem solid #eee;
  margin-bottom: 1rem;

  img {
    max-width: 14rem;
    max-height: 14rem;
  }
`;

const StInput = styled.textarea`
  border: none;
  height: 6rem;
  width: 100%;
`;
