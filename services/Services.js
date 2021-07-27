import axios from "axios";

const url = "/api/data";

export const getProjects = async () => {
  const res = await axios.get(url);
  return res.data;
};
