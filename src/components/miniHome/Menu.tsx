import { useState } from "react";
import styled from "styled-components";
import Diary from "./Diary/Diary";
import GuestBook from "./Guest/GuestBook";
import Room from "./room/Room";

const menuBtns = ["홈", "다이어리", "방명록"];

const Menu = ({ userData }: IUSerData) => {
  const [menu, setMenu] = useState("홈");

  const components: IComponent = {
    홈: <Room userData={userData} />,
    다이어리: <Diary />,
    방명록: <GuestBook />,
  };

  return (
    <>
      <StFlex>
        <StTitle>{userData?.name}님의 미니홈피 입니다.</StTitle>
        <StMenuBox>{components[menu]}</StMenuBox>
      </StFlex>
      <StBtnBox>
        {menuBtns.map((btn) => (
          <StMenuBtn
            key={btn}
            onClick={() => setMenu(btn)}
            className={btn === menu ? "active" : "passive"}
          >
            {btn}
          </StMenuBtn>
        ))}
      </StBtnBox>
    </>
  );
};

export default Menu;

const StFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const StTitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #2b4484;
`;

const StMenuBox = styled.div`
  width: 38rem;
  height: 32rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid #cdd5d8;
  padding: 0.5rem;
`;

const StBtnBox = styled.div`
  margin-top: 6rem;
`;

const StMenuBtn = styled.button`
  width: 5rem;
  height: 2rem;
  margin-bottom: 0.1rem;
  border: 0.1rem solid #cdd5d8;
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;

  &.active {
    background-color: #ffffff;
    color: #000000;
  }

  &.passive {
    background-color: #238db4;
    color: #ffffff;
  }
`;
