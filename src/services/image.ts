import { config } from "process";
import apiAuth from "../core/apiAuth";
import apiLhvn from "../core/apiLhvn";
import apiThink from "../core/apiThink";
export const getUserData = (id: string) => apiAuth.get(`/profile/${id}`);
const token = localStorage.getItem("accessToken");

export const uploadImageSwap = (formData: any, id: number, gender: string) =>
  apiAuth.post(`/upload-gensk/${id}?type=src_${gender}`, formData);

export const swapImage = async (link1: string, link2: string) => {
  console.log(link1, link2);
  let config = {
    headers: {
      link2: link2,
      link1: link1,
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("here");
  return await apiThink.get<SuccessResponse, FailResponse>(
    `/getdata/swap/2/image?device_them_su_kien=gdgdg&ip_them_su_kien=dfbdfbd&id_user=241`,
    config
  );
};
export const swapVideo = async (link1: string, formData: any) => {
  let config = {
    headers: {

      Authorization: `Bearer ${token}`,
    },
  };

  return await apiLhvn.post<SuccessResponse, FailResponse>(
    `/getdata/genvideo/swap/imagevid?device_them_su_kien=Simulator%20%28iPhone%2014%20Plus%29&ip_them_su_kien=14.231.223.63&id_user=241&src_img=${link1}`,
    formData,
    config
  );
};
