import { ROUTES } from "../config/courses.config";
import axios from "axios";

export const courses = async () => {
  return axios.get(ROUTES.COURSES).then((res) => res.data);
};
