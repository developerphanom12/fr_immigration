import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_UNIVERSITY } from "../../URLS";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { RiLock2Line } from "react-icons/ri";
import cogoToast from "cogo-toast";

export default function ShowList() {
  const [courseDetails, setCourseDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tuition, setTuition] = useState({
    hostel_meals: "",
    tuition_fees: "",
    transportation: "",
    phone_internet: "",
    total: "",
  });
  const [updatedCourseDetails, setUpdatedCourseDetails] = useState({
    course_name: "",
    department: "",
    subject: "",
    tuition_fee: "",
    duration_years: "",
    course_type: "",
  });
  const navigate = useNavigate();

  let { id } = useParams();
  console.log("id", id);

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
        setTuition(res?.data?.data[0]?.tution || {});
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const updateCourseApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const requestBody = {
        ...updatedCourseDetails,
        tution: tuition ,
      };
      console.log("tutition_id", tuition);

      const res = await axios.put(
        `${EXCHANGE_URLS_UNIVERSITY}/updatess/${courseDetails?.tution?.id}`,
        requestBody,
        axiosConfig
      );
      if (res.status === 200) {
        navigate("/unidash");
        cogoToast.success("Course Details Updated Successfully");
      }
    } catch (error) {
      cogoToast.error("Error updating course details");
      console.log("error", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDoneEditing = () => {
    setIsEditing(false);
    updateCourseApi();
  };

  useEffect(() => {
    courseApi();
  }, [id,courseDetails?.tution?.id]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/register");
  };

  return (
    <Root>
      <div className="headline">
        <h2>Course Details</h2>
        <div>
          <button onClick={isEditing ? handleDoneEditing : handleEditClick}>
            {isEditing ? "Done Editing" : "Edit"}
            <HiOutlinePencilSquare />
          </button>
        </div>
      </div>
      {courseDetails && (
        <div className="courses_block">
          <div className="courses_table">
            <div className="courses_header">
              <h5>First Year Fee</h5>
              <h5>Amount</h5>
            </div>
            <div className="courses_body">
              <div className="mini">
                <h6>Tuition & Fees :</h6>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="in INR"
                    value={updatedCourseDetails.tuition_fee}
                    onChange={(e) =>
                      setUpdatedCourseDetails({
                        ...updatedCourseDetails,
                        tuition_fee: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>INR {courseDetails?.tuition_fee}</p>
                )}
              </div>
            </div>
          </div>
          <div className="courses_table">
            <div className="courses_header">
              <h5>Course </h5>
              {isEditing ? (
                <input
                  type="text"
                  value={updatedCourseDetails.course_name}
                  onChange={(e) =>
                    setUpdatedCourseDetails({
                      ...updatedCourseDetails,
                      course_name: e.target.value,
                    })
                  }
                />
              ) : (
                <h5> {courseDetails?.course_name}</h5>
              )}
            </div>
            <div className="courses_body">
              <div className="mini">
                {" "}
                <h6>Department : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={updatedCourseDetails.department}
                    onChange={(e) =>
                      setUpdatedCourseDetails({
                        ...updatedCourseDetails,
                        department: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{courseDetails?.department}</p>
                )}
              </div>
              <div className="mini">
                {" "}
                <h6>Subject : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={updatedCourseDetails.subject}
                    onChange={(e) =>
                      setUpdatedCourseDetails({
                        ...updatedCourseDetails,
                        subject: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{courseDetails?.subject}</p>
                )}
              </div>
              <div className="mini">
                <h6>Tuition Fee : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={updatedCourseDetails.tuition_fee}
                    onChange={(e) =>
                      setUpdatedCourseDetails({
                        ...updatedCourseDetails,
                        tuition_fee: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>INR {courseDetails?.tuition_fee}</p>
                )}
              </div>
              <div className="mini">
                <h6>Duration : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={updatedCourseDetails.duration_years}
                    onChange={(e) =>
                      setUpdatedCourseDetails({
                        ...updatedCourseDetails,
                        duration_years: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{courseDetails?.duration_years} Years</p>
                )}
              </div>
              <div className="mini">
                {" "}
                <h6>Course Type : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="graduation/postgraduatuion/phd/diploma"
                    value={updatedCourseDetails.course_type}
                    onChange={(e) =>
                      setUpdatedCourseDetails({
                        ...updatedCourseDetails,
                        course_type: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{courseDetails.course_type}</p>
                )}
              </div>
            </div>
          </div>
          <div className="courses_table">
            <h6>Other Charges</h6>
            <div className="courses_body">
              <div className="mini">
                <h6>Hostel & Meals : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="in INR"
                    value={tuition?.hostel_meals}
                    onChange={(e) => {
                      setTuition({
                        ...tuition,
                        hostel_meals: e.target.value,
                      });
                    }}
                  />
                ) : (
                  <p>INR {courseDetails?.tution?.hostel_meals}</p>
                )}
              </div>
              <div className="mini">
                {" "}
                <h6> Tuition Fees : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={tuition?.tuition_fees}
                    onChange={(e) => {
                      setTuition({
                        ...tuition,
                        tuition_fees: e.target.value,
                      });
                    }}
                  />
                ) : (
                  <p>INR {courseDetails?.tution?.tuition_fees}</p>
                )}
              </div>
              <div className="mini">
                <h6> Transportaion : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={tuition?.transportation}
                    onChange={(e) => {
                      setTuition({
                        ...tuition,
                        transportation: e.target.value,
                      });
                    }}
                  />
                ) : (
                <p>INR {courseDetails?.tution?.transportation}</p>)}
              </div>
              <div className="mini">
                {" "}
                <h6> Phone/Internet : </h6>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={tuition?.phone_internet}
                    onChange={(e) => {
                      setTuition({
                        ...tuition,
                        phone_internet: e.target.value,
                      });
                    }}
                  />
                ) : (
                <p>INR {courseDetails?.tution?.phone_internet}</p>)}
              </div>
              <div className="mini">
                <h6> Total : </h6> 
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="in INR"
                    value={tuition?.total}
                    onChange={(e) => {
                      setTuition({
                        ...tuition,
                        total: e.target.value,
                      });
                    }}
                  />
                ) : (
                <p>INR {courseDetails?.tution?.total}</p>)}
              </div>
            </div>
          </div>

          <div className="require_table">
            <h6>Entry Requirements</h6>
            <div className="require_header">
              <div>
                <h5>Qualification</h5>
              </div>
              <div>
                <h5>Entry Criteria</h5>
              </div>
            </div>
            <div className="main_main">
              <div className="Main_require_body">
                {courseDetails.entry_requirements &&
                  courseDetails.entry_requirements.map((entry, index) => (
                    <div key={index} className="require_body">
                      <div className="require_mini">
                        <p>
                          <ul>
                            <li>{entry.requirement}</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="require_body2">
                <div>
                  <div className="svgg">
                    <RiLock2Line />
                  </div>

                  <button onClick={handleLogout}>SignUp To View Details</button>
                </div>
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
  margin-left: 20px;
  background-color: #d3d3d34f;

  @media (max-width: 788px) {
    padding-left: 60px;
    width: 80%;
  }
  .headline {
    display: flex;
    align-items: center;
    h2 {
      margin: 15px;
    }
    button {
      border: none;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }

  .courses_block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    @media (max-width: 787px) {
      width: 80%;
    }
    .courses_table {
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      padding: 20px;
      margin: 5px;
      .courses_header {
        display: flex;
        background-color: dodgerblue;
        color: white;
        padding: 5px;
        h5 {
          margin: 0;
          width: 50%;
          padding: 5px;
        }
      }
      .courses_body {
        display: flex;
        flex-direction: column;
        border: 0.1px solid dodgerblue;

        .mini {
          display: flex;
          border-top: 0.1px solid dodgerblue;
          border: 0.1px solid dodgerblue;

          p {
            display: flex;
            padding: 10px;
            margin: 0;
            width: 100%;
          }
          h6 {
            padding: 10px;
            margin: 0;
            border-right: 0.5px solid dodgerblue;
            width: 200px;
          }
        }
      }
    }
    .require_table {
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      padding: 20px;
      margin: 5px;
      .require_header {
        display: flex;
        background-color: dodgerblue;
        color: white;
        padding: 5px;
        > div {
          width: 50%;
        }
      }
      .main_main {
        display: flex;
        border: 0.1px solid dodgerblue;
        .Main_require_body {
          display: flex;
          flex-direction: column;
          border: 0.1px solid dodgerblue;

          .require_body {
            display: flex;
            width: 100%;
            flex-direction: column;

            p {
              margin: 0;
            }
          }
        }

        .require_body2 {
          border: 0.1px solid dodgerblue;
          width: 100%;
          padding: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .svgg {
              padding: 5px;
              border: 2px solid gray;
              border-radius: 50px;
              svg {
                color: gray;
                width: 25px;
                height: 25px;
              }
            }
            button {
              background-color: #0f7abc;
              border: none;
              color: #ffffff;
              border-radius: 5px;
              padding: 5px;
            }
          }
        }
      }
    }
  }
`;
