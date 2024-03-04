/* eslint-disable no-undef */
import PropTypes from "prop-types";
import { useEffect } from "react";
import { createContext, useCallback, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
  });
  const [justLoggedIn, setJustLoggedIn] = useState(false);
  const [toastSource, setToastSource] = useState(null);

  console.log("User:", user);
  console.log("registerError:", registerError);
  console.log("isRegisterLoading:", isRegisterLoading);
  console.log("loginError:", loginError);
  console.log("isLoginLoading:", isLoginLoading);

  const showToast = useCallback((message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  useEffect(() => {
    if (user && justLoggedIn) {
      console.log("Calling showToast");
      if (toastSource === "login") {
        showToast(`Welcome back, ${user.first_name}!`);
      } else if (toastSource === "register") {
        showToast(`Welcome, ${user.first_name}!`);
      }
    }
  }, [user, showToast, justLoggedIn, toastSource]);

  useEffect(() => {
    const user = localStorage.getItem("User");
    setUser(JSON.parse(user));
    setJustLoggedIn(false);
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(
        `${baseUrl}/users/register`,
        JSON.stringify(registerInfo)
      );

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
      setJustLoggedIn(true);
      setToastSource("register");
    },
    [registerInfo]
  );

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(
        `${baseUrl}/users/login`,
        JSON.stringify(loginInfo)
      );

      setIsLoginLoading(false);

      if (response.error) {
        return setLoginError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
      setJustLoggedIn(true);

      setToastSource("login");
    },
    [loginInfo]
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
    window.alert("You have been logged out!");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        registerInfo,
        updateRegisterInfo,
        loginInfo,
        updateLoginInfo,
        loginError,
        isLoginLoading,
        registerError,
        isRegisterLoading,
        logoutUser,
      }}
    >
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};

// Add prop types validation for children
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
