import { REMOVE_SEAT, SELECT_SEAT } from "../constants/movieTicketConstants";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};
const movieTicketReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECT_SEAT: {
      const { isSelected, seatIndex } = action.payload;
    
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seatIndex];
        const totalPrice = state.totalPrice + state.seats[seatIndex].price;
        return { ...state, selectedSeats, totalPrice };
      }
    
      const selectedSeats = state.selectedSeats.filter((index) => index !== seatIndex);
      const totalPrice = state.totalPrice - state.seats[seatIndex].price;
      return { ...state, selectedSeats, totalPrice };
    }
    case REMOVE_SEAT: {
      const seatIndex = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.name !== seatIndex
      );
    
      // Tính tổng giá vé lại sau khi loại bỏ ghế
      const totalPrice = selectedSeats.reduce(
        (result, item) => result + item.price,
        0
      );
      return { ...state, selectedSeats, totalPrice };
    }
    default:
      return state;
  }
};

export default movieTicketReducer;

