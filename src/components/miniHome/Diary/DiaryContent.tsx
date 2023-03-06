import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { DeleteDiary, EditDiary } from "../../../apis/diaryApi";
import { FlexCenter } from "../../../styles/css";
import { IDiaryData } from "../../../types/diary";
import DiaryComment from "./DiaryComment";
import DiaryCommentInput from "./DiaryCommentInput";

const DiaryContent = ({ diaryData }: IDiaryData) => {
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const { register, handleSubmit, watch } = useForm();

  const [imagePreview, setImagePreview] = useState(diaryData.dirImg);

  const image = watch("dirImg");

  /**다이어리 수정 */
  const editDiary = useMutation(EditDiary, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDiary");
      alert("다이어리가 수정되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  const onEditDiary = (data: FieldValues) => {
    if (data.content.trim() === "") {
      alert("내용을 작성해주세요.");
    } else {
      const dirImg = data.dirImg[0];
      const formData = new FormData();
      formData.append("dirImg", dirImg);
      formData.append("content", data.content);
      editDiary.mutate({ data: formData, id: diaryData.diaryId });
      setIsEdit(false);
    }
  };

  /**다이어리 삭제 */
  const deleteDiary = useMutation(DeleteDiary, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDiary");
      alert("다이어리가 삭제되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <>
      <StDiary>
        <StTitle>
          <span>No.{diaryData?.diaryNo}</span>
          <span>{diaryData?.updatedAt}</span>
        </StTitle>
        <form onSubmit={handleSubmit(onEditDiary)}>
          {isEdit ? (
            <StBtnBox>
              <button>완료</button>
              <span onClick={() => setIsEdit(false)}>취소</span>
            </StBtnBox>
          ) : (
            <StBtnBox>
              <span onClick={() => setIsEdit(true)}>수정</span>
              <span
                onClick={() => deleteDiary.mutate({ id: diaryData?.diaryId })}
              >
                삭제
              </span>
            </StBtnBox>
          )}
          <StFlexBox>
            {imagePreview && <Stimg src={imagePreview} alt="다이어리사진" />}
            {isEdit ? (
              <>
                <StLabel htmlFor="picture">사진 변경하기</StLabel>
                <StInput
                  {...register("dirImg")}
                  id="picture"
                  type="file"
                  accept="image/*"
                />
                <StTextarea
                  maxLength={80}
                  placeholder="내용을 입력해주세요. (80자이내)"
                  {...register("content")}
                  defaultValue={diaryData?.content}
                />
              </>
            ) : (
              <p>{diaryData?.content}</p>
            )}
          </StFlexBox>
        </form>
      </StDiary>
      <StCommentFlex>
        <DiaryCommentInput />
        <DiaryComment />
      </StCommentFlex>
    </>
  );
};

export default DiaryContent;

const StDiary = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const StTitle = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: #f1f1f1;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid gray;
`;

const StBtnBox = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  span {
    margin: 0 0.3rem;
    ${FlexCenter}
  }
  button {
    margin: 0 0.3rem;
    border: none;
    background: none;
    font-size: 0.8rem;
    padding: 0;
  }
`;

const StFlexBox = styled.div`
  ${FlexCenter}
  flex-direction: column;
  padding: 1rem;
  p {
    margin-top: 1rem;
    word-break: break-all;
  }
`;

const Stimg = styled.img`
  max-width: 20rem;
`;

const StCommentFlex = styled.div`
  padding: 1rem;
  background-color: #f6f6f6;
  width: 100%;
`;

const StTextarea = styled.textarea`
  font-size: 0.9rem;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const StInput = styled.input`
  display: none;
`;

const StLabel = styled.label`
  margin: 0.5rem 0;
  padding: 0.3rem;
  border: 0.1rem solid black;
  border-radius: 0.3rem;
  background-color: #f6f6f6;
  cursor: pointer;
  font-size: 0.9rem;
`;
