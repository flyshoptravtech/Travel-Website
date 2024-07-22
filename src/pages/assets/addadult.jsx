import { useState } from 'react';

const useGuestCounter = () => {
  const maxNumGuests = 15;
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);

  const calcTotalGuests = () => adultsCount + childrenCount + roomCount;

  const addValues = (count, setter) => {
    if (calcTotalGuests() < maxNumGuests) {
      setter(count + 1);
    }
  };

  const subtractValues = (count, min, setter) => {
    if (count > min) {
      setter(count - 1);
    }
  };

  return { adultsCount, childrenCount, roomCount, subtractValues, addValues, setAdultsCount, setChildrenCount, setRoomCount };
};

export default useGuestCounter;
