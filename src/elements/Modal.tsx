import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FlexCenter } from "../styles/css";

const Modal = ({ setOpen }: Istate) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = () => {};

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
      <StModal>
        <StTextBox onSubmit={handleSubmit(onSubmit)}>
          {imagePreview && <img alt="preview" src={imagePreview} />}
          <StInput placeholder="내용을 입력해주세요. (80자이내)" />
        </StTextBox>
        <input type="file" accept="image/*" {...register("dirImg")} />
        <StBtnBox>
          <button>작성하기</button>
          <button onClick={() => setOpen((x: boolean) => !x)}>돌아가기</button>
        </StBtnBox>
      </StModal>
    </StBg>
  );
};

export default Modal;

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
