import { useState } from 'react';

const useGuestCounter = () => {
  const maxNumGuests = 15;
  const maxRoom = 10;
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomCount, setRoomCount] = useState(1);

  const calcTotalGuests = () => adultsCount + childrenCount;

  const addValues = (count, setter, type) => {
    if (type === "room") {
      if (roomCount < maxRoom) {
        setter(count + 1);
      }
    } else if (calcTotalGuests() < maxNumGuests) {
      setter(count + 1);
    }
  };

  const subtractValues = (count, min, setter, type) => {
    if (type === "room") {
      if (roomCount > min) {
        setter(count - 1);
      }
    } else if (count > min) {
      setter(count - 1);
    }
  };

  return {
    adultsCount,childrenCount,roomCount,subtractValues,addValues,setAdultsCount,setChildrenCount,setRoomCount
  };
};

export default useGuestCounter;
