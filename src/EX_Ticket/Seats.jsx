import React from "react";
import SeatItem from "./SeatItem";


export default function Seats({danhSach}) {
  
  return (
    <div>
      {danhSach.map((hang, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 className="hang">{hang.hang}</h4>
          {hang.danhSachGhe.map((ghe, index) => (
            <SeatItem key={index} seat={ghe} seatIndex={index}/>
          ))}

        </div>
      ))}
    </div>
  );
}
