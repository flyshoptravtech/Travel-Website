import React from "react";

const GuestDetails = ({ totalGuest }) => {
  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-12">
        {Array(totalGuest)
          .fill(null)
          .map((_, index) => (
            <div className="card mb-3">
              <div className="card-header">
                <h4>Guest {index + 1 < 10 ? `0${index + 1}` : index + 1}</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Date of Birth</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Passport Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Passport Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default GuestDetails;
