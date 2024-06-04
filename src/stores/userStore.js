import { create } from "zustand";
import { persist } from "zustand/middleware";

//STATS
//level: number
//energy: number
//wealth:number
//body: number

//@IUSER Interface
//adress: string
//state: State
//telegram: array[any]

export const useUserStore = create(
   persist(
      (set) => ({
         currentUser: null,
         userStatistic: null,
         setCurrentUser: (user) => set({ currentUser: user }),
         setUserStatistic: (user) => set({ userStatistic: user }),
      }),
      {
         name: "user-storage",
      }
   )
);
