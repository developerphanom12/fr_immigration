import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Applications() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    userID: "",
    universityID: "",
  });
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/documents");
  };
  return (
    <Root>
      <div className="first_div">
        <div>
          <h2>Fill your form to join our network</h2>
        </div>
        <div className="first_box1">
          <div>
            <h3>Your personal Details :-</h3>
          </div>
          <div>
            <div className="name">
              {" "}
              First Name* :-
              <input
                type="name"
                value={data.firstname}
                onChange={(e) => {
                  setData({ ...data, firstname: e.target.value });
                }}
                placeholder="First Name"
              />
            </div>
            <div className="name">
              Last Name* :-
              <input
                type="name"
                value={data.lastname}
                onChange={(e) => {
                  setData({ ...data, lastname: e.target.value });
                }}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="name">
            E-Mail* :-
            <input
              type="email"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              placeholder="Ex-Phanom@gmail.com"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="btnn"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit 
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
h3 {
  color: #0E4D92;
  margin: 0;
}

.name {
  display: flex;
  flex-direction: column;
  font-size: larger;
  width: 100%;
  margin-right: 10px;
  padding:20px;
  gap: 10px;
  color:rgb(249, 118, 17);

}

.first_div {
    font-family: Georgia, serif;
    flex-wrap:wrap;
  h2 {
    color: #0E4D92;
    padding: 10px;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  .first_box1 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0px 10px;
    > div {
      display: flex;
      flex: 1;
      padding: 10px;
      gap: 5px;
    }
  }
}
.btnn{
  padding:20px;
  border-radius:30px;
  font-size:medium;
  border-color:transparent;
  color:#ffffff;
  background:rgb(255 94 0);
  margin:20px;              
}
.btnn:hover{
  color:#F0F8FF;
  background:blue;
  cursor:pointer;
}
`
