import React from "react";

const TopSection = ({first,second,third}) => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div id="stepper" className="bs-stepper stepper-outline mb-5">
          <div className="bs-stepper-header">
            {/* Step 1 */}
            <div className={`step ${!first ? "active" :"completed"}`} data-target="#step-1">
              <div className="text-center">
                <button
                  type="button"
                  className="step-trigger mb-0"
                  id="steppertrigger1"
                >
                    <span className="bs-stepper-circle">
                    {
                        first ? <i class="fa-solid fa-check"></i> : '1'
                    }
                    </span>
                </button>
                <h6 className="bs-stepper-label d-none d-md-block">
                  Tour Review
                </h6>
              </div>
            </div>
            <div className="line" />
            {/* Step 2 */}
            <div className={`step ${second ? "active" :""} `} data-target="#step-2">
              <div className="text-center">
                <button
                  type="button"
                  className="step-trigger mb-0"
                  id="steppertrigger2"
                >
                  <span className="bs-stepper-circle">2</span>
                </button>
                <h6 className="bs-stepper-label d-none d-md-block">
                  Traveler Info
                </h6>
              </div>
            </div>
            <div className="line" />
            {/* Step 3 */}
            <div className="step" data-target="#step-3">
              <div className="text-center">
                <button
                  type="button"
                  className="step-trigger mb-0"
                  id="steppertrigger3"
                >
                  <span className="bs-stepper-circle">3</span>
                </button>
                <h6 className="bs-stepper-label d-none d-md-block">
                  Make Payment
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
