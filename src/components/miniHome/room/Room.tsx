import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GetBests } from "../../../apis/illChonApi";
import { FlexCenter, primaryColor } from "../../../styles/css";
import { TBest } from "../../../types/illchon";
import { getAvt, getMiniroom, Tgender } from "../../../utils/getItem";
import IllChonComent from "./IllChonComent";
import IllchonInput from "./IllchonInput";

const Room = ({ userData }: IUSerData) => {
  const { homeId } = useParams();
  const { data } = GetBests(homeId);

  const bests = data?.data;

  return (
    <StRoomBox>
      <StTitle>
        <p>미니룸</p>
      </StTitle>
      <StRoom src={getMiniroom(userData?.gender as Tgender)} alt="미니룸" />
      <StAvt src={getAvt(userData?.gender as Tgender)} alt="미니미" />
      <IllchonInput />
      <StIllChonBox>
        {bests?.map((best: TBest) => (
          <IllChonComent key={best.ilchonpyungId} best={best} />
        ))}
      </StIllChonBox>
    </StRoomBox>
  );
};

export default Room;

const StRoomBox = styled.div`
  padding: 1rem;
  ${FlexCenter}
  flex-direction: column;
`;

const StTitle = styled.div`
  width: 100%;
  font-weight: 700;
  ${primaryColor}
  margin: 0.5rem 0;
`;

const StRoom = styled.img`
  width: 100%;
  height: 100%;
`;

const StAvt = styled.img`
  width: 2.5rem;
  position: absolute;
  top: 22rem;
`;

const StIllChonBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #6c6c6c;
  overflow: auto;
  width: 100%;
  height: 6rem;
`;
