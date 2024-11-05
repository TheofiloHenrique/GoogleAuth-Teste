import { useState } from "react";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuth from "./Components/GoogleAuth";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <GoogleOAuthProvider clientId="">
        <GoogleAuth
          setName={setName}
          setEmail={setEmail}
          setImage={setImage}
          setIsActive={setIsActive}
        />
      </GoogleOAuthProvider>

      {isActive ? (
        <div>
          <img src={image} />
          <p>Olá: {name}</p>
          <p>Email: {email}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
