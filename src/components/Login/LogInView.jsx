import React from "react";

const LoginView = ({ onSubmit }) => {
  return (
    <div className="container">
      <div className="row jumbotron">
        <div className="login-form col-6 col-sm-6 text-center">
          <h1>Log In</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
