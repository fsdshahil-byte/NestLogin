import { FaBell } from "react-icons/fa";
import "../app.css";

function Navbar() {
  return (
    <div className="navbar">

      <input
        type="text"
        placeholder="Search students..."
      />

      <div className="right">

        <FaBell />

        <div className="profile">
          👤 Shahil
        </div>

      </div>

    </div>
  );
}

export default Navbar;