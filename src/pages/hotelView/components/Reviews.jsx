import React from "react";
import userImg from "../../../assets/img/team-1.jpg"

const Reviews = () => {
  return (
    <div className="row align-items-center">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="gstRevws-groups">
          <div className="single-gstRevws rounded-2 border p-2 d-flex align-items-start mb-3">
            <div className="single-gstRevws-thumb">
              <div className="rounded-2 overflow-hidden w-25 h-25">
                <img src={userImg} className="img-fluid" alt="userImage" />
              </div>
            </div>
            <div className="single-gstRevws-caps ps-3">
              <div className="gstRevws-head d-flex align-items-start justify-content-between">
                <div className="dfls-headers">
                  <h5 className="h6 text-dark fw-semibold mb-0">
                    Adam Bluecart
                  </h5>
                  <p className="text-md mb-0">Canada</p>
                </div>
                <div className="dfls-arrios">
                  <span className="text-muted text-md">10 July 2023</span>
                </div>
              </div>
              <div className="dfls-secription">
                <p className="mb-0">
                  In a free hour, But in certain circumstances and owing to the
                  claims of duty or the obligations of business when our power
                  of choice is untrammelled and when nothing prevents our being
                  able to do what we like best, every pleasure is to be welcomed
                  and every pain avoided.
                </p>
              </div>
            </div>
          </div>
          <div className="sbms-rewsbox">
            <div className="alert alert-success text-center" role="alert">
              Login your account to submit reviews{" "}
              <a href="#" className="text-dark">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
