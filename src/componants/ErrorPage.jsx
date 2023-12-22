import React from "react";

const ErrorPage = () => {
  return (
    <section id="error">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center flex-column my-5">
          <h1>404 || Error</h1>
          <h2>or Product Not Found</h2>
          <img src="/error.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
