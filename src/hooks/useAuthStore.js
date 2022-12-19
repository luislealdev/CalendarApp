import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import {
  onChecking,
  onClearErrorMessage,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post("/auth", { email, password });
      localStorage.setItem("token", data.token);

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Check the email and password"));
      setTimeout(() => {
        dispatch(onClearErrorMessage());
      }, 10);
    }
  };

  return {
    status,
    user,
    errorMessage,

    startLogin,
  };
};
