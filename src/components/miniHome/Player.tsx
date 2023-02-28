import styled from "styled-components";

const Player = () => {
  return (
    <Stplayer>
      <iframe
        width="160"
        height="65"
        src="https://www.youtube.com/embed/gw3ltsoYBtI?amp;autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </Stplayer>
  );
};

export default Player;

const Stplayer = styled.div`
  width: 12rem;
  height: 6rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  margin-left: 2rem;
`;
