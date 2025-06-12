import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("https://my-note-backend.vercel.app/auth/userInfo", {
        withCredentials: true,
      });
      setName(response.data.name);
      setEmail(response.data.email);
    };
    fetchUser();
  }, []);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body text-center">
          <div className="mb-4">
            <i
              className="bi bi-person-circle text-primary"
              style={{ fontSize: "4rem" }}
            ></i>
          </div>
          <h3 className="card-title mb-3">User Profile</h3>
          <hr />
          <div className="text-start mt-4">
            <p className="mb-2">
              <strong>Name:</strong> {name}
            </p>
            <p className="mb-0">
              <strong>Email:</strong> {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
