import { useQuery } from "react-query";
import { instance } from "./axios";

/** 파도타기 api */
const RandomHome = () => {
  return useQuery(
    ["randomHome"],
    async () => {
      const { data } = await instance.get(`/users/surfing`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

const UserApi = {
  RandomHome,
};

export default UserApi;
