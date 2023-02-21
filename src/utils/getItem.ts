import minimi_f from "../shared/images/minimi_f.png";
import minimi_m from "../shared/images/minimi_m.png";
import avt_f from "../shared/images/avt_f.png";
import avt_m from "../shared/images/avt_m.png";
import miniroom1 from "../shared/images/miniroom1.gif";
import miniroom2 from "../shared/images/miniroom1.gif";

export type Tgender = "남자" | "여자";

export const minimi = {
  남자: minimi_m,
  여자: minimi_f,
};

export const avt = {
  남자: avt_f,
  여자: avt_m,
};

export const miniroom = {
  남자: miniroom1,
  여자: miniroom2,
};

export const genderCon = {
  남자: "♂",
  여자: "♀",
};

export const getMinimi = (gender: Tgender) => {
  return minimi[gender];
};

export const getAvt = (gender: Tgender) => {
  return avt[gender];
};

export const getMiniroom = (gender: Tgender) => {
  return miniroom[gender];
};

export const getgenderCon = (gender: Tgender) => {
  return genderCon[gender];
};
