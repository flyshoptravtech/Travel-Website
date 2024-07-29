import React, { useEffect, useState } from "react";
import useGuestCounter from "../helpers/addadult";
import { useParams } from "react-router-dom";

const GuestSelectBox = ({closeBtnRef}) => {
  const { adultsCount, childrenCount, roomCount, subtractValues, addValues, setAdultsCount, setChildrenCount, setRoomCount } = useGuestCounter();
  const { guests } = useParams();
  const [openGuestBox, setOpenGuestBox] = useState(false);

  useEffect(() => {
    if (guests) {
      let total = guests.split(" ");
      setAdultsCount(Number(total[0]));
      if (total[3] === "Rooms" || total[3] === "Room") {
        setRoomCount(Number(total[2]) || 0);
        setChildrenCount(0);
      } else {
        setChildrenCount(Number(total[2]) || 0);
        setRoomCount(Number(total[4]) || 0);
      }
    }
  }, [guests, setAdultsCount, setChildrenCount, setRoomCount]);

  const toggleGuestBox = () => setOpenGuestBox(!openGuestBox);

  return (
    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
      <div className="form-group mb-0">
        <div className="booking-form__input guests-input mixer-auto">
          <input
            name="guests"
            className={`form-control ${openGuestBox ? "open" : ""}`}
            id="guests-input-btn"
            readOnly
            value={`${adultsCount} Adult${adultsCount > 1 ? "s" : ""}${
                childrenCount > 0 ? `, ${childrenCount} Child${childrenCount > 1 ? "ren" : ""}` : ""
            }${roomCount > 0 ? `, ${roomCount} Room${roomCount > 1 ? "s" : ""}` : ""}`}
            onClick={toggleGuestBox}
            ref={closeBtnRef}
          />
          <div className={`guests-input__options ${openGuestBox ? "open" : ""}`} id="guests-input-options">
            <div>
              <span
                className="guests-input__ctrl minus"
                id="adults-subs-btn"
                onClick={() => subtractValues(adultsCount, 1, setAdultsCount)}
              >
                <i className="fa-solid fa-minus" />
              </span>
              <span className="guests-input__value">
                <span id="guests-count-adults">{adultsCount}</span> Adults
              </span>
              <span
                className="guests-input__ctrl plus"
                id="adults-add-btn"
                onClick={() => addValues(adultsCount, setAdultsCount)}
              >
                <i className="fa-solid fa-plus" />
              </span>
            </div>
            <div>
              <span
                className="guests-input__ctrl minus"
                id="children-subs-btn"
                onClick={() => subtractValues(childrenCount, 0, setChildrenCount)}
              >
                <i className="fa-solid fa-minus" />
              </span>
              <span className="guests-input__value">
                <span id="guests-count-children">{childrenCount}</span> Children
              </span>
              <span
                className="guests-input__ctrl plus"
                id="children-add-btn"
                onClick={() => addValues(childrenCount, setChildrenCount)}
              >
                <i className="fa-solid fa-plus" />
              </span>
            </div>
            <div>
              <span
                className="guests-input__ctrl minus"
                id="room-subs-btn"
                onClick={() => subtractValues(roomCount, 0, setRoomCount, "room")}
              >
                <i className="fa-solid fa-minus" />
              </span>
              <span className="guests-input__value">
                <span id="guests-count-room">{roomCount}</span> Rooms
              </span>
              <span
                className="guests-input__ctrl plus"
                id="room-add-btn"
                onClick={() => addValues(roomCount, setRoomCount, "room")}
              >
                <i className="fa-solid fa-plus" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestSelectBox;
