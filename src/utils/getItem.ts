import minimi_f from "../shared/images/minimi_f.png";
import minimi_m from "../shared/images/minimi_m.png";
import avt_f from "../shared/images/avt_f.png";
import avt_m from "../shared/images/avt_m.png";
import miniroom1 from "../shared/images/miniroom1.gif";
import miniroom2 from "../shared/images/miniroom2.gif";

import one from "../shared/images/bookMinimi/one.gif";
import two from "../shared/images/bookMinimi/two.gif";
import three from "../shared/images/bookMinimi/three.gif";
import four from "../shared/images/bookMinimi/four.gif";
import five from "../shared/images/bookMinimi/five.gif";
import six from "../shared/images/bookMinimi/six.gif";

export type Tgender = "남자" | "여자";

interface IGenderCon {
  [key: string]: string;
}

export const minimi = {
  남자: minimi_m,
  여자: minimi_f,
};

export const avt = {
  남자: avt_m,
  여자: avt_f,
};

export const miniroom = {
  남자: miniroom1,
  여자: miniroom2,
};

export const genderCon: IGenderCon = {
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

export const getgenderCon = (gender: string) => {
  return genderCon[gender];
};

export const booksCon: IRandom = {
  0: one,
  1: two,
  2: three,
  3: four,
  4: five,
  5: six,
};

const randomNum = Math.floor(Math.random() * 6);

export const getBookMinimi = (bookImg?: string) => {
  if (bookImg) {
    return booksCon[bookImg];
  } else {
    return booksCon[randomNum];
  }
};
