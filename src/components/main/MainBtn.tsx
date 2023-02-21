import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainBtn = () => {
  const nav = useNavigate();
  const btns = [
    { name: "회원가입", path: "/join" },
    { name: "랜덤 미니홈피 구경하기", path: "/" },
  ];

  return (
    <>
      {btns.map((btn) => (
        <StBtn key={btn.name} onClick={() => nav(btn.path)}>
          {btn.name}
        </StBtn>
      ))}
    </>
  );
};

export default MainBtn;

const StBtn = styled.button`
  font-size: 1rem;
  margin-right: 0.5rem;
`;
