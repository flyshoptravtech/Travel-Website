import React from "react";

const Features = () => {
  return (
    <section className="border-bottom">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
            <div className="featuresBox-wrap">
              <div className="featuresBox-icons mb-3">
                <i className="fa-solid fa-sack-dollar fs-1 text-primary" />
              </div>
              <div className="featuresBox-captions">
                <h4 className="fw-bold fs-5 lh-base mb-0">Easy Booking</h4>
                <p className="m-0">
                  Cicero famously orated against his political opponent Lucius
                  Sergius Catilina. Occasionally the first Oration against
                  Catiline.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
            <div className="featuresBox-wrap">
              <div className="featuresBox-icons mb-3">
                <i className="fa-solid fa-umbrella-beach fs-1 text-primary" />
              </div>
              <div className="featuresBox-captions">
                <h4 className="fw-bold fs-5 lh-base mb-0">Best Destinations</h4>
                <p className="m-0">
                  Cicero famously orated against his political opponent Lucius
                  Sergius Catilina. Occasionally the first Oration against
                  Catiline.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
            <div className="featuresBox-wrap">
              <div className="featuresBox-icons mb-3">
                <i className="fa-solid fa-person-walking-luggage fs-1 text-primary" />
              </div>
              <div className="featuresBox-captions">
                <h4 className="fw-bold fs-5 lh-base mb-0">Travel Guides</h4>
                <p className="m-0">
                  Cicero famously orated against his political opponent Lucius
                  Sergius Catilina. Occasionally the first Oration against
                  Catiline.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
            <div className="featuresBox-wrap">
              <div className="featuresBox-icons mb-3">
                <i className="fa-solid fa-headset fs-1 text-primary" />
              </div>
              <div className="featuresBox-captions">
                <h4 className="fw-bold fs-5 lh-base mb-0">Friendly Support</h4>
                <p className="m-0">
                  Cicero famously orated against his political opponent Lucius
                  Sergius Catilina. Occasionally the first Oration against
                  Catiline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
