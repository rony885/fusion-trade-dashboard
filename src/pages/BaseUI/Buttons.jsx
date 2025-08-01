import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="page-content">
      <div className="container">
        {/* <!-- start button --> */}
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="default">
                  Default Buttons
                  <Link className="anchor-link" to="#default">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Use the button classes on an <code>&lt;Link&gt;</code>,
                  <code>&lt;button&gt;</code> or
                  <code>&lt;input&gt;</code> element.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-danger">
                      Danger
                    </button>
                    <button type="button" className="btn btn-dark">
                      Dark
                    </button>
                    <button type="button" className="btn btn-purple">
                      Purple
                    </button>
                    <button type="button" className="btn btn-pink">
                      Pink
                    </button>
                    <button type="button" className="btn btn-orange">
                      Orange
                    </button>
                    <button type="button" className="btn btn-light">
                      Light
                    </button>
                    <button type="button" className="btn btn-link">
                      Link
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
                      <code id="defaultButtons">
                        &lt;!-- Default Buttons --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Primary&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;&gt;Secondary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-success&quot;&gt;Success&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-info&quot;&gt;Info&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-warning&quot;&gt;Warning&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-danger&quot;&gt;Danger&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-dark&quot;&gt;Dark&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-purple&quot;&gt;Purple&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-pink&quot;&gt;Pink&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-orange&quot;&gt;Orange&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Light&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-link&quot;&gt;Link&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="rounded">
                  Rounded Buttons
                  <Link className="anchor-link" to="#rounded">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Add <code>.rounded-pill</code> to default button to get
                  rounded corners.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary rounded-pill"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-success rounded-pill"
                    >
                      Success
                    </button>
                    <button type="button" className="btn btn-info rounded-pill">
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning rounded-pill"
                    >
                      Warning
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger rounded-pill"
                    >
                      Danger
                    </button>
                    <button type="button" className="btn btn-dark rounded-pill">
                      Dark
                    </button>
                    <button
                      type="button"
                      className="btn btn-purple rounded-pill"
                    >
                      Purple
                    </button>
                    <button type="button" className="btn btn-pink rounded-pill">
                      Pink
                    </button>
                    <button
                      type="button"
                      className="btn btn-orange rounded-pill"
                    >
                      Orange
                    </button>
                    <button
                      type="button"
                      className="btn btn-light rounded-pill"
                    >
                      Light
                    </button>
                    <button type="button" className="btn btn-link rounded-pill">
                      Link
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
                      <code id="roundedButtons">
                        &lt;!-- Rounded Buttons --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn btn-primary
                        rounded-pill&quot;&gt;Primary&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary
                        rounded-pill&quot;&gt;Secondary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-success rounded-pill&quot;&gt;Success&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-info rounded-pill&quot;&gt;Info&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-warning rounded-pill&quot;&gt;Warning&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-danger rounded-pill&quot;&gt;Danger&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-dark rounded-pill&quot;&gt;Dark&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-purple rounded-pill&quot;&gt;Purple&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-pink rounded-pill&quot;&gt;Pink&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-orange rounded-pill&quot;&gt;Orange&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-light rounded-pill&quot;&gt;Light&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-link rounded-pill&quot;&gt;Link&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="outline">
                  Outline Buttons
                  <Link className="anchor-link" to="#outline">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Use Link classes <code>.btn-outline-**</code> to quickly
                  create Link bordered buttons.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button type="button" className="btn btn-outline-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-outline-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-outline-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-outline-purple">
                      Purple
                    </button>
                    <button type="button" className="btn btn-outline-pink">
                      Pink
                    </button>
                    <button type="button" className="btn btn-outline-orange">
                      Orange
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
                      <code id="outlinetButtons">
                        &lt;!-- Outline Buttons --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-outline-primary&quot;&gt;Primary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-outline-secondary&quot;&gt;Secondary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-outline-success&quot;&gt;Success&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-outline-info&quot;&gt;Info&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-outline-warning&quot;&gt;Warning&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-outline-purple&quot;&gt;Purple&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-outline-pink&quot;&gt;Pink&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-outline-orange&quot;&gt;Orange&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="outline-rounded">
                  Outline Rounded Buttons
                  <Link className="anchor-link" to="#outline-rounded">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Use Link classes <code>.btn-outline-**</code> to quickly
                  create Link bordered buttons.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-pill"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success rounded-pill"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info rounded-pill"
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning rounded-pill"
                    >
                      Warning
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
                      <code id="outlineRoundedButtons">
                        &lt;!-- Outline Buttons --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-outline-primary
                        rounded-pill&quot;&gt;Primary&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-outline-secondary
                        rounded-pill&quot;&gt;Secondary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-outline-success
                        rounded-pill&quot;&gt;Success&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-outline-info
                        rounded-pill&quot;&gt;Info&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-outline-warning
                        rounded-pill&quot;&gt;Warning&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="soft">
                  Soft Buttons{" "}
                  <Link className="anchor-link" to="#soft">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Use Link classes <code>.btn-soft-**</code> to quickly create
                  buttons with soft background.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button type="button" className="btn btn-soft-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-soft-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-soft-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-soft-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-soft-warning">
                      Warning
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
                      <code id="softButtons">
                        &lt;!-- Soft Buttons --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-soft-primary&quot;&gt;Primary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-soft-secondary&quot;&gt;Secondary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-soft-success&quot;&gt;Success&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-soft-info&quot;&gt;Info&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-soft-warning&quot;&gt;Warning&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="soft-rounded">
                  Soft Rounded Buttons
                  <Link className="anchor-link" to="#soft-rounded">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Use Link classes <code>.rounded-pill**</code> with
                  <code>.btn-soft-**</code> to quickly create Link Outline Soft
                  buttons.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button
                      type="button"
                      className="btn btn-soft-primary rounded-pill"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-soft-secondary rounded-pill"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-soft-success rounded-pill"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-soft-info rounded-pill"
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-soft-warning rounded-pill"
                    >
                      Warning
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
                      <code id="softRoundedButtons">
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-soft-primary
                        rounded-pill&quot;&gt;Primary&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-soft-secondary
                        rounded-pill&quot;&gt;Secondary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-soft-success
                        rounded-pill&quot;&gt;Success&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-soft-info rounded-pill&quot;&gt;Info&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-soft-warning
                        rounded-pill&quot;&gt;Warning&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="width">
                  Button Width{" "}
                  <Link className="anchor-link" to="#width">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Create buttons with minimum width by adding add
                  <code>.width-xs</code>, <code>.width-sm</code>,
                  <code>.width-md</code>, <code>.width-lg</code> or
                  <code>.width-xl</code>.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button type="button" className="btn btn-primary width-xl">
                      Extra Large
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary width-lg"
                    >
                      Large
                    </button>
                    <button type="button" className="btn btn-success width-md">
                      Middle
                    </button>
                    <button type="button" className="btn btn-info width-sm">
                      Small
                    </button>
                    <button type="button" className="btn btn-warning width-xs">
                      Xs
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
                      <code id="buttonWidth">
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary width-xl&quot;&gt;Extra Large&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary width-lg&quot;&gt;Large&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-success width-md&quot;&gt;Middle&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-info width-sm&quot;&gt;Small&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-warning width-xs&quot;&gt;Xs&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="sizes">
                  Button Sizes{" "}
                  <Link className="anchor-link" to="#sizes">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Add <code>.btn-lg</code>, <code>.btn-sm</code> for additional
                  sizes.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button type="button" className="btn btn-primary btn-lg">
                      Large
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Normal
                    </button>
                    <button type="button" className="btn btn-success btn-sm">
                      Small
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
                      <code id="buttonSizes">
                        &lt;!-- Button Sizes --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn btn-primary
                        btn-lg&quot;&gt;Large&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;&gt;Normal&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn btn-success
                        btn-sm&quot;&gt;Small&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="disabled">
                  Disabled Button
                  <Link className="anchor-link" to="#disabled">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Add <code>disabled</code> attribute to buttons.
                </p>
                <div className="mb-3">
                  <div className="button-list">
                    <button type="button" className="btn btn-primary" disabled>
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled
                    >
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success" disabled>
                      Success
                    </button>
                    <button type="button" className="btn btn-info" disabled>
                      Info
                    </button>
                    <button type="button" className="btn btn-warning" disabled>
                      Warning
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
                      <code id="disabledButton">
                        &lt;!-- Button Disabled --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; disabled&gt;Primary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot; disabled&gt;Secondary&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-success&quot; disabled&gt;Success&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-info&quot; disabled&gt;info&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-warning&quot; disabled&gt;Warning&lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="icon">
                  Icon Button{" "}
                  <Link className="anchor-link" to="#icon">
                    #
                  </Link>
                </h5>
                <p className="text-muted">Icon only Button.</p>
                <div className="mb-3">
                  <div className="button-list">
                    <button type="button" className="btn btn-primary">
                      <i className="bx bx-heart"></i>
                    </button>
                    <button type="button" className="btn btn-secondary">
                      <i className="bx bx-user-voice"></i>
                    </button>
                    <button type="button" className="btn btn-success">
                      <i className="bx bx-check-double"></i>
                    </button>
                    <button type="button" className="btn btn-info">
                      <i className="bx bx-cloud me-1"></i>Cloude Hosting
                    </button>
                    <button type="button" className="btn btn-warning">
                      <i className="bx bx-info-circle me-1"></i>Warning
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
                      <code id="iconButton">
                        &lt;!-- Icon Button --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt; &lt;i className=&quot;bx
                        bx-heart&quot;&gt;&lt;/i&gt; &lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;&gt; &lt;i className=&quot;bx
                        bx-user-voice&quot;&gt;&lt;/i&gt; &lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-success&quot;&gt; &lt;i className=&quot;bx
                        bx-check-double&quot;&gt;&lt;/i&gt; &lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-info&quot;&gt; &lt;i className=&quot;bx bx-cloud
                        me-1&quot;&gt;&lt;/i&gt;Cloude Hosting &lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-warning&quot;&gt; &lt;i className=&quot;bx
                        bx-info-circle me-1&quot;&gt;&lt;/i&gt;Warning
                        &lt;/button&gt;
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
                <h5 className="card-title mb-1 anchor" id="group">
                  Button Group{" "}
                  <Link className="anchor-link" to="#group">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Wrap Link series of buttons with <code>.btn</code> in
                  <code>.btn-group</code>.
                </p>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      {/* <!-- btn-group horizontal --> */}
                      <div className="btn-group mb-1 me-1">
                        <button type="button" className="btn btn-light">
                          Left
                        </button>
                        <button type="button" className="btn btn-light">
                          Middle
                        </button>
                        <button type="button" className="btn btn-light">
                          Right
                        </button>
                      </div>
                      <div className="btn-group mb-1 me-1">
                        <button type="button" className="btn btn-light">
                          1
                        </button>
                        <button type="button" className="btn btn-light">
                          2
                        </button>
                        <button type="button" className="btn btn-secondary">
                          3
                        </button>
                        <button type="button" className="btn btn-light">
                          4
                        </button>
                      </div>
                      <div className="btn-group mb-1 me-1">
                        <button type="button" className="btn btn-light">
                          5
                        </button>
                        <button type="button" className="btn btn-secondary">
                          6
                        </button>
                        <button type="button" className="btn btn-light">
                          7
                        </button>
                        <button
                          id="dropdown"
                          type="button"
                          className="btn btn-light dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              Dropdown link
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Dropdown link
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* <!-- btn-group vertical --> */}
                      <div className="btn-group-vertical me-4">
                        <button type="button" className="btn btn-light">
                          Top
                        </button>
                        <button type="button" className="btn btn-light">
                          Middle
                        </button>
                        <button type="button" className="btn btn-light">
                          Bottom
                        </button>
                      </div>
                      <div className="btn-group-vertical">
                        <button type="button" className="btn btn-light">
                          Button 1
                        </button>
                        <button type="button" className="btn btn-light">
                          Button 2
                        </button>
                        <button
                          id="verticalDropdown"
                          type="button"
                          className="btn btn-light dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Button 3
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="verticalDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              Dropdown link
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Dropdown link
                            </Link>
                          </li>
                        </ul>
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
                      <code id="buttonGroup">
                        &lt;!-- btn-group horizontal --&gt; &lt;div
                        className=&quot;btn-group mb-1 me-1&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Left&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Middle&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Right&lt;/button&gt; &lt;/div&gt;
                        &lt;div className=&quot;btn-group mb-1 me-1&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;1&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;2&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;&gt;3&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;4&lt;/button&gt; &lt;/div&gt; &lt;div
                        className=&quot;btn-group mb-1 me-1&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;5&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;&gt;6&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;7&lt;/button&gt; &lt;button
                        id=&quot;dropdown&quot; type=&quot;button&quot;
                        className=&quot;btn btn-light dropdown-toggle&quot;
                        data-bs-toggle=&quot;dropdown&quot;
                        aria-expanded=&quot;false&quot;&gt; Dropdown
                        &lt;/button&gt; &lt;ul className=&quot;dropdown-menu
                        dropdown-menu-end&quot;
                        aria-labelledby=&quot;dropdown&quot;&gt;
                        &lt;li&gt;&lt;Link className=&quot;dropdown-item&quot;
                        to=&quot;#&quot;&gt;Dropdown
                        link&lt;/Link&gt;&lt;/li&gt; &lt;li&gt;&lt;Link
                        className=&quot;dropdown-item&quot;
                        to=&quot;#&quot;&gt;Dropdown
                        link&lt;/Link&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/div&gt;
                        &lt;!-- btn-group vertical --&gt; &lt;div
                        className=&quot;btn-group-vertical me-4&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Top&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Middle&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Bottom&lt;/button&gt; &lt;/div&gt;
                        &lt;div className=&quot;btn-group-vertical&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Button 1&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;&gt;Button 2&lt;/button&gt; &lt;button
                        id=&quot;verticalDropdown&quot; type=&quot;button&quot;
                        className=&quot;btn btn-light dropdown-toggle&quot;
                        data-bs-toggle=&quot;dropdown&quot;
                        aria-expanded=&quot;false&quot;&gt; Button 3
                        &lt;/button&gt; &lt;ul className=&quot;dropdown-menu
                        dropdown-menu-end&quot;
                        aria-labelledby=&quot;verticalDropdown&quot;&gt;
                        &lt;li&gt;&lt;Link className=&quot;dropdown-item&quot;
                        to=&quot;#&quot;&gt;Dropdown
                        link&lt;/Link&gt;&lt;/li&gt; &lt;li&gt;&lt;Link
                        className=&quot;dropdown-item&quot;
                        to=&quot;#&quot;&gt;Dropdown
                        link&lt;/Link&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/div&gt;
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
                <h5 className="card-title mb-1 anchor" id="block">
                  Block Button{" "}
                  <Link className="anchor-link" to="#block">
                    #
                  </Link>
                </h5>
                <p className="text-muted">
                  Create block level buttons by adding class
                  <code>.d-grid</code> to parent div.
                </p>
                <div className="mb-3">
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary btn-lg">
                      Block Button
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Block Button
                    </button>
                    <button type="button" className="btn btn-light btn-sm">
                      Block Button
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
                      <code id="blockButton">
                        &lt;!-- Block Button --&gt; &lt;div
                        className=&quot;d-grid gap-2&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn btn-primary
                        btn-lg&quot;&gt;Block Button&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;&gt;Block Button&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-light btn-sm&quot;&gt;Block Button&lt;/button&gt;
                        &lt;/div&gt;
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
                      <Link to="#default" className="nav-link">
                        Default Example
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#rounded " className="nav-link">
                        Rounded Buttons
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#outline" className="nav-link">
                        Outline Buttons
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#outline-rounded" className="nav-link">
                        Outline Rounded Buttons
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#soft" className="nav-link">
                        Soft Buttons{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#soft-rounded " className="nav-link">
                        Soft Rounded Buttons
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#width " className="nav-link">
                        Button Width{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#sizes " className="nav-link">
                        Button Sizes{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#disabled " className="nav-link">
                        Disabled Button
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#icon " className="nav-link">
                        Icon Button{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#group " className="nav-link">
                        Button Group{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#block" className="nav-link">
                        Block Button{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
        {/* <!-- end button --> */}
      </div>
      <Footer />
    </div>
  );
};

export default Buttons;
