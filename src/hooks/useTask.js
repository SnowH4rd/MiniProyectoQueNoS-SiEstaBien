import { useDispatch } from "react-redux";
import { toggleTask } from "../store";

export const useTask = () => {
  const dispatch = useDispatch();
  const toggle = (id: string) => dispatch(toggleTask(id));
  return { toggle };
};
