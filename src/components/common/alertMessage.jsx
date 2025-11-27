import { toast } from "react-toastify";

export const alertMessage = (type, message) => {

  return toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
    style: {
      position: "fixed",
      top: "80px",
      right: "20px",
      zIndex: 99999999999999,
    },
  });
};
