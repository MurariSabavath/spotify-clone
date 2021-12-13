import AxiosInstance from './axiosInstance';

const getRequest = async (url: string) => {
  const resp = await AxiosInstance.get(url);
  return resp.data;
};

const putRequest = async (url: string, data: any) => {
  const resp = await AxiosInstance.put(url, data);
  return resp.data;
};

export { getRequest, putRequest };
