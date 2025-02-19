import React, { useState } from "react";

const DownloadPDFButton = ({ onClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsPopupOpen(false);
    onClick();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        designation: "",
      });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsPopupOpen(true)}
        style={{
          position: "absolute",
          right: "0",
          margin: "10px 0",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        Download as PDF
      </button>

      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleOverlayClick} // Close popup and clear fields when clicking outside
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "900px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "15px",
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    E-mail Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ddd",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#0070f3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DownloadPDFButton;
