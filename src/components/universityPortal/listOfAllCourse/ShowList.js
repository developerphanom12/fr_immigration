import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import { useParams } from "react-router-dom";

export default function ShowList() {
  let { id } = useParams();
  console.log("id", id);
  const [courseDetails, setCourseDetails] = useState(null);

  const courseApi = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_UNIVERSITY}/get/${id}`,
        axiosConfig
      );
      console.log("resres123", res?.data?.data[0]);
      if (res.status === 201) {
        setCourseDetails(res?.data?.data[0]);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    courseApi();
  }, [id]);

  return (
    <Root>
     
        <h2>Course Details</h2>
        {courseDetails && (
          <div className="courses_child1">
            <div className="first-year-fee">
              <h4>First Year Fee</h4>
              <div className="fee-details">
                <p>Tuition Fee : </p> <p>{courseDetails?.tuition_fee}</p>
              </div>
            </div>
            <div className="courses_child3">
              <h5>Course : </h5> <h5>{courseDetails?.course_name}</h5>
              <div className="childdd">
                <div className="mini">
                  {" "}
                  <p>Department : </p> <p>{courseDetails?.department}</p>
                </div>
                <div className="mini">
                  {" "}
                  <p>Subject : </p> <p>{courseDetails?.subject}</p>
                </div>
                <div className="mini">
                  <p>Tuition Fee : </p> <p>{courseDetails?.tuition_fee}</p>
                </div>
                <div className="mini">
                  <p>Duration : </p>{" "}
                  <p>{courseDetails?.duration_years} Years</p>
                </div>
                <div className="mini">
                  {" "}
                  <p>Course Type : </p> <p>{courseDetails.course_type}</p>
                </div>
                <div className="mini">
                  <p>Hostel & Meals : </p>{" "}
                  <p>{courseDetails?.tution?.hostel_meals} Years</p>
                </div>
                <div className="mini">
                  {" "}
                  <p> Tuition Fees : </p>{" "}
                  <p>{courseDetails?.tution?.tuition_fees}</p>
                </div>
                <div className="mini">
                  <p> Transportaion : </p>{" "}
                  <p>{courseDetails?.tution?.transportation} Years</p>
                </div>
                <div className="mini">
                  {" "}
                  <p> Phone/Internet : </p>{" "}
                  <p>{courseDetails?.tution?.phone_internet}</p>
                </div>
                <div className="mini">
                  <p> Total : </p> <p>{courseDetails?.tution?.total} Years</p>
                </div>
                <div className="mini">
                  {" "}
                  <p> Requirements : </p> <p>{courseDetails.requirements}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 80px;
  margin:0px 20px;
  @media (max-width: 788px) {
    padding-left: 60px;
  }
  h2 {
    margin: 15px;
  }

  .courses_child1 {
    display: flex;
    width: 50%;
    min-width: 70vw;
    flex-direction: column;
    justify-content: space-between;
  }

  .first-year-fee {
    border: 1px solid gray;
    padding: 10px;
    border-radius: 5px;
    margin: 15px;


    h4 {
      color: #6495ed;
      text-align: center;
      text-transform: capitalize;
    }

    .fee-details {
      display: flex;
      justify-content: space-between;
      border: 1px solid gray;

      p {
        display: flex;
        margin: 0;
      }
    }
  }

  .courses_child3 {
    border: 1px solid gray;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    margin: 15px;

.childdd{
    .mini{
        display: flex;
    border: 1px solid gray;
    justify-content: space-between;

    }
}
    h5 {
      color: #6495ed;
      text-align: center;
      text-transform: capitalize;
    }
  }
`;
