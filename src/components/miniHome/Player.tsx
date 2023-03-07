import styled from "styled-components";

const Player = () => {
  const bgms = [
    "https://www.youtube.com/embed/MKYv5w0QqFM",
    "https://www.youtube.com/embed/sHqLlyBlmQI",
    "https://www.youtube.com/embed/zLsdMMry5HA",
    "https://www.youtube.com/embed/hBTAWonvsOs",
    "https://www.youtube.com/embed/UvBbU_CTwFg",
    "https://www.youtube.com/embed/2uyHtg56yTY",
    "https://www.youtube.com/embed/nhuFm3BGIBY",
  ];

  const randomNum = Math.floor(Math.random() * 7);

  return (
    <Stplayer>
      <iframe
        width="160"
        height="65"
        src={`${bgms[randomNum]}?autoplay=1`}
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
