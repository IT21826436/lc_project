import React, { useState } from "react";

export default function PaymentSection() {
  const [selectedPayments, setSelectedPayments] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  const handlePaymentSelection = (payment) => {
    if (selectedPayments.includes(payment)) {
      setSelectedPayments(selectedPayments.filter((p) => p !== payment));
      setTotalPayment(totalPayment - payment.amount);
    } else {
      setSelectedPayments([...selectedPayments, payment]);
      setTotalPayment(totalPayment + payment.amount);
    }
  };

  const payments = [
    { month: "January", amount: 28 },
    { month: "February", amount: 28 },
    { month: "March", amount: 28 },
    { month: "April", amount: 28 },
    { month: "May", amount: 28 },
    { month: "June", amount: 28 },
    { month: "July", amount: 28 },
    { month: "August", amount: 28 },
    { month: "September", amount: 28 },
    { month: "October", amount: 28 },
    { month: "November", amount: 28 },
    { month: "December", amount: 28 },
  ];

  return (
    <div className="nav-align-top">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            type="button"
            className="nav-link active"
            role="tab"
            data-bs-toggle="tab"
            data-bs-target="#navs-top-align-home"
          >
            Pending Payments
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="nav-link"
            role="tab"
            data-bs-toggle="tab"
            data-bs-target="#navs-top-align-profile"
          >
            Past Payments
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="navs-top-align-home">
          <div className="row">
            {payments.map((payment, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-3">
                <div
                  className={`form-check custom-option custom-option-basic ${
                    selectedPayments.includes(payment) ? "checked" : ""
                  }`}
                >
                  <label
                    className="form-check-label custom-option-content"
                    htmlFor={`customCheckTemp${index + 1}`}
                    onClick={() => handlePaymentSelection(payment)}
                  >
                    <span className="custom-option-header">
                      <span className="h6 mb-0">{payment.month}</span>
                      <span>€ {payment.amount}</span>
                    </span>
                    <span className="custom-option-body">
                      <small>2 Child Package </small>
                    </span>
                  </label>
                </div>
              </div>
            ))}

            <div>
              <div
                className="d-flex border-primary p-3 border rounded mb-4 col-lg-6 mt-3"
                style={{ width: "630px" }}
              >
                <div className="avatar flex-shrink-0 me-3">
                  <i className="bx bx-briefcase-alt-2 bx-md text-primary"></i>
                </div>
                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div className="me-2">
                    <p className="mb-0">Your Payment</p>
                    <a
                      href="javascript:void(0)"
                      className="small"
                      data-bs-target="#upgradePlanModal"
                      data-bs-toggle="modal"
                    >
                      Upgrade Plan
                    </a>
                  </div>
                  <div className="user-progress">
                    <div className="d-flex justify-content-center">
                      <sup className="mt-3 mb-0 me-1">$</sup>
                      <h3 className="mb-0">{totalPayment}</h3>
                      <sub className="mt-auto mb-2"> /Year</sub>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ... Rest of the code ... */}
          </div>
        </div>
        <div className="tab-pane fade" id="navs-top-align-profile">
          {/* Past Payments content */}
        </div>
      </div>
    </div>
  );
}