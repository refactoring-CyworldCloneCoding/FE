import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DeleteBests, GetBests } from "../../../apis/illChonApi";
import { IBest } from "../../../types/illchon";
import { IsMyHome } from "../../../utils/isToken";

const IllChonComent = () => {
  const queryClient = useQueryClient();
  const { homeId } = useParams();
  const { data } = GetBests(homeId);

  const deleteBest = useMutation(DeleteBests, {
    onSuccess: () => {
      queryClient.invalidateQueries("getBests");
      alert("일촌평이 삭제되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  return (
    <>
      <StIllChonBox>
        {data?.data.map((best: IBest) => (
          <StFlex key={best.ilchonpyungId}>
            <p>
              · {best?.ilchonpyung} ({best?.nick} <span>{best?.name}</span>)
            </p>
            {IsMyHome(best.myhomeId) || IsMyHome(best.userId) ? (
              <StBtn
                onClick={() =>
                  deleteBest.mutate({ id: best.ilchonpyungId, homeId })
                }
              >
                x
              </StBtn>
            ) : null}
          </StFlex>
        ))}
      </StIllChonBox>
    </>
  );
};

export default IllChonComent;

const StIllChonBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #6c6c6c;
  overflow: auto;
  width: 100%;
  height: 6rem;

  span {
    font-weight: 600;
    color: #1ea7cc;
  }
`;

const StBtn = styled.button`
  border: none;
  font-size: 0.8rem;
  background-color: white;
`;

const StFlex = styled.div`
  margin: 0.1rem 0;
  display: flex;
  justify-content: space-between;
  p {
    word-break: break-all;
  }
`;
