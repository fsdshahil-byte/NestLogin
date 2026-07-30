import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    // Save token if your backend returns one
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    alert(response.data.message);
    navigate("/dashboard");

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};
  const styles = {
    page: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#4f46e5,#7c3aed,#2563eb)",
      fontFamily: "Segoe UI, sans-serif",
    },

    card: {
      width: "400px",
      background: "#fff",
      borderRadius: "18px",
      padding: "40px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    },

    logo: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      background: "#4f46e5",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "28px",
      fontWeight: "bold",
      margin: "0 auto 20px",
    },

    title: {
      textAlign: "center",
      fontSize: "30px",
      fontWeight: "700",
      color: "#222",
      margin: 0,
    },

    subtitle: {
      textAlign: "center",
      color: "#666",
      marginTop: "8px",
      marginBottom: "30px",
      fontSize: "15px",
    },

    label: {
      display: "block",
      marginBottom: "8px",
      color: "#444",
      fontWeight: "600",
    },

    input: {
      width: "100%",
      padding: "14px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      outline: "none",
      fontSize: "15px",
      marginBottom: "20px",
      boxSizing: "border-box",
      background: "#fafafa",
      color: "#000",
    },

    button: {
      width: "100%",
      padding: "14px",
      background: hover ? "#4338ca" : "#4f46e5",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      transition: "0.3s",
    },

    footer: {
      marginTop: "20px",
      textAlign: "center",
      color: "#777",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>🎓</div>

        <h1 style={styles.title}>Welcome Back</h1>

        <p style={styles.subtitle}>
          Sign in to continue to the Student Management System
        </p>

        <form onSubmit={handleLogin}>
          <label style={styles.label}>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Login
          </button>
        </form>

        <div style={styles.footer}>
          Student Management System
        </div>
      </div>
    </div>
  );
}

export default Login;