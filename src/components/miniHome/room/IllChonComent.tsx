import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { DeleteBests, EditBests } from "../../../apis/illChonApi";
import { IBest } from "../../../types/illchon";
import { IsMy, IsOur } from "../../../utils/isToken";

const IllChonComent = ({ best }: IBest) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const [isEdit, setIsEdit] = useState(false);

  const deleteBest = useMutation(DeleteBests, {
    onSuccess: () => {
      queryClient.invalidateQueries("getBests");
      alert("일촌평이 삭제되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  const editBest = useMutation(EditBests, {
    onSuccess: () => {
      queryClient.invalidateQueries("getBests");
      alert("일촌평이 수정되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  const onEditBest = (data: FieldValues) => {
    if (data?.nick.trim() === "" || data?.ilchonpyung.trim() === "") {
      alert("공백 없이 작성해주세요");
    } else {
      editBest.mutate({ id: best.ilchonpyungId, homeId: best?.myhomeId, data });
      setIsEdit(false);
    }
  };

  return (
    <StFlex>
      {isEdit ? (
        <form id="illchon" onSubmit={handleSubmit(onEditBest)}>
          <input
            className="nick"
            type="text"
            placeholder="일촌명"
            maxLength={10}
            defaultValue={best?.nick}
            {...register("nick")}
          />
          <input
            type="text"
            placeholder="일촌과 나누고 싶은 이야기를 나눠보세요~!"
            className="comment"
            maxLength={30}
            defaultValue={best?.ilchonpyung}
            {...register("ilchonpyung")}
          />
        </form>
      ) : (
        <p>
          · {best?.ilchonpyung} (<StNick>{best?.nick}</StNick>
          <StName>{best?.name}</StName>)
        </p>
      )}
      {IsOur({ homeId: best?.myhomeId, anyId: best?.userId }) && (
        <>
          {isEdit ? (
            <div>
              <button form="illchon">완료</button>
              <StBtn onClick={() => setIsEdit(false)}>취소</StBtn>
            </div>
          ) : (
            <div>
              {IsMy({ homeId: best?.userId }) && (
                <StBtn onClick={() => setIsEdit(true)}>수정</StBtn>
              )}
              <StBtn
                onClick={() =>
                  deleteBest.mutate({
                    id: best.ilchonpyungId,
                    homeId: best?.myhomeId,
                  })
                }
              >
                삭제
              </StBtn>
            </div>
          )}
        </>
      )}
    </StFlex>
  );
};

export default IllChonComent;

const StBtn = styled.span`
  font-size: 0.8rem;
  color: #6c6c6c;
  margin: 0 0.2rem;
`;

const StName = styled.span`
  font-weight: 600;
  color: #1ea7cc;
`;

const StNick = styled.span`
  margin-right: 0.3rem;
  color: #949494;
`;

const StFlex = styled.div`
  margin: 0.1rem 0;
  display: flex;
  justify-content: space-between;
  p {
    word-break: break-all;
  }

  input {
    margin-left: 0.5rem;
    border: 1px solid #dedddd;
  }

  button {
    border: none;
    font-size: 0.8rem;
    color: #6c6c6c;
    background: none;
  }

  & .nick {
    width: 4rem;
  }
  & .comment {
    width: 24rem;
  }
`;
