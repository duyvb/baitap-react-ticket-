import React from "react";
import { useSelector } from "react-redux";
import Seats from "./Seats";
import data from "./data.json";
import Ticket from "./Ticket";

export default function MovieTicket() {
  // const SelectedSeats = useSelector((state) => state.movieTicket.selectedSeats);
  const totalPrice = useSelector((state) => state.movieTicket.totalPrice);

  const handleBooking = () => {
    alert(`Total price: ${totalPrice}$`);
  };

  return (
    <div className="bookingMovie" style={{ position: "fixed", width: '100%', height: "100%", backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: '100%' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-center">
            <div className="display-4 text-warning"> Đặt Vé Xem Phim </div>
            <div className="SCreen mt-3" style={{ fontSize: "25px" }}>
              Màn Hình
            </div>
            <div className="mt-3">
              <Seats danhSach={data}/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-light mt-2" style={{ fontSize: "35px" }}>
              Danh sách Ghế Bạn Chọn
            </div>
            <div className="legend">
              <div className="legend-item">
                <div className="seat available"></div>
                <h5>Ghế Trống</h5>
              </div>
              <div className="legend-item">
                <div className="seat selected"></div>
                <h5>Ghế Đã Chọn</h5>
              </div>
              <div className="legend-item">
                <div className="seat booked"></div>
                <h5>Ghế Đã Đặt</h5>
              </div>
            </div>

            <div>
              <Ticket/>
            </div>
            <p>Total Price: {totalPrice}$</p>
            <button className="btn btn-primary" onClick={handleBooking}>
              Đặt vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
