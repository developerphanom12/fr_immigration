import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EXCHANGE_URLS_IMAGE, EXCHANGE_URLS_UNIVERSITY } from "../../URLS";

export default function Urm_university() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [universityData, setUniversityData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const universityApi = async () => {
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/getall/university`,
        data
      );
      console.log("resres123", res);
      if (res.status === 200) {
        setUniversityData(res?.data?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    universityApi();
  }, []);

  console.log("universityData", universityData);

  return (
    <Root>
      <h1>URM University</h1>
      <div className="first_child">
        <select>
          <option>---Select University Name---</option>
          <option>Select University Name</option>
          <option>Select University Name</option>
          <option>Select University Name</option>
        </select>

        <select>
          <option>---Select URM Name---</option>
          <option>Select URM Name</option>
          <option>Select URM Name</option>
          <option>Select URM Name</option>
        </select>

        <button>
          <AiOutlineSearch /> Filter
        </button>
      </div>

      <div className="second_child">
        {universityData &&
          universityData?.map((i) => {
            return (
              <div className="card">
                <div className="card_top">
                  <h5>{i?.university_name}</h5>
               <img src= {`${EXCHANGE_URLS_IMAGE }/${i.university_image}`} alt="img"/>
                </div>

                <div>
                  <p>Name</p>
                  <p>{i?.person_name}</p>
                </div>
                <div>
                  <p>contact</p>
                  <p>{i?.contact_number}</p>
                </div>
              </div>
            );
          })}
      </div>
    </Root>
  );
}
const Root = styled.section`
h5,p{
  margin: 0;
  padding: 0;
  text-transform: capitalize;
}
  .first_child {
    display: flex;
    background-color: lightblue;
    width: 100%;
    padding: 30px;
    border-radius: 15px;
    justify-content: space-between;
    flex-wrap: wrap;
    select {
      width: 40%;
      border-radius: 20px;
      padding: 10px;
    }
    button {
      background-color: blue;
      width: 80px;
      border: none;
      border-radius: 15px;
      color: white;
      &:hover {
        background-color: red;
        cursor: pointer;
      }
    }
  }

  .second_child {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px;
    .card {
      width: 250px;
      height: auto;
      padding: 10px;
      border-radius: 15px;
      border-bottom: 5px solid blue;
      .card_top{
        display: flex;
        gap: 10px;
        img{
          width: 80px;
          height: 80px;
          object-fit: cover;
        }
        button{
          height: 150px;
        }
      }
      > div {
        display: flex;
        p {
          flex: 1;
        }
      }
    }
  }
`;
