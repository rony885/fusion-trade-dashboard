import React from "react";
import Footer from "../../components/Footer";

const FAQs = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="card overflow-hidden"
              style={{
                backgroundImage: "url('/assets/images/small/img-2.jpg')",
              }}
            >
              <div className="position-absolute top-0 end-0 bottom-0 start-0 bg-dark opacity-75"></div>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-center">
                    <h3 className="text-white">Frequently Asked Questions</h3>
                    <p className="text-white-50">
                      We're here to help with any questions you have about
                      plans, pricing, and supported features.
                    </p>

                    <div className="search-bar">
                      <span>
                        <i className="bx bx-search-alt"></i>
                      </span>
                      <input
                        type="search"
                        className="form-control rounded-pill bg- border-0"
                        id="search"
                        placeholder="Search ..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row g-xl-4">
                  <div className="col-xl-6">
                    <h4 className="mb-3 fw-semibold fs-16">General</h4>
                    {/* <!-- FAQs --> */}
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            Can I use Dummy FAQs for my website or project?
                          </button>
                        </h2>
                        <div
                          id="faq1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="faq1"
                        >
                          <div className="accordion-body">
                            Yes, you can use Dummy FAQs to populate your website
                            or project during development or testing phases.
                            They help simulate the appearance and functionality
                            of a real FAQ section without requiring actual
                            content.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                            aria-expanded="false"
                            aria-controls="faq2"
                          >
                            Are Dummy FAQs suitable for customer support
                            purposes?
                          </button>
                        </h2>
                        <div
                          id="faq2"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq2"
                        >
                          <div className="accordion-body">
                            While Dummy FAQs can be used internally for training
                            customer support teams, they are not suitable for
                            public-facing customer support. Real FAQs should be
                            based on genuine customer inquiries to provide
                            accurate and helpful information.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq3"
                            aria-expanded="false"
                            aria-controls="faq3"
                          >
                            Do Dummy FAQs require attribution?
                          </button>
                        </h2>
                        <div id="faq3" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            No, Dummy FAQs do not require attribution since they
                            are not based on real questions or contributed by
                            individuals. You can use them freely for internal
                            testing or demonstration purposes.
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className="mb-3 mt-4 fw-semibold fs-16">Refunds</h4>
                    {/* <!-- FAQs --> */}
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq4"
                            aria-expanded="true"
                            aria-controls="faq4"
                          >
                            How do I request a refund?
                          </button>
                        </h2>
                        <div
                          id="faq4"
                          className="accordion-collapse collapse show"
                          aria-labelledby="faq4"
                        >
                          <div className="accordion-body">
                            To request a refund, simply contact our customer
                            support team through email or phone and provide
                            details about your purchase and reason for the
                            refund. Our representatives will guide you through
                            the process.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq5"
                            aria-expanded="false"
                            aria-controls="faq5"
                          >
                            What is the refund policy?
                          </button>
                        </h2>
                        <div
                          id="faq5"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq5"
                        >
                          <div className="accordion-body">
                            Our refund policy allows customers to request a
                            refund within 30 days of purchase for eligible
                            products or services. Certain restrictions may
                            apply, so it's essential to review the terms and
                            conditions specific to your purchase.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq6"
                            aria-expanded="false"
                            aria-controls="faq6"
                          >
                            How long does it take to process a refund?
                          </button>
                        </h2>
                        <div id="faq6" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            Refunds are typically processed within 3-5 business
                            days after the request is approved. However, it may
                            take longer depending on the payment method and
                            financial institution involved.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <h4 className="mb-3 fw-semibold fs-16">Payments</h4>
                    {/* <!-- FAQs --> */}
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq7"
                            aria-expanded="true"
                            aria-controls="faq7"
                          >
                            Can I test my website/app with Dummy Payments?
                          </button>
                        </h2>
                        <div
                          id="faq7"
                          className="accordion-collapse collapse show"
                          aria-labelledby="faq7"
                        >
                          <div className="accordion-body">
                            Yes, Dummy Payments are commonly used by developers
                            and businesses to test the functionality of
                            e-commerce platforms, mobile apps, and payment
                            gateways. They help identify and resolve issues
                            without risking real transactions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq8"
                            aria-expanded="false"
                            aria-controls="faq8"
                          >
                            Are Dummy Payments secure?
                          </button>
                        </h2>
                        <div
                          id="faq8"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq8"
                        >
                          <div className="accordion-body">
                            Dummy Payments used in controlled environments for
                            training or demonstration purposes are generally
                            secure. However, it's crucial not to confuse them
                            with real transactions and avoid entering genuine
                            financial information.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq9"
                            aria-expanded="false"
                            aria-controls="faq9"
                          >
                            How can I differentiate between a Dummy Payment and
                            a real one?
                          </button>
                        </h2>
                        <div id="faq9" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            Real payments involve the transfer of actual funds,
                            resulting in a change in financial balances. Dummy
                            Payments, on the other hand, do not involve any
                            monetary exchange and are typically labeled or
                            indicated as test transactions. Always verify the
                            authenticity of transactions before proceeding with
                            any action.
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className="mb-3 mt-4 fw-semibold fs-16">Support</h4>
                    {/* <!-- FAQs --> */}
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq10"
                            aria-expanded="true"
                            aria-controls="faq10"
                          >
                            How do I contact customer support?
                          </button>
                        </h2>
                        <div
                          id="faq10"
                          className="accordion-collapse collapse show"
                          aria-labelledby="faq10"
                        >
                          <div className="accordion-body">
                            You can contact our customer support team via email,
                            phone, or live chat. Our representatives are
                            available to assist you during business hours,
                            Monday through Friday.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq11"
                            aria-expanded="false"
                            aria-controls="faq11"
                          >
                            Is customer support available 24/7?
                          </button>
                        </h2>
                        <div
                          id="faq11"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq11"
                        >
                          <div className="accordion-body">
                            Our customer support is available during regular
                            business hours, Monday through Friday. However, you
                            can leave us a message outside of these hours, and
                            we'll respond to you as soon as possible.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fw-medium collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq12"
                            aria-expanded="false"
                            aria-controls="faq12"
                          >
                            How long does it take to receive a response from
                            customer support?
                          </button>
                        </h2>
                        <div id="faq12" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            We strive to respond to all customer inquiries
                            within 24 hours during regular business hours.
                            Response times may vary depending on the volume of
                            inquiries received.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end row--> */}

                <div className="row my-5">
                  <div className="col-12 text-center">
                    <h4>Can't find a questions?</h4>
                    <button type="button" className="btn btn-success mt-2">
                      <i className="bx bx-envelope me-1"></i> Email us your
                      question
                    </button>
                    <button type="button" className="btn btn-info mt-2 ms-1">
                      <i className="bx bxl-twitter me-1"></i> Send us a tweet
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
      </div>
      {/* <!-- End Container xxl --> */}

      <Footer />
    </div>
  );
};

export default FAQs;
