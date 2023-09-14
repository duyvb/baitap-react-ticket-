import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSeat } from "../redux/slices/movieTicketSlices";

export default function Ticket() {
  const { selectedSeats } = useSelector((state) => {
    return state.movieTicket;
  });

  const dispatch = useDispatch();

  const handleRemove = (seatIndex) => {
    dispatch(removeSeat(seatIndex));
  };

  return (
    <div>
      <h2>Thông tin các ghế đã chọn:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Tên ghế</th>
            <th>Giá vé</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {selectedSeats.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price}$</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(item.name)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
