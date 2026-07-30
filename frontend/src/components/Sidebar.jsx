import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/", { replace: true });

  };

  const styles = {

    sidebar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "260px",
      height: "100vh",
      background: "#111827",
      color: "#fff",
      padding: "25px 20px",
      boxShadow: "4px 0 15px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },

    logo: {
      fontSize: "26px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "40px"
    },

    menu: {
      listStyle: "none",
      padding: 0,
      margin: 0
    },

    item: {
      padding: "14px 18px",
      marginBottom: "12px",
      borderRadius: "10px",
      cursor: "pointer",
      color: "#d1d5db",
      fontSize: "16px",
      transition: "0.3s"
    },

    active: {
      background: "#4f46e5",
      color: "#fff"
    },

    logout: {
      padding: "14px 18px",
      borderRadius: "10px",
      cursor: "pointer",
      background: "#ef4444",
      color: "#fff",
      fontSize: "16px",
      textAlign: "center",
      fontWeight: "600",
      marginBottom: "60px"
    }

  };

  return (

    <div style={styles.sidebar}>

      <div>

        <div style={styles.logo}>
          Nanna IT Solutions
        </div>

        <ul style={styles.menu}>

          <li style={styles.item}>
            Dashboard
          </li>

          <li style={{ ...styles.item, ...styles.active }}>
            Students
          </li>

          <li style={styles.item}>
            Courses
          </li>

          <li style={styles.item}>
            Trainers
          </li>

          <li style={styles.item}>
            Assignments
          </li>

          <li style={styles.item}>
            Reports
          </li>

          <li style={styles.item}>
            Settings
          </li>

        </ul>

      </div>

      <div
        style={styles.logout}
        onClick={handleLogout}
      >
        Logout
      </div>

    </div>

  );

}

export default Sidebar;