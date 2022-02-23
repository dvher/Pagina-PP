import { configureStore } from "@reduxjs/toolkit";
import isAdmin from "../reducers/IsAdmin";

const store = configureStore({
    reducer: {
        isAdmin: isAdmin,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;