import React from "react";

const Summary = ({price,tax,checkin,checkout,details}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    checkin = formatDate(checkin)
    checkout = formatDate(checkout)

  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-12">
        <div className="side-block card rounded-2 p-3">
          <h5 className="fw-semibold fs-6">Reservation Summary</h5>
          <div className="mid-block rounded-2 border br-dashed p-2 mb-3">
            <div className="row align-items-center justify-content-between g-2 mb-3">
              <div className="col-6">
                <div className="gray rounded-2 p-2">
                  <span className="d-block text-muted-3 text-sm fw-medium text-uppercase mb-2">
                    Check-In
                  </span>
                  <p className="text-dark fw-semibold lh-base text-md mb-0">
                    {checkin}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="gray rounded-2 p-2">
                  <span className="d-block text-muted-3 text-sm fw-medium text-uppercase mb-2">
                    Check-Out
                  </span>
                  <p className="text-dark fw-semibold lh-base text-md mb-0">
                    {checkout}
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-12">
                <p className="fw-semibold mb-0">You Selected</p>
                <p className="mb-0">{details.property.room_type} with total guest {details.no_of_person_allowed}. <span className="pointer text-danger" onClick={()=>{window.history.back()}}>Change Your Selection</span></p>
              </div>
            </div>
          </div>
          <div className="bott-block d-block mb-3">
            <h5 className="fw-semibold fs-6">Your Price Summary</h5>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-medium mb-0">Rooms &amp; Offers</span>
                <span className="fw-semibold">₹{price + 199 - tax}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-medium mb-0">Total Discount</span>
                <span className="fw-semibold">- ₹199.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-medium mb-0">18% Taxes</span>
                <span className="fw-semibold">₹{tax}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-medium text-success mb-0">Total Price</span>
                <span className="fw-semibold text-success">₹{price}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
