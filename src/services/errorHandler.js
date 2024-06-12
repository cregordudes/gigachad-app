import WebApp from "@twa-dev/sdk";

const errorHandler = (error) => {
   if (error?.response?.data?.message) {
      WebApp?.showAlert(error.response.data.message);
   } else {
      WebApp?.showAlert(error.message);
   }
};

export default errorHandler;
