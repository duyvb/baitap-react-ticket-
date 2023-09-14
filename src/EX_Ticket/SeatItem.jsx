import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from '../redux/slices/movieTicketSlices';

export default function SeatItem({ seat}) {
  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState(false);




  let seatClass = "btn m-2";
  if (seat.isBooked) {
    seatClass += " btn-danger";
  } else if (isSelected) {
    seatClass += " btn-warning";
  } else {
    seatClass += " btn-secondary";
  }

  const handleClick = () => {
    if (!seat.isBooked) {
      if (isSelected) {
        
        dispatch(selectSeat({ ...seat, isSelected: false }));
        setIsSelected(false);
      } else {
        
        dispatch(selectSeat({ ...seat, isSelected: true }));
        setIsSelected(true); 
      }
    }
  };

  return (
    <button className={seatClass} disabled={seat.isBooked} onClick={handleClick}>
      {seat.name}
    </button>
  );
}
