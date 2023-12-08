import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_IMAGE, EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import { useParams } from "react-router-dom";

export default function UrmDetails() {
  const [getDetail, setGetDetail] = useState(null);
  let { id } = useParams();
  console.log("idddd", id);

  const urmApi = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/getbyUniversity/${id}`,
        axiosConfig
      );
      console.log("thissss", res?.data?.data);
      if (res.status === 201) {
        setGetDetail(res?.data?.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    urmApi();
  },[id]);

  return (
    <Root>
      {getDetail &&
        getDetail.map((i) => (
          <div className="main_div">
            <div className="img_child_div">
              <img
                src={`${EXCHANGE_URLS_IMAGE}/${i.university_image}`}
                alt="img"
              />
            </div>
            <div className="child11">
              <h4> {i?.university_name}</h4>
              <h6>({i?.year_established})</h6>
            </div>
            <div className="child22">
              <h6>Ambassador name - {i?.ambassador_name}</h6>
            </div>
            <div className="child22">
              <p>Email - {i?.email} </p>
            </div>
            <div>
              <p>Contact number - {i?.phone_number}</p>
            </div>
            <div>
              <p> {i?.type} University</p>
            </div>
            <div>
              <h5> Address:</h5>
              City - {i?.address.city} , Street - {i?.address.street_address},
              State - {i?.address.state} , Postal code -{" "}
              {i?.address.postal_code}
            </div>
            <div className="faqqqq">
              <h4>FAQ</h4>
              <div className="faq_child"> Question {i?.faqs[0].question}</div>
              <div className="faq_child">Answer {i?.faqs[0].answer}</div>
            </div>
            <div className="updatesss">
              <h4>What's New ?</h4>
              <div className="update_child">--{i?.updates[0].heading}</div>
              <div className="update_child">--{i?.updates[0].description}</div>
            </div>
          </div>
        ))}
    </Root>
  );
}
const Root = styled.section`
  padding-left: 90px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  h4,
  h3,
  h5,
  h6,
  p {
    margin: 0;
  }

  .main_div {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .img_child_div {
      width: 100%;
      img{
        height: 200px;
        width:200px;
      }
    }
    .child11 {
      display: flex;
      align-items: center;
      color: #000080;
    }
    .child22 {
      display: flex;
    }
    .faqqqq {
      border: 1.5px solid gray;
      border-radius: 7px;
      width: 600px;
      height: 110px;
      overflow-y: scroll;
      padding-right: 10px;
      box-sizing: content-box;
      margin: 5px;
      h4 {
        padding: 5px;
      }
      .faq_child {
        border-top: 1px solid gray;
        padding: 5px;
      }
    }
    .updatesss {
      margin: 5px;
      border: 1px solid gray;
      border-radius: 7px;
      width: 600px;
      overflow-y: scroll;
      padding-right: 10px;
      box-sizing: content-box;
      h4 {
        padding: 5px;
      }
      .update_child {
        border-top: 1px solid gray;
        padding: 5px;
      }
    }
  }
`;
