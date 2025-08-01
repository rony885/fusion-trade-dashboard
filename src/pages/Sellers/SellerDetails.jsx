import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const SellerDetails = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-lg-2 text-lg-center">
                    <div className="bg-body d-flex align-items-center justify-content-center rounded py-4">
                      <img
                        src="/assets/images/seller/zara.svg"
                        alt=""
                        className="avatar-xxl flex-shrink-0"
                      />
                    </div>
                    <div className="mt-3">
                      <Link to="#!" className="btn btn-primary w-100">
                        View Stock Detail
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 border-end">
                    <div className="">
                      <h4 className="mb-1">ZARA International</h4>
                      <p className="mb-1">(Most Selling Fashion Brand)</p>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.larkon.co
                      </Link>
                      <div className="d-flex align-items-center justify-content-satrt gap-2 mt-2 mb-1">
                        <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star"></i>
                          </li>
                          <li>
                            <i className="bx bxs-star-half"></i>
                          </li>
                        </ul>
                        <p className="fw-medium mb-0 text-dark fs-15">
                          4.5/5 <span className="fs-13">(+23.3K Review)</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <iconify-icon
                              icon="solar:point-on-map-bold-duotone"
                              className="fs-20 text-primary"
                            ></iconify-icon>
                          </div>
                          <p className="mb-0 fs-15">
                            4604 , Philli Lane Kiowa IN 47404
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <iconify-icon
                              icon="solar:letter-bold-duotone"
                              className="fs-20 text-primary"
                            ></iconify-icon>
                          </div>
                          <p className="mb-0 fs-15">
                            zarafashionworld@dayrep.com
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                            <iconify-icon
                              icon="solar:outgoing-call-rounded-bold-duotone"
                              className="fs-20 text-primary"
                            ></iconify-icon>
                          </div>
                          <p className="mb-0 fs-15">+243 812-801-9335</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="ps-lg-4">
                      <h4 className="card-title">Profit by Product Category</h4>
                      <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                        <p className="mb-0 fs-15 fw-medium text-dark">
                          Man's Wares
                        </p>
                        <div>
                          <p className="mb-0 fs-15 fw-medium text-dark">
                            $123k
                            <span className="ms-1">
                              <iconify-icon
                                icon="solar:course-up-outline"
                                className="text-success"
                              ></iconify-icon>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="progress progress-soft progress-md">
                        <div
                          className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                        <p className="mb-0 fs-15 fw-medium text-dark">
                          Woman's Wares
                        </p>
                        <div>
                          <p className="mb-0 fs-15 fw-medium text-dark">
                            $233k
                            <span className="ms-1">
                              <iconify-icon
                                icon="solar:course-up-outline"
                                className="text-success"
                              ></iconify-icon>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="progress progress-soft progress-md">
                        <div
                          className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                        <p className="mb-0 fs-15 fw-medium text-dark">
                          Kid's Wares
                        </p>
                        <div>
                          <p className="mb-0 fs-15 fw-medium text-dark">
                            $110k
                            <span className="ms-1">
                              <iconify-icon
                                icon="solar:course-up-outline"
                                className="text-success"
                              ></iconify-icon>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="progress progress-soft progress-md">
                        <div
                          className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                        <p className="mb-0 fs-15 fw-medium text-dark">
                          Foot Wares
                        </p>
                        <div>
                          <p className="mb-0 fs-15 fw-medium text-dark">
                            $51k
                            <span className="ms-1">
                              <iconify-icon
                                icon="solar:course-down-outline"
                                className="text-danger"
                              ></iconify-icon>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="progress progress-soft progress-md">
                        <div
                          className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow=""
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <h4 className="card-title mb-2">Social Media :</h4>
                <ul className="list-inline d-flex gap-1 mb-0 mt-3 align-items-center">
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-primary avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-danger avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-info avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-success avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-whatsapp"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-warning avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bx-envelope"></i>
                    </Link>
                  </li>
                </ul>
                <h4 className="card-title mt-3 mb-2">Our Story :</h4>
                <p>
                  At ZARA, we believe that fashion is more than just
                  clothing—it's an expression of individuality and Link
                  celebration of diversity. Founded in 2003, our journey began
                  with Link simple yet powerful vision: to create high-quality,
                  stylish, and comfortable apparel that resonates with people
                  from all walks of life.
                </p>

                <h4 className="card-title my-2">Our Mission :</h4>
                <p>
                  Our mission is to redefine fashion by merging timeless
                  elegance with contemporary design. We strive to offer clothing
                  that not only looks good but also feels good, making everyday
                  wear an enjoyable experience. At the heart of our brand is
                  Link commitment to quality, sustainability, and customer
                  satisfaction.
                </p>

                <div className="row text-center g-2 mt-2">
                  <div className="col-lg-3 col-4">
                    <div className="bg-body p-2 rounded">
                      <h5 className="mb-1">865</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="bg-body p-2 rounded">
                      <h5 className="mb-1">+4.5k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="bg-body p-2 rounded">
                      <h5 className="mb-1">+2k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="bg-body p-2 rounded">
                      <h5 className="mb-1">+36k</h5>
                      <p className="text-muted mb-0">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <h3 className="d-flex align-items-center gap-2">
                      $5,563.786
                      <span className="badge text-success bg-success-subtle px-2 py-1 fs-12">
                        <i className="bx bx-up-arrow-alt"></i>4.53%
                      </span>
                    </h3>
                    <p className="mb-0 text-muted">
                      Gained <span className="text-success">$378.56</span> This
                      Month !
                    </p>
                  </div>
                  <div className="avatar-md bg-light bg-opacity-50 rounded">
                    <iconify-icon
                      icon="solar:chart-2-bold-duotone"
                      className="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
                <div className="apex-charts" id="sales_analytic_seller"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card text-center">
              <div className="card-body">
                <h4 className="mb-0 text-dark fw-medium">Company Reviews</h4>
                <div className="p-2 d-flex gap-3 bg-light align-items-center justify-content-center mt-3 rounded">
                  <ul className="d-flex text-warning m-0 fs-24 list-unstyled">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star-half"></i>
                    </li>
                  </ul>
                  <p className="mb-0 text-dark fw-medium fs-16">4.5 Out of 5</p>
                </div>
                <p className="text-primary mt-2 fw-medium">
                  Based on +23.5k Review
                </p>

                <div className="my-4">
                  <div className="d-flex align-items-center gap-3">
                    <h5 className="mb-0 flex-shrink-0">5 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 my-3">
                    <h5 className="mb-0 flex-shrink-0">4 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 my-3">
                    <h5 className="mb-0 flex-shrink-0">3 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 my-3">
                    <h5 className="mb-0 flex-shrink-0">2 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <h5 className="mb-0 flex-shrink-0">1 star :</h5>
                    <div
                      className="progress flex-grow-1"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-warning rounded"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <Link to="#!" className="text-primary mt-2 fw-medium">
                  How do we calculate ratings ?
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="d-flex card-header justify-content-between align-items-center border-0 pb-1">
                <div>
                  <h4 className="card-title">Latest Added Product</h4>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-outline-light rounded"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This Month
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#!" className="dropdown-item">
                      Download
                    </Link>

                    <Link to="#!" className="dropdown-item">
                      Export
                    </Link>

                    <Link to="#!" className="dropdown-item">
                      Import
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body pt-1 pb-2">
                <div className="table-responsive">
                  <table className="table align-middle mb-0 table-hover table-centered">
                    <thead className="bg-light-subtle">
                      <tr>
                        <th style={{ width: "20px" }}>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck1"
                            ></label>
                          </div>
                        </th>
                        <th>Product Name & Size</th>
                        <th>Tag ID</th>
                        <th>Category</th>
                        <th>Add Date</th>
                        <th>Items Published</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-1.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Black T-shirt
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 4
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID46765</td>
                        <td>Fashion</td>
                        <td>08/05/2023</td>
                        <td>
                          <span className="badge p-1 bg-success-subtle text-success fs-12 me-1">
                            <i className="bx bx-check-double align-text-top fs-14 me-1"></i>
                            Published
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-2.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Olive Green Leather Bag
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 2
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID36192</td>
                        <td>Hand Bag</td>
                        <td>10/05/2023</td>

                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-circle align-middle fs-10 me-1"></i>
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-3.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Women Golden Dress
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 5
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID37729</td>
                        <td>Fashion</td>
                        <td>20/05/2023</td>
                        <td>
                          <span className="badge p-1 bg-success-subtle text-success fs-12 me-1">
                            <i className="bx bx-check-double align-text-top fs-14 me-1"></i>
                            Published
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-4.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Gray Cap For Men
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 3
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID09260</td>
                        <td>Cap</td>
                        <td>21/05/2023</td>
                        <td>
                          <span className="badge p-1 bg-success-subtle text-success fs-12 me-1">
                            <i className="bx bx-check-double align-text-top fs-14 me-1"></i>
                            Published
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-5.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Dark Green Cargo Pent
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Variants : </span> 6
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>ID24109</td>
                        <td>Fashion</td>
                        <td>23/05/2023</td>
                        <td>
                          <span className="badge p-1 bg-danger-subtle text-danger fs-12 me-1">
                            <i className="bx bx-time-five align-text-top fs-14 me-1"></i>
                            Draft
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div data-bs-theme="dark">
              <div className="card overflow-hidden z-1">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar flex-shrink-0">
                      <span className="avatar-title bg-dark-subtle text-white fw-bold rounded fs-4">
                        1
                      </span>
                    </div>
                    <div className="d-block">
                      <h4 className="text-white fw-medium mb-0">
                        Accounting Revenue
                      </h4>
                    </div>
                    <div className="ms-auto">
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle arrow-none card-drop p-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded text-white"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            Download
                          </Link>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            Share
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-4 text-warning fw-semibold">$5,324,000</h3>
                  <p className="mb-0 text-white-50">
                    Accounting revenue refers to the income earned by Link
                    company
                  </p>
                  <h5 className="text-white-50 mb-0 mt-2">
                    <span className="text-white">+870</span> Customers
                  </h5>
                </div>
                {/* <div className="position-absolute top-100 start-100 translate-middle z-n1 opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                    viewBox="0 0 800 800"
                    width="400"
                    height="400"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="wwwhirl-grad"
                      >
                        <stop
                          stop-color="hsl(37, 99%, 67%)"
                          stop-opacity="1"
                          offset="45%"
                        ></stop>
                        <stop
                          stop-color="hsl(316, 73%, 52%)"
                          stop-opacity="1"
                          offset="100%"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <g
                      stroke-width="2"
                      stroke="url(#wwwhirl-grad)"
                      fill="none"
                      stroke-linecap="round"
                    >
                      <path
                        d="M37.00000251770027 417.8558470421375C50.75000289917 409.3995968075336 75.50000358581553 372.9345957958758 103.000004348755 377.2658459160388C130.50000511169446 381.5970960362018 141.5000054168703 446.6895978420795 169.00000617980973 438.6458476189197C196.5000069427492 430.60209739575987 207.50000724792503 342.57459495359063 235.00000801086446 338.65584484487175C262.500008773804 334.73709473615287 273.5000090789798 414.67959695401794 301.0000098419193 419.8358470970691C328.50001060485874 424.99209724012024 339.5000109100345 357.8370953770221 367.000011672974 363.4058455315173C394.50001243591345 368.97459568601255 405.5000127410893 447.8033478729785 433.0000135040287 446.5658478386463C460.5000142669682 445.328347804314 471.50001457214404 354.3720952808917 499.0000153350834 357.46584536672236C526.5000160980228 360.5595954525531 537.5000164031987 464.50959833646425 565.0000171661382 461.4158482506336C592.5000179290777 458.3220981648029 603.5000182342535 346.740845069176 631.000018997193 342.61584495473505C658.5000197601325 338.49084484029413 669.5000200653083 432.54084744954713 697.0000208282477 441.6158477013172C724.5000215911871 450.6908479530872 749.2500222778326 397.72584648366575 763.0000226593024 386.1758461632312 "
                        transform="rotate(99, 400, 400)"
                      ></path>
                      <path
                        d="M48.00000244140632 417.31478851138615C61.33333614464971 409.11478828389147 85.3333368104878 373.75478730289 112.00000421697456 377.9547874194117C138.6666716234613 382.15478753593334 149.33333858605602 445.2747892870875 176.00000599254278 437.4747890706901C202.66667339902952 429.67478885429273 213.33334036162427 344.31478648612864 240.000007768111 340.51478638070427C266.6666751745978 336.7147862752799 277.3333421371925 414.2347884259369 304.00000954367925 419.2347885646532C330.66667695016605 424.2347887033695 341.3333439127607 359.1147868967288 368.00001131924745 364.5147870465423C394.66667872573424 369.9147871963559 405.33334568832896 446.35478931705023 432.00001309481576 445.1547892837583C458.66668050130244 443.95478925046643 469.3333474638972 355.7547868035114 496.0000148703839 358.7547868867412C522.6666822768707 361.75478696997095 533.3333492394653 462.5547897664909 560.0000166459522 459.55478968326116C586.666684052439 456.5547896000314 597.3333510150337 348.3547865982114 624.0000184215204 344.35478648723836C650.6666858280073 340.35478637626534 661.3333527906019 431.5547889064501 688.0000201970887 440.3547891505907C714.6666876035754 449.1547893947313 738.6666882694134 397.79478796983784 752.0000219726569 386.59478765911336 "
                        transform="rotate(96, 400, 400)"
                      ></path>
                      <path
                        d="M59.00000236511238 416.77369183366216C71.9166693901294 408.8299416132767 95.16667003516005 374.5749406629315 121.00000408519412 378.6436907758119C146.83333813522813 382.71244088869224 157.1666717552418 443.8599425851229 183.0000058052758 436.3036923754879C208.83333985530987 428.74744216585293 219.1666734753235 346.05493987169393 245.00000752535757 342.37368976956407C270.8333415753916 338.6924396674342 281.1666751954052 413.7899417508832 307.0000092454393 418.6336918852646C332.83334329547336 423.477442019646 343.16667691548696 360.39244026946284 369.00001096552097 365.6236904145947C394.83334501555504 370.85494055972663 405.1666786355687 444.90619261414923 431.0000126856027 443.7436925818977C456.8333467356368 442.5811925496462 467.16668035565044 357.13744017915855 493.0000144056845 360.04369025978735C518.8333484557185 362.9499403404162 529.1666820757321 460.5999430495449 555.0000161257661 457.6936929689161C580.8333501758003 454.7874428882873 591.1666837958139 349.9686899802741 617.000017845848 346.093689872769C642.8333518958821 342.2186897652639 653.1666855158957 430.5686922163803 679.0000195659296 439.09369245289156C704.8333536159636 447.61869268940285 728.0833542609943 397.8636913090372 741.0000212860114 387.01369100802293 "
                        transform="rotate(93, 400, 400)"
                      ></path>
                      <path
                        d="M70.00000228881842 416.2326104147272C82.50000263560909 408.545110201451 105.00000325983231 375.39510928176213 130.00000395341365 379.3326093910012C155.00000464699497 383.27010950024027 165.00000492442751 442.4451111419473 190.00000561800886 435.13261093907477C215.0000063115902 427.8201107362022 225.00000658902275 347.79510851604834 250.00000728260406 344.232608417213C275.00000797618543 340.67010831837763 285.000008253618 413.3451103346186 310.0000089471993 418.0326104646651C335.00000964078066 422.7201105947116 345.00000991821315 361.67010890098595 370.0000106117945 366.7326090414362C395.00001130537584 371.7951091818864 405.0000115828084 443.45761117003735 430.0000122763897 442.33261113882617C455.000012969971 441.207611107615 465.0000132474036 358.52010881359473 490.00001394098496 361.3326088916226C515.0000146345662 364.1451089696505 525.0000149119987 458.645111591388 550.0000156055801 455.83261151336006C575.0000162991615 453.0201114353322 585.000016576594 351.58260862112587 610.0000172701755 347.8326085170887C635.0000179637568 344.0826084130515 645.0000182411893 429.5826107850997 670.0000189347705 437.83261101398153C695.0000196283519 446.0826112428634 717.5000202525752 397.9326099070257 730.0000205993658 387.43260961572156 "
                        transform="rotate(90, 400, 400)"
                      ></path>
                      <path
                        d="M81.00000221252448 415.6915137370032C93.08333588108879 408.2602635308362 114.83333648450457 376.21526264180363 139.0000038216332 380.0215127474014C163.1666711587618 383.8277628529992 172.83333809361326 441.0302644399826 197.0000054307419 433.9615142438725C221.16667276787052 426.8927640477624 230.833339702722 349.53526190161364 255.00000703985063 346.0915118060728C279.16667437697924 342.647761710532 288.83334131183074 412.90026365956487 313.00000864895935 417.43151378527654C337.16667598608797 421.96276391098814 346.8333429209394 362.94776227372 371.000010258068 367.8415124094886C395.16667759519663 372.7352625452571 404.8333445300481 442.00901446713635 429.00001186717674 440.92151443696554C453.16667920430535 439.8340144067947 462.8333461391569 359.9027621892418 487.00001347628546 362.6215122646688C511.1666808134141 365.34026234009576 520.8333477482655 456.69026487444194 545.0000150853941 453.971514799015C569.1666824225229 451.25276472358803 578.8333493573742 353.1965120031886 603.000016694503 349.5715119026193C627.1666840316316 345.94651180205005 636.8333509664831 428.59651409502993 661.0000183036116 436.5715143162824C685.1666856407402 444.54651453753485 706.9166862441559 398.0015132462251 719.0000199127203 387.85151296463107 "
                        transform="rotate(87, 400, 400)"
                      ></path>
                      <path
                        d="M92.00000213623053 415.1504285033711C103.6666691265685 407.97542830431325 124.66666970917683 377.035427445937 148.00000368985275 380.7104275478934C171.33333767052864 384.3854276498499 180.666671262799 439.6154291821098 204.00000524347493 432.7904289927621C227.33333922415085 425.96542880341434 236.66667281642125 351.2754267312707 260.00000679709717 347.95042663902444C283.33334077777306 344.6254265467781 292.66667437004344 412.455428428603 316.0000083507193 416.83042854997973C339.3333423313953 421.20542867135646 348.66667592366565 364.22542709054585 372.00000990434154 368.95042722163276C395.3333438850174 373.6754273527196 404.6666774772878 440.56042920832715 428.00001145796375 439.51042917919676C451.3333454386397 438.4604291500663 460.6666790309101 361.2854270089807 484.000013011586 363.91042708180674C507.33334699226185 366.53542715463277 516.6666805845323 454.7354296015878 540.0000145652082 452.11042952876176C563.3333485458841 449.4854294559357 572.6666821381544 354.81042682934316 596.0000161188304 351.31042673224175C619.3333500995063 347.8104266351404 628.6666836917767 427.610428849052 652.0000176724526 435.31042906267504C675.3333516531285 443.0104292762981 696.3333522357368 398.0704280295163 708.0000192260748 388.27042775763243 "
                        transform="rotate(84, 400, 400)"
                      ></path>
                      <path
                        d="M103.00000205993659 414.6093508991334C114.25000237204819 407.6906007071848 134.5000029338491 377.8555998794648 157.00000355807228 381.39934997778C179.50000418229547 384.9431000760951 188.5000044319848 438.2006015536315 211.00000505620795 431.61935137104615C233.50000568043117 425.03810118846087 242.50000593012047 353.0155991903224 265.0000065543437 349.8093491013706C287.5000071785669 346.6030990124188 296.5000074282562 412.01060082703566 319.0000080524794 416.2293509440775C341.5000086767026 420.44810106111936 350.50000892639184 365.5030995367663 373.00000955061506 370.0593496631715C395.5000101748383 374.61559978957666 404.5000104245276 439.1118515789125 427.00001104875076 438.09935155082246C449.500011672974 437.0868515227324 458.5000119226633 362.66809945811417 481.00001254688647 365.19934952833927C503.50001317110963 367.73059959856437 512.5000134207988 452.7806019581281 535.0000140450221 450.249351887903C557.5000146692455 447.71810181767785 566.5000149189347 356.4243492848922 589.0000155431579 353.0493491912587C611.5000161673811 349.6743490976252 620.5000164170704 426.6243512324686 643.0000170412935 434.0493514384623C665.5000176655168 441.47435164445596 685.7500182273176 398.13935044220204 697.0000185394292 388.68935018002827 "
                        transform="rotate(81, 400, 400)"
                      ></path>
                      <path
                        d="M114.00000198364263 414.06825422140946C124.83333561752788 407.40575403657 144.33333615852135 378.6757532395063 166.0000034262918 382.0882533341802C187.6666706940623 385.50075342885407 196.3333376011705 436.7857548516668 218.000004868941 430.44825467584394C239.6666721367115 424.1107545000211 248.3333390438197 354.7557525758877 270.0000063115902 351.66825249023043C291.6666735793607 348.5807524045731 300.33334048646896 411.56575415198193 322.0000077542394 415.6282542646889C343.6666750220099 419.6907543773959 352.3333419291181 366.78075290950034 374.0000091968886 371.16825303122386C395.6666764646591 375.5557531529474 404.3333433717673 437.6632548760115 426.0000106395378 436.68825484896183C447.66667790730827 435.7132548219122 456.3333448144165 364.05075283376124 478.00001208218697 366.4882529013854C499.66667934995746 368.92575296900964 508.33334625706556 450.8257552411821 530.0000135248362 448.3882551735579C551.6666807926067 445.9507551059337 560.3333476997147 358.0382526669549 582.0000149674854 354.7882525767894C603.6666822352558 351.5382524866238 612.3333491423641 425.6382545423989 634.0000164101345 432.78825474076314C655.666683677905 439.93825493912743 675.1666842188985 398.2082537814014 686.0000178527837 389.10825352893784 "
                        transform="rotate(78, 400, 400)"
                      ></path>
                      <path
                        d="M125.00000190734869 413.5271728024745C135.41666886300757 407.1209226247443 154.1666693831936 379.49592185833694 175.00000329451137 382.77717194936946C195.83333720582914 386.05842204040204 204.16667077035626 435.3709234084912 225.00000468167406 429.2771732394308C245.83333859299182 423.1834230703703 254.16667215751897 356.4959212202421 275.00000606883674 353.5271711378793C295.8333399801545 350.55842105551653 304.16667354468166 411.1209227357173 325.0000074559994 415.0271728440894C345.8333413673172 418.93342295246146 354.16667493184434 368.05842154102345 375.00000884316205 372.2771716580653C395.8333427544799 376.49592177510715 404.166676319007 436.21467343189954 425.0000102303248 435.27717340589027C445.83334414164256 434.339673379881 454.1666777061697 365.4334214681974 475.0000116174875 367.77717153322067C495.83334552880524 370.1209215982439 504.1666790933323 448.87092378302515 525.0000130046501 446.5271737180019C545.8333469159679 444.1834236529786 554.166680480495 359.6521713078067 575.0000143918128 356.5271712211091C595.8333483031306 353.4021711344114 604.1666818676579 424.65217311111826 625.0000157789755 431.52717330185305C645.8333496902933 438.40217349258796 664.5833502104794 398.27717237938987 675.0000171661382 389.5271721366364 "
                        transform="rotate(75, 400, 400)"
                      ></path>
                      <path
                        d="M136.00000183105476 412.98608375414506C146.00000210848728 406.83608358352404 164.00000260786584 380.316082847773 184.00000316273093 383.4660829351642C204.00000371759597 386.6160830225555 212.000003939542 433.9560843359211 232.00000449440708 428.10608417362306C252.00000504927215 422.256084011325 260.0000052712182 358.23608223520193 280.0000058260833 355.3860821561337C300.0000063809483 352.5360820770654 308.00000660289436 410.67608369005814 328.00000715775946 414.42608379409535C348.00000771262455 418.17608389813256 356.00000793457053 369.33608254315203 376.0000084894356 373.3860826555122C396.00000904430067 377.4360827678724 404.0000092662467 434.76608435839313 424.0000098211118 433.86608433342417C444.0000103759769 432.96608430845527 452.0000105979229 366.816082473239 472.000011152788 369.0660825356614C492.000011707653 371.3160825980837 500.00001192959905 446.91608469547367 520.0000124844642 444.66608463305136C540.0000130393292 442.41608457062904 548.0000132612753 361.266082319264 568.0000138161404 358.2660822360342C588.0000143710055 355.2660821528045 596.0000145929514 423.66608405044303 616.0000151478165 430.2660842335485C636.0000157026815 436.86608441665396 654.00001620206 398.34608334798384 664.0000164794926 389.9460831149405 "
                        transform="rotate(72, 400, 400)"
                      ></path>
                      <path
                        d="M146.9999864959717 412.4449870764211C156.5833200951779 406.5512369129093 173.83332057374906 381.1362362078145 192.9999877721614 384.15498629156446C212.16665497057375 387.1737363753144 219.8333218499387 432.5412376339564 238.99998904835104 426.93498747842085C258.1666562467634 421.3287373228852 265.8333231261284 359.9762356207672 284.9999903245407 357.2449855449935C304.1666575229531 354.51373546921974 311.83332440231806 410.23123701500447 330.9999916007304 413.8249871147068C350.1666587991428 417.41873721440913 357.83332567850766 370.6137359158861 376.99999287692003 374.4949860235646C396.1666600753324 378.3762361312431 403.8333269546974 433.31748765549213 422.99999415310975 432.4549876315636C442.1666613515221 431.59248760763506 449.83332823088705 368.19873584888614 468.9999954292994 370.35498590870753C488.16666262771173 372.5112359685289 495.83332950707666 444.96123797852766 514.9999967054891 442.8049879187063C534.1666639039015 440.6487378588849 541.8333307832664 362.87998570132675 560.9999979816788 360.00498562156486C580.1666651800912 357.129985541803 587.8333320594561 422.6799873603733 606.9999992578685 429.00498753584935C626.1666664562807 435.32998771132543 643.4166669348518 398.4149866871833 653.000000534058 390.3649864638501 "
                        transform="rotate(69, 400, 400)"
                      ></path>
                      <path
                        d="M157.99998641967778 411.90390947218344C167.1666533406576 406.26640931578083 183.6666537984213 381.95640864134236 201.99998764038094 384.843908721451C220.33332148234058 387.7314088015596 227.66665501912445 431.12641000547814 245.9999888610841 425.7639098567049C264.33332270304373 420.40140970793175 271.6666562398276 361.7164080798189 289.99999008178725 359.10390800733967C308.3333239237469 356.4914079348604 315.6666574605308 409.78640941343707 333.99999130249046 413.2239095088045C352.3333251444501 416.661409604172 359.6666586812339 371.8914083621065 377.99999252319355 375.60390846510336C396.3333263651532 379.31640856810014 403.6666599019371 431.8689100260775 421.99999374389677 431.04391000318935C440.3333275858564 430.21890998030113 447.6666611226403 369.5814082980196 465.9999949645999 371.64390835524006C484.3333288065595 373.7064084124605 491.6666623433434 443.006410335068 509.9999961853031 440.9439102778475C528.3333300272627 438.88141022062706 535.6666635640465 364.49390815687576 553.9999974060063 361.74390808058183C572.3333312479659 358.9939080042879 579.6666647847499 421.6939097437899 597.9999986267094 427.7439099116366C616.3333324686689 433.7939100794833 632.8333329264326 398.483909099869 641.9999998474125 390.7839088862459 "
                        transform="rotate(66, 400, 400)"
                      ></path>
                      <path
                        d="M168.99998634338385 411.362820423854C177.7499865861373 405.9815702745606 193.49998702309355 382.7765696307784 210.9999875086005 385.5328197072457C228.4999879941074 388.2890697837131 235.49998818831023 429.711570932908 252.99998867381714 424.59282079089724C270.49998915932406 419.4740706488865 277.49998935352687 363.45656909477873 294.9999898390338 360.962819025594C312.4999903245407 358.4690689564093 319.4999905187435 409.34157036777793 336.99999100425043 412.6228204588105C354.49999148975735 415.904070549843 361.49999168396016 373.1690693642351 378.9999921694671 376.71281946255027C396.49999265497405 380.2565695608654 403.4999928491768 430.42032095257105 420.9999933346837 429.63282093072326C438.4999938201907 428.84532090887546 445.4999940143935 370.96406930306125 462.9999944999004 372.9328193576807C480.4999949854073 374.90156941230026 487.4999951796101 441.0515712475165 504.99999566511707 439.082821192897C522.4999961506239 437.11407113827744 529.4999963448267 366.10781916833304 546.9999968303338 363.482819095507C564.4999973158407 360.857819022681 571.4999975100434 420.70782068311473 588.9999979955503 426.482820843332C606.4999984810572 432.2578210035493 622.2499989180135 398.5528200684629 630.999999160767 391.20281986455 "
                        transform="rotate(63, 400, 400)"
                      ></path>
                      <path
                        d="M179.9999862670899 410.8217390049191C188.33331983161702 405.6967388627349 203.3333202477658 383.59673824960896 219.99998737682003 386.22173832243504C236.66665450587425 388.84673839526107 243.33332135749595 428.29673948973243 259.9999884865502 423.4217393544841C276.6666556156044 418.5467392192357 283.33332246722614 365.19673773913314 299.99998959628033 362.82173767324286C316.6666567253345 360.44673760735265 323.3333235769563 408.89673895151327 339.9999907060105 412.02173903821097C356.6666578350647 415.14673912490866 363.3333246866864 374.4467379957582 379.9999918157406 377.8217380893917C396.6666589447948 381.19673818302516 403.33332579641655 428.9717395084591 419.9999929254708 428.2217394876517C436.666660054525 427.47173946684427 443.3333269061467 372.3467379374974 459.9999940352009 374.221737989516C476.6666611642551 376.0967380415346 483.33332801587676 439.09673978935956 499.99999514493106 437.22173973734095C516.6666622739854 435.34673968532235 523.333329125607 367.72173780918484 539.9999962546613 365.2217377398267C556.6666633837156 362.72173767046854 563.3333302353371 419.72173925183404 579.9999973643913 425.2217394044219C596.6666644934455 430.7217395570098 611.6666649095944 398.6217386664514 619.9999984741214 391.6217384722486 "
                        transform="rotate(60, 400, 400)"
                      ></path>
                      <path
                        d="M190.99998619079594 410.28064614189236C198.9166530770967 405.4118960068174 213.16665347243807 384.4168954243478 228.99998724503956 386.9106454935325C244.83332101764108 389.40439556271724 251.1666545266817 426.881896602465 266.99998829928325 422.2506464739791C282.8333220718847 417.61939634549316 289.16665558092535 366.9368949393957 304.99998935352687 364.6806448768C320.83332312612833 362.4243948142043 327.166656635169 408.45189609115687 342.9999904077705 411.4206461735197C358.833324180372 414.38939625588245 365.1666576894126 375.72439518318953 380.9999914620141 378.93064527214136C396.8333252346156 382.13689536109314 403.1666587436563 427.5231466202554 418.99999251625775 426.8106466004883C434.83332628885927 426.0981465807213 441.1666597978999 373.72939512784177 456.99999357050143 375.51064517725945C472.8333273431029 377.29189522667707 479.1666608521435 437.1418968871108 494.99999462474506 435.36064683769314C510.8333283973466 433.57939678827546 517.1666619063872 369.33564500594485 532.9999956789886 366.96064494005464C548.8333294515903 364.58564487416436 555.1666629606309 418.73564637646155 570.9999967332324 423.9606465214201C586.8333305058338 429.18564666637855 601.0833309011753 398.69064582034804 608.9999977874759 392.0406456358554 "
                        transform="rotate(57, 400, 400)"
                      ></path>
                      <path
                        d="M201.999986114502 409.7395570935629C209.49998632257638 405.12705696559715 222.99998669711033 385.2370564137838 237.99998711325912 387.59955647932725C252.99998752940792 389.96205654487073 258.99998769586745 425.46705752989493 273.99998811201624 421.0795574081714C288.9999885281651 416.6920572864479 294.99998869462456 368.6770559543555 309.9999891107734 366.5395558950544C324.9999895269222 364.4020558357531 330.99998969338174 408.00705704549773 345.99999010953053 410.8195571235256C360.9999905256793 413.6320572015535 366.9999906921388 377.0020561853181 381.99999110828765 380.0395562695883C396.99999152443644 383.0770563538584 402.99999169089597 426.07455754674896 417.99999210704476 425.3995575280222C432.99999252319355 424.72455750929555 438.99999268965314 375.11205613288337 453.99999310580193 376.7995561797001C468.9999935219507 378.48705622651687 474.9999936884102 435.18705779955934 489.99999410455905 433.4995577527426C504.9999945207079 431.8120577059259 510.9999946871674 370.9495560174021 525.9999951033162 368.69955595497976C540.9999955194651 366.44955589255744 546.9999956859245 417.7495573157864 561.9999961020733 422.69955745311546C576.9999965182221 427.6495575904446 590.499996892756 398.759556788942 597.9999971008303 392.4595566141595 "
                        transform="rotate(54, 400, 400)"
                      ></path>
                      <path
                        d="M212.99998603820805 409.1984737672793C220.08331956805608 404.8422236464228 232.8333199217826 386.0572231252658 246.99998698147868 388.28847318716794C261.16665404117475 390.51972324907007 266.8333208650532 424.0522241793707 280.9999879247493 419.9084740644096C295.16665498444536 415.76472394944847 300.83332180832383 370.4172226913613 314.99998886801995 368.3984726353546C329.166655927716 366.3797225793479 334.83332275159444 407.56222372188444 348.99998981129056 410.2184737955775C363.1666568709866 412.8747238692705 368.83332369486504 378.27972290949265 382.99999075456117 381.1484729890811C397.16665781425723 384.0172230686695 402.8333246381357 424.6259741952884 416.9999916978318 423.9884741776021C431.1666587575279 423.3509741599157 436.8333255814063 376.4947228599709 450.99999264110244 378.08847290418674C465.1666597007985 379.68222294840257 470.8333265246769 433.23222443405376 484.99999358437304 431.63847438983794C499.16666064406917 430.04472434562217 504.8333274679476 372.56347275090525 518.9999945276437 370.43847269195084C533.1666615873398 368.3134726329964 538.8333284112182 416.76347397715705 552.9999954709143 421.4384741068568C567.1666625306103 426.1134742365565 579.9166628843368 398.8284734795818 586.9999964141849 392.87847331450945 "
                        transform="rotate(51, 400, 400)"
                      ></path>
                      <path
                        d="M223.9999859619141 408.65739234834444C230.6666528135358 404.5573922345971 242.66665314645485 386.87739174409637 255.99998684969822 388.9773918023572C269.3333205529416 391.07739186061804 274.66665403423895 422.6373927361951 287.99998773748234 418.7373926279964C301.3333214407257 414.83739251979773 306.6666549220231 372.15739133571566 319.99998862526644 370.25739128300347C333.33332232850984 368.35739123029134 338.6666558098072 407.11739230561983 351.99998951305054 409.61739237497795C365.33332321629393 412.1173924443361 370.6666566975913 379.55739154101576 383.9999904008347 382.25739161592253C397.3333241040781 384.95739169082935 402.66665758537545 423.17739275117646 415.99999128861884 422.5773927345305C429.3333249918621 421.9773927178846 434.66665847315954 377.8773914944071 447.9999921764029 379.37739153602195C461.3333258796463 380.87739157763684 466.6666593609436 431.2773929758968 479.99999306418704 429.777392934282C493.33332676743044 428.2773928926671 498.6666602487278 374.17739139175706 511.99999395197113 372.17739133627055C525.3333276552146 370.17739128078404 530.666661136512 415.7773925458764 543.9999948397553 420.1773926679467C557.3333285429986 424.57739279001703 569.3333288759177 398.89739207757026 575.9999957275394 393.2973919222081 "
                        transform="rotate(48, 400, 400)"
                      ></path>
                      <path
                        d="M234.99998588562016 408.1162975779691C241.2499860590155 404.272547471331 252.49998637112708 387.6975470114865 264.99998671791775 389.66629706610604C277.4999870647084 391.6350471207256 282.49998720342467 421.22254794157914 294.99998755021534 417.56629784014285C307.499987897006 413.91004773870657 312.4999880357223 373.89754662862964 324.999988382513 372.11629657921196C337.49998872930365 370.3350465297943 342.49998886801995 406.67254753791474 354.9999892148106 409.01629760293804C367.4999895616013 411.3600476679613 372.49998970031754 380.83504682109844 384.9999900471082 383.36629689132354C397.4999903938989 385.89754696154864 402.49999053261513 421.72879795562415 414.9999908794058 421.1662979400185C427.49999122619647 420.60379792441296 432.4999913649127 379.2600467774028 444.9999917117034 380.6662968164168C457.49999205849406 382.07254685543074 462.4999921972103 429.32254816629944 474.999992544001 427.91629812728553C487.4999928907917 426.51004808827156 492.49999302950795 375.79129668116843 504.9999933762987 373.9162966291498C517.4999937230893 372.0412965771312 522.4999938618056 414.7912977631553 534.9999942085963 418.9162978775962C547.4999945553868 423.04129799203713 558.7499948674986 398.96629732411833 564.9999950408939 393.7162971784662 "
                        transform="rotate(45, 400, 400)"
                      ></path>
                      <path
                        d="M245.9999858093262 407.5752161590342C251.83331930449518 403.98771605950526 262.33331959579937 388.5177156303171 273.9999865861373 390.35521568129536C285.66665357647526 392.19271573227354 290.33332037261044 419.8077164984035 301.9999873629484 416.39521640372965C313.6666543532864 412.98271630905583 318.3333211494216 375.637715272984 329.9999881397595 373.9752152268608C341.66665513009747 372.31271518073765 346.33332192623266 406.22771612165013 357.9999889165706 408.4152161823385C369.66665590690855 410.60271624302686 374.3333227030438 382.11271545262156 385.99998969338174 384.475215518165C397.6666566837197 386.8377155837085 402.3333234798548 420.2802165115122 413.9999904701928 419.755216496947C425.6666574605308 419.2302164823818 430.33332425666595 380.642715411839 441.99999124700395 381.95521544825203C453.66665823734184 383.267715484665 458.3333250334771 427.3677167081425 469.999992023815 426.0552166717295C481.66665901415297 424.74271663531647 486.33332581028816 377.4052153220202 497.99999280062616 375.65521527346954C509.6666597909641 373.90521522491883 514.3333265870992 413.80521633187465 525.9999935774372 417.6552164386862C537.6666605677751 421.5052165454977 548.1666608590793 399.0352159221068 553.9999943542483 394.13521578616485 "
                        transform="rotate(42, 400, 400)"
                      ></path>
                      <path
                        d="M256.99998573303225 407.03413283275063C262.41665254997486 403.7028827403309 272.1666528204716 389.33788234179906 282.9999864543569 391.044132389136C293.8333200882421 392.75038243647293 298.1666535417962 418.3928831478793 308.99998717568144 415.22413305996787C319.83332080956666 412.0553829720564 324.1666542631208 377.3778820099898 334.999987897006 375.8341319671611C345.8333215308913 374.29038192433245 350.1666549844454 405.7828827980369 360.99998861833063 407.8141328543904C371.8333222522159 409.84538291074387 376.16665570577 383.39038217679604 386.99998933965526 385.58413223765785C397.8333229735405 387.7778822985196 402.1666564270946 418.83163316005164 412.9999900609798 418.3441331465268C423.83332369486504 417.856633133002 428.1666571484192 382.02538213892655 438.9999907823044 383.2441321727386C449.83332441618967 384.4628822065507 454.16665786974374 425.412883342637 464.999991503629 424.19413330882486C475.8333251375143 422.97538327501275 480.1666585910683 379.01913205552336 490.99999222495364 377.39413201044056C501.83332585883886 375.7691319653578 506.166659312393 412.8191329932453 516.9999929462782 416.39413309242747C527.8333265801634 419.9691331916096 537.5833268506601 399.10413261274664 542.9999936676028 394.5541324865148 "
                        transform="rotate(39, 400, 400)"
                      ></path>
                      <path
                        d="M267.9999856567383 406.49303234032936C272.99998579545456 403.4180322550189 281.9999860451438 390.15803188714335 291.99998632257643 391.73303193083893C301.9999866000089 393.3080319745346 305.99998671098194 416.9780326312174 315.9999869884145 414.05303255006834C325.99998726584704 411.12803246891934 329.99998737682006 379.1180315808578 339.99998765425255 377.69303154132365C349.9999879316851 376.26803150178955 353.9999880426581 405.3380323082859 363.99998832009067 407.2130323603045C373.9999885975232 409.0880324123231 377.9999887084962 384.6680317348329 387.9999889859287 386.69303179101297C397.9999892633613 388.71803184719306 401.9999893743343 417.3830326424534 411.99998965176684 416.9330326299689C421.9999899291994 416.48303261748447 425.9999900401724 383.40803169987635 435.9999903176049 384.53303173108753C445.99999059503745 385.65803176229866 449.99999070601046 423.4580328109937 459.999990983443 422.3330327797825C469.99999126087556 421.2080327485713 473.9999913718486 380.63303162288884 483.9999916492811 379.13303158127394C493.9999919267137 377.6330315396591 497.99999203768664 411.83303248847835 507.9999923151192 415.1330325800311C517.9999925925517 418.4330326715838 526.999992842241 399.17303213724875 531.9999929809572 394.9730320207271 "
                        transform="rotate(36, 400, 400)"
                      ></path>
                      <path
                        d="M279.0000008392334 405.9519547360917C283.58333429972333 403.1332046578904 291.8333345286052 390.9782043206712 301.000001449585 392.4219543607255C310.1666683705648 393.8657044007798 313.8333351389567 415.5632050027391 323.0000020599366 412.88195492835246C332.16666898091637 410.2007048539659 335.83333574930833 380.8582040399094 345.00000267028815 379.55195400366983C354.166669591268 378.2457039674302 357.83333635965994 404.89320470671856 367.00000328063976 406.6119547544023C376.1666702016196 408.33070480208596 379.8333369700115 385.94570418105326 389.0000038909913 387.8019542325517C398.16667081197113 389.6582042840501 401.8333375803631 415.93445501303876 411.0000045013429 415.5219550015947C420.16667142232274 415.10945499015054 423.8333381907147 384.7907041490098 433.00000511169446 385.82195417762C442.1666720326743 386.85320420623026 445.83333880106625 421.503205167534 455.00000572204607 420.47195513892376C464.1666726430259 419.4407051103135 467.8333394114178 382.2469540784379 477.0000063323977 380.8719540402909C486.1666732533775 379.4969540021439 489.83334002176946 410.8469548718949 499.0000069427492 413.8719549558183C508.166673863729 416.8969550397416 516.4166740926108 399.24195454993446 521.0000075531008 395.391954443123 "
                        transform="rotate(33, 400, 400)"
                      ></path>
                      <path
                        d="M290.00000076293946 405.4108733171568C294.16666754520304 402.84837324606474 301.66666775327747 391.79837293950175 310.00000131780456 393.1108729759148C318.33333488233166 394.42337301232783 321.6666683081425 414.1483735595635 330.0000018726696 411.7108734919393C338.33333543719675 409.27337342431514 341.6666688630076 382.59837268426384 350.0000024275347 381.4108726513187C358.3333359920618 380.2233726183736 361.66666941787264 404.4483732904539 370.0000029823998 406.01087333380275C378.3333365469269 407.5733733771516 381.66666997273774 387.2233728125764 390.00000353726483 388.9108728593931C398.3333371017919 390.5983729062099 401.66667052760283 414.4858735689268 410.0000040921299 414.1108735585231C418.333337656657 413.7358735481194 421.6666710824679 386.173372783446 430.00000464699497 387.11087280945526C438.3333382115221 388.04837283546453 441.6666716373329 419.5483737093771 450.00000520186006 418.61087368336774C458.3333387663872 417.67337365735847 461.666672192198 383.86087271928966 470.00000575672516 382.6108726846106C478.3333393212523 381.36087264993154 481.6666727470631 409.8608734406143 490.0000063115902 412.6108735169082C498.3333398761173 415.3608735932022 505.8333400841917 399.31087314792296 510.00000686645524 395.81087305082156 "
                        transform="rotate(30, 400, 400)"
                      ></path>
                      <path
                        d="M301.00000068664554 404.869786176176C304.75000079068275 402.5635361121931 311.5000009779497 392.61853583628647 319.00000118602406 393.79978586905816C326.5000013940985 394.9810359018299 329.5000014773283 412.73353639434197 337.00000168540265 410.5397863334802C344.5000018934771 408.34603627261845 347.5000019767068 384.3385356065723 355.00000218478124 383.2697855769217C362.50000239285566 382.2010355472711 365.5000024760854 404.0035361521434 373.00000268415977 405.40978619115737C380.5000028922342 406.8160362301713 383.50000297546393 388.5010357220536 391.00000318353835 390.01978576418867C398.5000033916127 391.53853580632375 401.5000034748425 413.037286402769 409.00000368291694 412.69978639340565C416.5000038909913 412.3622863840423 419.5000039742211 387.5560356958362 427.00000418229547 388.3997857192446C434.5000043903699 389.24353574265297 437.50000447359963 417.59353652917423 445.00000468167406 416.7497865057658C452.5000048897485 415.9060364823575 455.5000049729782 385.47478563809557 463.00000518105264 384.34978560688444C470.50000538912707 383.22478557567325 473.5000054723568 408.87478628728775 481.0000056804312 411.3497863559523C488.5000058885056 413.82478642461683 495.25000607577255 399.3797860238655 499.0000061798097 396.2297859364743 "
                        transform="rotate(27, 400, 400)"
                      ></path>
                      <path
                        d="M312.00000061035155 404.3286914058006C315.33333403616246 402.27869134892694 321.3333342026219 393.4386911036766 328.0000010542436 394.48869113280705C334.6666679058653 395.53869116193744 337.333334646514 411.318691599726 344.0000014981357 409.36869154562663C350.6666683497574 407.4186914915273 353.3333350904061 386.0786908994863 360.0000019420278 385.12869087313015C366.6666687936495 384.1786908467741 369.33333553429816 403.5586913844383 376.0000023859198 404.8086914191174C382.6666692375415 406.0586914537965 385.3333359781902 389.77869100213627 392.0000028298119 391.1286910395897C398.6666696814336 392.4786910770431 401.33333642208225 411.5886916072167 408.00000327370395 411.2886915988937C414.6666701253256 410.9886915905707 417.3333368659743 388.93869097883197 424.000003717596 389.6886909996394C430.6666705692177 390.43869102044687 433.33333730986635 415.63869171957685 440.00000416148805 414.8886916987694C446.66667101310975 414.13869167796196 449.3333377537584 387.08869092750695 456.0000046053801 386.0886908997637C462.6666714570018 385.08869087202044 465.3333381976505 407.8886915045666 472.0000050492722 410.0886915656018C478.66667190089385 412.28869162663693 484.6666720673534 399.4486912704136 488.0000054931642 396.64869119273243 "
                        transform="rotate(24, 400, 400)"
                      ></path>
                      <path
                        d="M323.0000005340576 403.78761189421436C325.9166672816421 401.9938618444499 331.1666674272942 394.2588616298558 337.0000009224632 395.17761165534495C342.83333441763216 396.09636168083404 345.1666678156997 409.903862063899 351.0000013108687 408.1976120165621C356.8333348060377 406.4913619692252 359.16666820410535 387.81886145118926 365.0000016992743 386.9876114281277C370.8333351944433 386.1563614050661 373.16666859251086 403.11386187552233 379.00000208767983 404.20761190586654C384.8333355828488 405.3013619362107 387.1666689809164 391.0563615410081 393.0000024760854 392.23761157377976C398.83333597125437 393.4188616065515 401.16666936932194 410.14011207045337 407.00000286449097 409.8776120631708C412.83333635965994 409.6151120558882 415.1666697577275 390.32136152061673 421.0000032528965 390.9776115388233C426.83333674806545 391.6338615570298 429.1666701461331 413.68386216876854 435.00000364130204 413.027612150562C440.833337136471 412.3713621323555 443.16667053453864 388.7026114757074 449.0000040297076 387.827611451432C454.8333375248766 386.9526114271567 457.16667092294415 406.90261198063456 463.0000044181131 408.8276120340403C468.8333379132821 410.7526120874461 474.0833380589342 399.51761177575065 477.0000048065187 397.0676117077797 "
                        transform="rotate(21, 400, 400)"
                      ></path>
                      <path
                        d="M334.0000004577637 403.2465228458849C336.5000005271218 401.70902280322963 341.00000065196645 395.0790226192919 346.00000079068275 395.8665226411397C351.000000929399 396.6540226629875 353.0000009848855 408.4890229913289 358.0000011236018 407.0265229507544C363.00000126231805 405.5640229101799 365.00000131780456 389.55902246614914 370.0000014565208 388.84652244638204C375.0000015952371 388.134022426615 377.00000165072356 402.66902282986314 382.00000178943986 403.60652285587247C387.00000192815617 404.5440228818818 389.0000019836426 392.33402254313665 394.00000212235886 393.34652257122667C399.00000226107517 394.35902259931675 401.0000023165617 408.6915229969469 406.0000024552779 408.4665229907047C411.0000025939942 408.24152298446245 413.00000264948073 391.7040225256584 418.000002788197 392.26652254126395C423.0000029269132 392.8290225568696 425.0000029823998 411.72902308121706 430.00000312111604 411.16652306561144C435.0000032598323 410.6040230500059 437.00000331531885 390.31652248716466 442.0000034540351 389.5665224663572C447.00000359275134 388.81652244554977 449.00000364823785 405.9165229199594 454.00000378695415 407.56652296573577C459.0000039256704 409.2165230115121 463.50000405051503 399.5865227443446 466.00000411987315 397.48652268608373 "
                        transform="rotate(18, 400, 400)"
                      ></path>
                      <path
                        d="M344.99999656677244 402.70542998285816C347.08332995790425 401.42417994731215 350.83333006194147 395.89917979403066 354.99999684420504 396.5554298122372C359.16666362646856 397.2116798304437 360.833330339374 407.0741801040615 364.99999712163753 405.85543007024944C369.1666639039011 404.6366800364373 370.8333306168065 391.2991796664117 374.9999973990701 390.70542964993916C379.16666418133366 390.11167963346657 380.83333089423905 402.22417996950674 384.99999767650263 403.00542999118113C389.16666445876615 403.7866800128556 390.8333311716716 393.61167973056797 394.9999979539351 394.4554297539763C399.1666647361987 395.2991797773847 400.83333144910415 407.2429301087432 404.9999982313677 407.0554301035413C409.16666501363125 406.86793009833946 410.8333317265367 393.0866797160028 414.9999985088002 393.5554297290074C419.1666652910638 394.02417974201205 420.8333320039692 409.7741801789683 424.99999878623277 409.3054301659637C429.16666556849634 408.836680152959 430.83333228140174 391.9304296839246 434.9999990636653 391.3054296665851C439.1666658459289 390.6804296492456 440.8333325588343 404.93043004458696 444.9999993410978 406.3054300827339C449.1666661233614 407.6804301208809 452.9166662273986 399.65542989824127 454.99999961853035 397.90542984969056 "
                        transform="rotate(15, 400, 400)"
                      ></path>
                      <path
                        d="M355.9999964904785 402.1643504712719C357.66666320338396 401.13935044283505 360.6666632866137 396.71935032020986 363.99999671242455 397.2443503347751C367.3333301382354 397.7693503493403 368.66666350855974 405.6593505682346 371.9999969343706 404.6843505411849C375.33333036018144 403.7093505141352 376.6666637305058 393.0393502181147 379.9999971563166 392.56435020493666C383.3333305821275 392.0893501917586 384.6666639524518 401.77935046059076 387.9999973782626 402.4043504779303C391.3333308040735 403.0293504952698 392.66666417439785 394.8893502694397 395.99999760020864 395.56435028816645C399.33333102601955 396.23935030689313 400.6666643963439 405.7943505719799 403.9999978221547 405.64435056781844C407.33333124796553 405.49435056365695 408.6666646182899 394.46935025778754 411.9999980441007 394.8443502681913C415.33333146991157 395.219350278595 416.6666648402359 407.81935062816 419.99999826604676 407.4443506177563C423.3333316918576 407.0693506073526 424.66666506218195 393.54435023212505 427.9999984879928 393.04435021825344C431.33333191380365 392.5443502043818 432.666665284128 403.9443505206549 435.99999870993884 405.04435055117244C439.33333213574963 406.14435058169005 442.3333322189794 399.72435040357834 443.9999989318849 398.3243503647378 "
                        transform="rotate(12, 400, 400)"
                      ></path>
                      <path
                        d="M366.9999964141846 401.62326142294245C368.2499964488636 400.85451140161484 370.499996511286 397.53951130964595 372.9999965806441 397.93326132056984C375.49999665000223 398.32701133149374 376.49999667774546 404.2445114956645 378.99999674710364 403.5132614753772C381.49999681646176 402.78201145508996 382.49999684420504 394.7795112330746 384.9999969135631 394.42326122319105C387.4999969829213 394.06701121330747 388.4999970106645 401.33451141493157 390.9999970800227 401.80326142793626C393.4999971493808 402.2720114409409 394.49999717712404 396.1670112715683 396.99999724648217 396.67326128561336C399.49999731584035 397.1795112996584 400.4999973435836 404.34576149847345 402.9999974129417 404.23326149535234C405.4999974822998 404.1207614922312 406.4999975100431 395.8520112628292 408.9999975794012 396.133261270632C411.49999764875935 396.41451127843476 412.49999767650263 405.86451154060853 414.99999774586075 405.58326153280575C417.4999978152189 405.30201152500297 418.49999784296216 395.15826124358233 420.9999979123203 394.78326123317856C423.4999979816784 394.40826122277485 424.4999980094217 402.95826145997967 426.9999980787798 403.7832614828679C429.49999814813793 404.60826150575605 431.74999821056025 399.7932613721723 432.99999824523934 398.74326134304187 "
                        transform="rotate(9, 400, 400)"
                      ></path>
                      <path
                        d="M378.0000001525879 401.082172374613C378.8333335090406 400.5696723603946 380.3333335506555 398.359672299082 382.0000002635609 398.6221723063646C383.66666697646633 398.88467231364723 384.3333336616285 402.82967242309434 386.0000003745339 402.3421724095695C387.66666708743935 401.85467239604463 388.3333337726015 396.5196722480344 390.0000004855069 396.2821722414454C391.66666719841237 396.04467223485636 392.33333388357454 400.88967236927243 394.00000059647994 401.2021723779422C395.6666673093854 401.51467238661195 396.33333399454756 397.44467227369694 398.00000070745295 397.7821722830603C399.6666674203584 398.1196722924236 400.3333341055206 402.897172424967 402.000000818426 402.82217242288624C403.6666675313314 402.7471724208055 404.33333421649354 397.23467226787085 406.000000929399 397.4221722730727C407.66666764230445 397.60967227827456 408.33333432746656 403.90967245305706 410.000001040372 403.7221724478552C411.66666775327747 403.53467244265335 412.3333344384396 396.77217225503955 414.00000115134503 396.52217224810374C415.6666678642505 396.27217224116794 416.3333345494126 401.9721723993045 418.00000126231805 402.5221724145633C419.66666797522345 403.0721724298221 421.16666801683834 399.8621723407662 422.00000137329107 399.16217232134596 "
                        transform="rotate(6, 400, 400)"
                      ></path>
                      <path
                        d="M389.00000007629393 400.54108714098084C389.4166667545203 400.28483713387163 390.1666667753277 399.17983710321533 391.00000013178044 399.31108710685663C391.83333348823317 399.44233711049793 392.1666668308143 401.41483716522146 393.00000018726695 401.17108715845904C393.8333335437197 400.92733715169663 394.16666688630073 398.25983707769154 395.00000024275346 398.141087074397C395.8333335992062 398.02233707110247 396.1666669417873 400.4448371383105 397.00000029823997 400.6010871426454C397.8333336546927 400.7573371469803 398.16666699727375 398.7223370905228 399.0000003537265 398.89108709520445C399.8333337101792 399.0598370998861 400.16666705276026 401.44858716615784 401.000000409213 401.41108716511746C401.8333337656657 401.3735871640771 402.16666710824677 398.6173370876097 403.0000004646995 398.71108709021064C403.8333338211522 398.80483709281157 404.1666671637333 401.95483718020284 405.000000520186 401.8610871776019C405.83333387663873 401.767337175001 406.1666672192198 398.3860870811941 407.0000005756725 398.2610870777262C407.83333393212524 398.1360870742583 408.1666672747063 400.9860871533266 409.000000631159 401.261087160956C409.8333339876117 401.53608716858537 410.5833340084192 399.93108712405746 411.00000068664554 399.58108711434727 "
                        transform="rotate(3, 400, 400)"
                      ></path>
                    </g>
                  </svg>
                </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="card-title mb-0 text-dark fw-medium">
                        Orders
                      </h5>
                      <div className="avatar-md bg-light bg-opacity-50 rounded mx-auto my-3">
                        <iconify-icon
                          icon="solar:cart-4-broken"
                          className="fs-32 text-primary avatar-title"
                        ></iconify-icon>
                      </div>
                      <h4 className="text-dark fw-medium">458</h4>

                      <p className="text-muted">60% Target</p>

                      <div className="progress mt-2" style={{ height: "10px" }}>
                        <div
                          className="progress-bar progress-bar progress-bar-striped progress-bar-animated bg-primary"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="70"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-top">
                    <Link to="#!" className="link-dark fw-medium">
                      View More <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="card-title mb-0 text-dark fw-medium">
                        Users
                      </h5>
                      <div className="avatar-md bg-light bg-opacity-50 rounded mx-auto my-3">
                        <iconify-icon
                          icon="solar:user-plus-broken"
                          className="fs-32 text-success avatar-title"
                        ></iconify-icon>
                      </div>
                      <h4 className="text-dark fw-medium">870</h4>

                      <p className="text-muted">80% Target</p>

                      <div className="progress mt-2" style={{ height: "10px" }}>
                        <div
                          className="progress-bar progress-bar progress-bar-striped progress-bar-animated bg-success"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="80"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-top">
                    <Link to="#!" className="link-dark fw-medium">
                      View More <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerDetails;
