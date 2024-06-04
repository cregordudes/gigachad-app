import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const axiosPublic = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL,
   headers: {
      "Content-Type": "application/json",
   },
});

//check request
//{
//   "address": "string",
//   "telegram": {}
// }

//check response
//{
//   "address": "string",
//   "state": "START",
//   "telegram": {},
//   "stats": {
//     "level": 0,
//     "energy": 0,
//     "wealth": 0,
//     "body": 0
//   },
//   "timestamps": {
//     "last_start": "2024-06-04T15:36:47.931Z",
//     "last_gym": "2024-06-04T15:36:47.931Z",
//     "last_work": "2024-06-04T15:36:47.931Z",
//     "last_rest": "2024-06-04T15:36:47.931Z"
//   },
//   "estimations": {
//     "rest_stop_timestamp": "2024-06-04T15:36:47.931Z",
//     "work_stop_timestamp": "2024-06-04T15:36:47.931Z"
//   }

const createUser = async (data) => {
   const response = await axiosPublic.post("/api/users/check", data);
   return response;
};

export const useCreateUser = () => {
   return useMutation({
      mutationFn: createUser,
      queryKey: ["currentUser"],
      options: {
         onSuccess: (data) => {
            console.log(data);
         },
         onError: (error) => {
            console.log(error);
         },
      },
   });
};

//event req
//{
//   "telegram_user_id": 0,
//   "event": "CHECK"
// }

//event res
//{
//   "user": {
//     "address": "string",
//     "state": "START",
//     "telegram": {},
//     "stats": {
//       "level": 0,
//       "energy": 0,
//       "wealth": 0,
//       "body": 0
//     },
//     "timestamps": {
//       "last_start": "2024-06-04T15:36:47.922Z",
//       "last_gym": "2024-06-04T15:36:47.922Z",
//       "last_work": "2024-06-04T15:36:47.922Z",
//       "last_rest": "2024-06-04T15:36:47.922Z"
//     },
//     "estimations": {
//       "rest_stop_timestamp": "2024-06-04T15:36:47.922Z",
//       "work_stop_timestamp": "2024-06-04T15:36:47.922Z"
//     }
//   },
//   "estimation": {
//     "seconds_left": {
//       "work": 0,
//       "rest": 0
//     },
//     "points_difference": {
//       "energy": 0,
//       "body": 0,
//       "wealth": 0
//     }
//   }
// }

const sendEvent = async (data) => {
   const response = await axiosPublic.post("/api/events/new", data);
   return response;
};

export const useSendEvent = () => {
   return useMutation({
      mutationFn: sendEvent,
      queryKey: ["sendEvent"],
      options: {
         onSuccess: (data) => {
            console.log(data);
         },
         onError: (error) => {
            console.log(error);
         },
      },
   });
};
