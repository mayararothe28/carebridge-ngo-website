import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "" });
    setIsSuccess(false);
  };

  return (
    <main className="bg-light d-flex align-items-center justify-content-center" style={{ minHeight: "80vh", padding: "60px 20px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-white border-0 text-center pt-5 pb-0">
                <i className="bi bi-heart-pulse-fill text-accent" style={{ fontSize: "3rem" }}></i>
                <h2 className="fw-bold mt-2">{isLogin ? "Welcome Back" : "Create an Account"}</h2>
                <p className="text-muted">
                  {isLogin ? "Log in to your CareBridge account" : "Join the CareBridge community"}
                </p>
              </div>
              
              <div className="card-body p-4 p-md-5">
                {isSuccess ? (
                  <div className="text-center">
                    <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "4rem" }}></i>
                    <h3 className="fw-bold mt-3">Success!</h3>
                    <p className="text-muted">
                      {isLogin ? "You have logged in successfully." : "Your account has been created successfully."}
                    </p>
                    <Link to="/" className="btn btn-accent rounded-pill px-4 mt-3">Go to Homepage</Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    
                    {!isLogin && (
                      <div className="mb-3">
                        <label className="form-label text-muted small fw-bold">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control p-3 bg-light"
                          placeholder="Satyam Sharma"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '')}
                        />
                      </div>
                    )}
                    
                    <div className="mb-3">
                      <label className="form-label text-muted small fw-bold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control p-3 bg-light"
                        placeholder="satyam@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <label className="form-label text-muted small fw-bold mb-0">Password</label>
                        {isLogin && <a href="#" className="small text-accent text-decoration-none">Forgot password?</a>}
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control p-3 bg-light mt-2"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="6"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-accent w-100 py-3 rounded-pill fw-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : (isLogin ? "Log In" : "Sign Up")}
                    </button>
                    
                    <div className="text-center mt-4">
                      <p className="text-muted small">
                        {isLogin ? "Don't have an account?" : "Already have an account?"} 
                        <a href="#" onClick={toggleMode} className="text-accent fw-bold text-decoration-none ms-1">
                          {isLogin ? "Sign up" : "Log in"}
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
