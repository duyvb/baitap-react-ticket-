import { configureStore } from "@reduxjs/toolkit";
import movieTicketReducer from "./redux/slices/movieTicketSlices";

const store = configureStore({
  reducer: {
    movieTicket: movieTicketReducer,
  },
});

export default store;
