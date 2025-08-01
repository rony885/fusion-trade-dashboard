import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="slides-only">
                  Slides Only
                  <Link className="anchor-link" to="#slides-only">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Here’s a carousel with slides only. Note the presence of the
                  <code>.d-block</code> and <code>.img-fluid</code> on carousel
                  images to prevent browser default image alignment.
                </p>

                <div className="w-50 mb-3 mx-auto">
                  <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="assets/images/small/img-2.jpg"
                          className="d-block w-100"
                          alt="img-2"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-3.jpg"
                          className="d-block w-100"
                          alt="img-3"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-4.jpg"
                          className="d-block w-100"
                          alt="img-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="slidesOnly">
                        &lt;!-- Slides Only --&gt; &lt;div
                        id=&quot;carouselExampleSlidesOnly&quot;
                        className=&quot;carousel slide&quot;
                        data-bs-ride=&quot;carousel&quot;&gt; &lt;div
                        className=&quot;carousel-inner&quot;&gt; &lt;div
                        className=&quot;carousel-item active&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-2.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-2&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-3.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-3&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-4.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-4&quot;&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="with-controls">
                  With Controls
                  <a className="anchor-link" href="#with-controls">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Adding in the previous and next controls:
                </p>
                <div className="w-50 mb-3 mx-auto">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="assets/images/small/img-4.jpg"
                          className="d-block w-100"
                          alt="img-4"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-2.jpg"
                          className="d-block w-100"
                          alt="img-2"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-3.jpg"
                          className="d-block w-100"
                          alt="img-3"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="withControls">
                        &lt;!-- With Controls --&gt; &lt;div
                        id=&quot;carouselExampleControls&quot;
                        className=&quot;carousel slide&quot;
                        data-bs-ride=&quot;carousel&quot;&gt; &lt;div
                        className=&quot;carousel-inner&quot;&gt; &lt;div
                        className=&quot;carousel-item active&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-4.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-4&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-2.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-2&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-3.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-3&quot;&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;button className=&quot;carousel-control-prev&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleControls&quot;
                        data-bs-slide=&quot;prev&quot;&gt; &lt;span
                        className=&quot;carousel-control-prev-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
                        &lt;/button&gt; &lt;button
                        className=&quot;carousel-control-next&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleControls&quot;
                        data-bs-slide=&quot;next&quot;&gt; &lt;span
                        className=&quot;carousel-control-next-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
                        &lt;/button&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="with-indicators">
                  With Indicators
                  <a className="anchor-link" href="#with-indicators">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  You can also add the indicators to the carousel, alongside the
                  controls, too.
                </p>
                <div className="w-50 mx-auto mb-3">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="assets/images/small/img-5.jpg"
                          className="d-block w-100"
                          alt="img-5"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-6.jpg"
                          className="d-block w-100"
                          alt="img-6"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-7.jpg"
                          className="d-block w-100"
                          alt="img-7"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="withIndicators">
                        &lt;!-- With Indicators --&gt; &lt;div
                        id=&quot;carouselExampleIndicators&quot;
                        className=&quot;carousel slide&quot;
                        data-bs-ride=&quot;carousel&quot;&gt; &lt;div
                        className=&quot;carousel-indicators&quot;&gt; &lt;button
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleIndicators&quot;
                        data-bs-slide-to=&quot;0&quot;
                        className=&quot;active&quot;
                        aria-current=&quot;true&quot; aria-label=&quot;Slide
                        1&quot;&gt;&lt;/button&gt; &lt;button
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleIndicators&quot;
                        data-bs-slide-to=&quot;1&quot; aria-label=&quot;Slide
                        2&quot;&gt;&lt;/button&gt; &lt;button
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleIndicators&quot;
                        data-bs-slide-to=&quot;2&quot; aria-label=&quot;Slide
                        3&quot;&gt;&lt;/button&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-inner&quot;&gt; &lt;div
                        className=&quot;carousel-item active&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-5.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-5&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-6.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-6&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-7.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-7&quot;&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;button className=&quot;carousel-control-prev&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleIndicators&quot;
                        data-bs-slide=&quot;prev&quot;&gt; &lt;span
                        className=&quot;carousel-control-prev-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
                        &lt;/button&gt; &lt;button
                        className=&quot;carousel-control-next&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleIndicators&quot;
                        data-bs-slide=&quot;next&quot;&gt; &lt;span
                        className=&quot;carousel-control-next-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
                        &lt;/button&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="with-captions">
                  With Captions
                  <a className="anchor-link" href="#with-captions">
                    #
                  </a>
                </h5>
                <p>
                  Add captions to your slides easily with the
                  <code>.carousel-caption</code> element within any
                  <code>.carousel-item</code>. They can be easily hidden on
                  smaller viewports, as shown below, with optional display
                  utilities. We hide them initially with
                  <code>.d-none</code> and bring them back on medium-sized
                  devices with <code>.d-md-block</code>.
                </p>

                <div className="w-50 mx-auto mb-3">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="assets/images/small/img-6.jpg"
                          className="d-block w-100"
                          alt="img-6"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className="text-white">First slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            first slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-7.jpg"
                          className="d-block w-100"
                          alt="img-7"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className="text-white">Second slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            second slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-5.jpg"
                          className="d-block w-100"
                          alt="img-5"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className="text-white">Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="withCaptions">
                        &lt;!-- With Caption --&gt; &lt;div
                        id=&quot;carouselExampleCaptions&quot;
                        className=&quot;carousel slide&quot;
                        data-bs-ride=&quot;carousel&quot;&gt; &lt;div
                        className=&quot;carousel-inner&quot;&gt; &lt;div
                        className=&quot;carousel-item active&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-6.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-6&quot;&gt; &lt;div
                        className=&quot;carousel-caption d-none
                        d-md-block&quot;&gt; &lt;h5
                        className=&quot;text-white&quot;&gt;First slide
                        label&lt;/h5&gt; &lt;p&gt;Some representative
                        placeholder content for the first slide.&lt;/p&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-7.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-7&quot;&gt; &lt;div
                        className=&quot;carousel-caption d-none
                        d-md-block&quot;&gt; &lt;h5
                        className=&quot;text-white&quot;&gt;Second slide
                        label&lt;/h5&gt; &lt;p&gt;Some representative
                        placeholder content for the second slide.&lt;/p&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-5.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;img-5&quot;&gt; &lt;div
                        className=&quot;carousel-caption d-none
                        d-md-block&quot;&gt; &lt;h5
                        className=&quot;text-white&quot;&gt;Third slide
                        label&lt;/h5&gt; &lt;p&gt;Some representative
                        placeholder content for the third slide.&lt;/p&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;button
                        className=&quot;carousel-control-prev&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleCaptions&quot;
                        data-bs-slide=&quot;prev&quot;&gt; &lt;span
                        className=&quot;carousel-control-prev-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
                        &lt;/button&gt; &lt;button
                        className=&quot;carousel-control-next&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleCaptions&quot;
                        data-bs-slide=&quot;next&quot;&gt; &lt;span
                        className=&quot;carousel-control-next-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
                        &lt;/button&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="crossfade">
                  Crossfade{" "}
                  <a className="anchor-link" href="#crossfade">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Add <code>.carousel-fade</code> to your carousel to animate
                  slides with a fade transition instead of a slide. Depending on
                  your carousel content (e.g., text only slides), you may want
                  to add <code>.bg-body</code> or some custom CSS to the
                  <code>.carousel-item</code>s for proper crossfading.
                </p>

                <div className="w-50 mx-auto mb-3">
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="assets/images/small/img-1.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-2.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-3.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="withCaptions">
                        &lt;!-- Crossfade --&gt; &lt;div
                        id=&quot;carouselExampleFade&quot;
                        className=&quot;carousel slide carousel-fade&quot;
                        data-bs-ride=&quot;carousel&quot;&gt; &lt;div
                        className=&quot;carousel-inner&quot;&gt; &lt;div
                        className=&quot;carousel-item active&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-1.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-2.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-3.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;button className=&quot;carousel-control-prev&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleFade&quot;
                        data-bs-slide=&quot;prev&quot;&gt; &lt;span
                        className=&quot;carousel-control-prev-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
                        &lt;/button&gt; &lt;button
                        className=&quot;carousel-control-next&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleFade&quot;
                        data-bs-slide=&quot;next&quot;&gt; &lt;span
                        className=&quot;carousel-control-next-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
                        &lt;/button&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title mb-1 anchor"
                  id="individual-carousel-item-interval"
                >
                  Individual <code> .carousel-item </code> interval
                  <a
                    className="anchor-link"
                    href="#individual-carousel-item-interval"
                  >
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Add <code>data-bs-interval=""</code> to a
                  <code>.carousel-item</code> to change the amount of time to
                  delay between automatically cycling to the next item.
                </p>

                <div className="w-50 mx-auto mb-3">
                  <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-bs-interval="10000"
                      >
                        <img
                          src="assets/images/small/img-1.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img
                          src="assets/images/small/img-2.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-3.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleInterval"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleInterval"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="withCaptions">
                        &lt;!-- Individual carousel-item interval --&gt; &lt;div
                        id=&quot;carouselExampleInterval&quot;
                        className=&quot;carousel slide&quot;
                        data-bs-ride=&quot;carousel&quot;&gt; &lt;div
                        className=&quot;carousel-inner&quot;&gt; &lt;div
                        className=&quot;carousel-item active&quot;
                        data-bs-interval=&quot;10000&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-1.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;
                        data-bs-interval=&quot;2000&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-2.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-3.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;button className=&quot;carousel-control-prev&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleInterval&quot;
                        data-bs-slide=&quot;prev&quot;&gt; &lt;span
                        className=&quot;carousel-control-prev-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
                        &lt;/button&gt; &lt;button
                        className=&quot;carousel-control-next&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleInterval&quot;
                        data-bs-slide=&quot;next&quot;&gt; &lt;span
                        className=&quot;carousel-control-next-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
                        &lt;/button&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title mb-1 anchor"
                  id="disable-touch-swiping"
                >
                  Disable touch swiping <code> .carousel-item </code> interval
                  <a className="anchor-link" href="#disable-touch-swiping">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Carousels support swiping left/right on touchscreen devices to
                  move between slides. This can be disabled using the
                  <code>data-bs-touch</code> attribute. The example below also
                  does not include the <code>data-bs-ride</code> attribute so it
                  doesn’t autoplay.
                </p>

                <div className="w-50 mx-auto mb-3">
                  <div
                    id="carouselExampleControlsNoTouching"
                    className="carousel slide"
                    data-bs-touch="false"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="assets/images/small/img-4.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-5.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-6.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControlsNoTouching"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControlsNoTouching"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="withCaptions">
                        &lt;div id=&quot;carouselExampleControlsNoTouching&quot;
                        className=&quot;carousel slide&quot;
                        data-bs-touch=&quot;false&quot;&gt; &lt;div
                        className=&quot;carousel-inner&quot;&gt; &lt;div
                        className=&quot;carousel-item active&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-4.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-5.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-6.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;button className=&quot;carousel-control-prev&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleControlsNoTouching&quot;
                        data-bs-slide=&quot;prev&quot;&gt; &lt;span
                        className=&quot;carousel-control-prev-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
                        &lt;/button&gt; &lt;button
                        className=&quot;carousel-control-next&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleControlsNoTouching&quot;
                        data-bs-slide=&quot;next&quot;&gt; &lt;span
                        className=&quot;carousel-control-next-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
                        &lt;/button&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="dark-variant">
                  Dark Variant <code> .carousel-item </code> interval
                  <a className="anchor-link" href="#dark-variant">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Add <code>.carousel-dark</code> to the
                  <code>.carousel</code> for darker controls, indicators, and
                  captions. Controls have been inverted from their default white
                  fill with the <code>filter</code> CSS property. Captions and
                  controls have additional Sass variables that customize the{" "}
                  <code>color</code> and
                  <code>background-color</code>.
                </p>

                <div className="w-50 mx-auto mb-3">
                  <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-bs-interval="10000"
                      >
                        <img
                          src="assets/images/small/img-8.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            first slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img
                          src="assets/images/small/img-9.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            second slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="assets/images/small/img-10.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="withCaptions">
                        &lt;!-- Dark Variant --&gt; &lt;div
                        id=&quot;carouselExampleDark&quot;
                        className=&quot;carousel carousel-dark slide&quot;
                        data-bs-ride=&quot;carousel&quot;&gt; &lt;div
                        className=&quot;carousel-indicators&quot;&gt; &lt;button
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleDark&quot;
                        data-bs-slide-to=&quot;0&quot;
                        className=&quot;active&quot;
                        aria-current=&quot;true&quot; aria-label=&quot;Slide
                        1&quot;&gt;&lt;/button&gt; &lt;button
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleDark&quot;
                        data-bs-slide-to=&quot;1&quot; aria-label=&quot;Slide
                        2&quot;&gt;&lt;/button&gt; &lt;button
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleDark&quot;
                        data-bs-slide-to=&quot;2&quot; aria-label=&quot;Slide
                        3&quot;&gt;&lt;/button&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-inner&quot;&gt; &lt;div
                        className=&quot;carousel-item active&quot;
                        data-bs-interval=&quot;10000&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-8.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;div
                        className=&quot;carousel-caption d-none
                        d-md-block&quot;&gt; &lt;h5&gt;First slide
                        label&lt;/h5&gt; &lt;p&gt;Some representative
                        placeholder content for the first slide.&lt;/p&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;
                        data-bs-interval=&quot;2000&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-9.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;div
                        className=&quot;carousel-caption d-none
                        d-md-block&quot;&gt; &lt;h5&gt;Second slide
                        label&lt;/h5&gt; &lt;p&gt;Some representative
                        placeholder content for the second slide.&lt;/p&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;div
                        className=&quot;carousel-item&quot;&gt; &lt;img
                        src=&quot;assets/images/small/img-10.jpg&quot;
                        className=&quot;d-block w-100&quot;
                        alt=&quot;...&quot;&gt; &lt;div
                        className=&quot;carousel-caption d-none
                        d-md-block&quot;&gt; &lt;h5&gt;Third slide
                        label&lt;/h5&gt; &lt;p&gt;Some representative
                        placeholder content for the third slide.&lt;/p&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;button
                        className=&quot;carousel-control-prev&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleDark&quot;
                        data-bs-slide=&quot;prev&quot;&gt; &lt;span
                        className=&quot;carousel-control-prev-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Previous&lt;/span&gt;
                        &lt;/button&gt; &lt;button
                        className=&quot;carousel-control-next&quot;
                        type=&quot;button&quot;
                        data-bs-target=&quot;#carouselExampleDark&quot;
                        data-bs-slide=&quot;next&quot;&gt; &lt;span
                        className=&quot;carousel-control-next-icon&quot;
                        aria-hidden=&quot;true&quot;&gt;&lt;/span&gt; &lt;span
                        className=&quot;visually-hidden&quot;&gt;Next&lt;/span&gt;
                        &lt;/button&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col-xl-3">
            <div className="card docs-nav">
              <div className="">
                <div className="">
                  <ul className="nav bg-transparent flex-column">
                    <li className="nav-item">
                      <a href="#slides-only" className="nav-link">
                        Slide Only
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#with-controls" className="nav-link">
                        With Controls
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#with-indicators" className="nav-link">
                        With Indicators
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#with-captions" className="nav-link">
                        With Captions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#crossfade" className="nav-link">
                        Crossfade
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#individual-carousel-item-interval"
                        className="nav-link"
                      >
                        Individual .carousel-item interval
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#disable-touch-swiping" className="nav-link">
                        Disable touch swiping
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#dark-variant" className="nav-link">
                        Dark Variant
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>
      <Footer />
    </div>
  );
};

export default Carousel;
