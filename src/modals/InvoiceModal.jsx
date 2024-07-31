import React from "react";
import { Link } from "react-router-dom";

const InvoiceModal = () => {
  return (
    <>
      <div className="modal modal-lg fade" id="invoice" tabIndex={-1} role="dialog" aria-labelledby="invoicemodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered invoice-pop-form"role="document"
        >
          <div className="modal-content" id="invoicemodal">
            <div className="modal-header">
              <h4 className="modal-title fs-6">Download your invoice</h4>
              <div className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close" >
                <i className="fa-solid fa-square-xmark" />
              </div>
            </div>
            <div className="modal-body">
              <div className="invoiceblock-wrap p-3">
                {/* Header */}
                <div className="invoice-header d-flex align-items-center justify-content-between mb-4">
                  <div className="inv-fliop01 d-flex align-items-center justify-content-start">
                    <div className="inv-fliop01">
                      <div className="square--60 circle bg-light-primary text-primary">
                        <i className="fa-solid fa-file-invoice fs-2" />
                      </div>
                    </div>
                    <div className="inv-fliop01 ps-3">
                      <span className="text-uppercase d-block fw-semibold text-md text-dark lh-2 mb-0">
                        Invoice #3256425
                      </span>
                      <span className="text-sm text-muted lh-2">
                        <i className="fa-regular fa-calendar me-1" />
                        Issued Date 12 Jul 2023
                      </span>
                    </div>
                  </div>
                  <div className="inv-fliop02">
                    <span className="label text-success bg-light-success">
                      Paid
                    </span>
                  </div>
                </div>
                {/* Invoice Body */}
                <div className="invoice-body">
                  {/* Invoice Top Body */}
                  <div className="invoice-bodytop">
                    <div className="row align-items-start justify-content-between">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="invoice-desc mb-2">
                          <h6>From</h6>
                          <p className="text-md lh-2 mb-0">
                            #782 Baghambari, Poudery Colony
                            <br />
                            Shivpuras Town, Canada
                            <br />
                            QBH230542 USA
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-6">
                        <div className="invoice-desc mb-2">
                          <h6>To</h6>
                          <p className="text-md lh-2 mb-0">
                            Dhananjay Verma/ Brijendra Mani
                            <br />
                            220 K.V Jail Road Hydel Colony
                            <br />
                            271001 Gonda, UP
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Invoice Mid Body */}
                  <div className="invoice-bodymid py-2">
                    <ul className="gray rounded-3 p-3 m-0">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                        <span className="fw-medium text-sm text-muted-2 mb-0">
                          Account No.:
                        </span>
                        <span className="fw-semibold text-muted-2 text-md">
                          ************4562
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                        <span className="fw-medium text-sm text-muted-2 mb-0">
                          Reference ID:
                        </span>
                        <span className="fw-semibold text-muted-2 text-md">
                          #2326524
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                        <span className="fw-medium text-sm text-muted-2 mb-0">
                          Pay by:
                        </span>
                        <span className="fw-semibold text-muted-2 text-md">
                          25 Aug 2023
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* Invoice bott Body */}
                  <div className="invoice-bodybott py-2 mb-2">
                    <div className="table-responsive border rounded-2">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qut.</th>
                            <th scope="col">Total Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">king Bed in Royal Resort</th>
                            <td>$514</td>
                            <td>03</td>
                            <td>$514</td>
                          </tr>
                          <tr>
                            <th scope="row">Breakfast for 3</th>
                            <td>$214</td>
                            <td>03</td>
                            <td>$214</td>
                          </tr>
                          <tr>
                            <th scope="row">Tax &amp; VAT</th>
                            <td>$78</td>
                            <td>-</td>
                            <td>$772.40</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="invoice-bodyaction">
                    <div className="d-flex text-end justify-content-end align-items-center">
                      <Link to="#" className="btn btn-sm btn-success fw-medium me-2" >
                        Download Invoice
                      </Link>
                      <Link to="#" className="btn btn-sm btn-primary fw-medium me-2" >
                        Print Invoice
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceModal;
