import { REMOVE_SEAT, SELECT_SEAT } from "../constants/movieTicketConstants";


export const selectSeat = (seatIndex) => {
  return {
    type: SELECT_SEAT,
    payload: {
      isSelected: true,
      seatIndex,
    },
  };
};

export const removeSeat = (seatIndex) => {
  return {
    type: REMOVE_SEAT,
    payload: {
      isSelected: false,
      seatIndex,
    },
  };
};



