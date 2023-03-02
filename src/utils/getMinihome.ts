import axios from "axios";

/** 본인 미니홈피로 이동하기 */
export const getMinihome = (myHomeId: string | null) => {
  return window.open(
    `/minihome/${myHomeId}`,
    "미니홈피",
    "width=1300, height=700, resizable=no"
  );
};

/** 파도타기 */
export const getRamdomMinihome = () => {
  axios
    .get(`/users/surfing`)
    .then((res) => {
      getMinihome(res.data.data);
    })
    .catch(() => alert("다시 시도해주세요."));
};
