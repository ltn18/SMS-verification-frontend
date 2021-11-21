import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [accessCode, setAccessCode] = useState();
  const [validPhone, setValidPhone] = useState(false);
  const [validCode, setValidCode] = useState(false);
  const [errorPhone, setErrorPhone] = useState("You must type in Phone Number");
  const [errorCode, setErrorCode] = useState("You must type in Access Code");
  const [verified, setVerified] = useState(false);

  const handleSubmitPhoneNumber = async () => {
    if (validPhoneNumber(phoneNumber)) {
      setValidPhone(true);
      await axios
        .post(`http://localhost:8080/api/user`, {
          phoneNumber: phoneNumber,
        })
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else setValidPhone(false);
  };

  const handleSubmitAccessCode = async () => {
    if (validAccessCode(accessCode)) {
      setValidCode(true);
      await axios
        .post(`http://localhost:8080/api/user/${phoneNumber}`, {
          phoneNumber: phoneNumber,
          accessCode: accessCode,
        })
        .then((res) => {
          if (res.data === "Verified") setVerified(true);
          else setVerified(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else setValidCode(false);
  };

  const handleSendNewCode = async () => {
    if (validPhoneNumber(phoneNumber)) {
      setValidPhone(true);
      await axios
        .post(`http://localhost:8080/api/user/${phoneNumber}/newCode`, {
          phoneNumber: phoneNumber,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else setValidPhone(false);
  };

  // @desc: checking if a phone number is a valid.
  //        We may assume that the phone number has 10
  //        10 digits since we need to send a valid text
  //        for testing using twilio.
  // @param: s - a string representing phone number
  // @return: true if s is a valid phone number; otherwise false
  const validPhoneNumber = (s) => {
    if (s === undefined) {
      setErrorPhone("You must type in Phone Number");
      return false;
    }

    if (s.length !== 10) {
      setErrorPhone("Phone Number must be 10 digits");
      return false;
    }

    for (let i = 0; i < s.length; i++) {
      if (!(s[i] >= "0" && s[i] <= "9")) {
        setErrorPhone("Phone Number can only contain characters from 0 to 9");
        return false;
      }
    }

    setErrorPhone("");
    return true;
  };

  // @desc: checking if an access code is valid.
  //        We may assume that all 6 digits range
  //        from 0 to 9.
  // @param: s - a string representing access code
  // @return: true if s is a valid access code; otherwise false
  const validAccessCode = (s) => {
    if (s === undefined) {
      setErrorCode("You must type in Access Code");
      return false;
    }

    if (s.length !== 6) {
      setErrorCode("Access Code must be 6 digits");
      return false;
    }

    for (let i = 0; i < s.length; i++) {
      if (!(s[i] >= "0" && s[i] <= "9")) {
        setErrorPhone("Access Code can only contain characters from 0 to 9");
        return false;
      }
    }

    setErrorCode("");
    return true;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <h1>Input Form</h1>
      <div>
        <span style={{ marginRight: 10, fontWeight: "bold" }}>
          Phone Number
        </span>
        <input
          type="text"
          value={phoneNumber}
          style={{ height: 20, width: 200 }}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div
          style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
        >
          <button
            style={{ height: 25, width: 200 }}
            onClick={handleSubmitPhoneNumber}
          >
            Send Access Code via Text
          </button>
          <div style={{ marginTop: 10 }}>
            {validPhone ? (
              <span style={{ marginLeft: 10, color: "green" }}></span>
            ) : (
              <span style={{ marginLeft: 10, color: "red" }}>
                Error: {errorPhone}
              </span>
            )}
          </div>

          <button
            style={{ height: 25, width: 200, marginTop: 10 }}
            onClick={handleSendNewCode}
          >
            Send New Code
          </button>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <span style={{ marginRight: 10, fontWeight: "bold" }}>Access Code</span>
        <input
          type="password"
          value={accessCode}
          style={{ height: 20, width: 200 }}
          onChange={(e) => setAccessCode(e.target.value)}
        />
        <div
          style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
        >
          <button
            style={{ height: 25, width: 200 }}
            onClick={handleSubmitAccessCode}
          >
            Submit Access Code
          </button>
          <div style={{ marginTop: 10 }}>
            {validCode ? (
              <span style={{ marginLeft: 10, color: "green" }}></span>
            ) : (
              <span style={{ marginLeft: 10, color: "red" }}>
                Error: {errorCode}
              </span>
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        {verified ? (
          <span style={{ color: "green" }}>
            Access Code Approved! Phone Number Verified!
          </span>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default App;
