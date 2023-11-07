import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillEyeFill } from "react-icons/bs";
import {
  EXCHANGE_URLS_ADMIN,
  EXCHANGE_URLS_APPLICATION,
  IMG_URL,
} from "../../../URLS";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import cogoToast from "cogo-toast";
import { useParams } from "react-router-dom";
import { UserDetails } from "../../../../redux/users/action";

export default function Upload({ detail, val }) {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [select, setSelect] = useState({
    newStatus: "",
    applicationId: "",
  });
  let { id } = useParams();
  console.log("checkdaata", id);
  // const userDetails = useSelector((state) => state?.users?.user);
  const getDetails = useSelector((state) => state?.users?.appDetails);
  const userCheck = useSelector((state) => state?.users?.user);
  const dispatch = useDispatch();
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleDocumentTypeChange = (e) => {
    setSelectedDocumentType(e.target.value);
    setSelectedFile();
  };
  const submitDoc = async () => {
    if (!selectedDocumentType) {
      cogoToast.error("Please select a document type");
      return;
    }

    if (!selectedFile) {
      cogoToast.error("Please select a file to upload");
      return;
    }

    const data = new FormData();
    data.append(selectedDocumentType, selectedFile);

    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const res = await axios.put(
        `${EXCHANGE_URLS_APPLICATION}/update/documents/${id}`,
        data,
        axiosConfig
      );
      console.log(`Updated ${selectedDocumentType}`, res);
      cogoToast.success(`${selectedDocumentType} Submitted Successfully`);
      setRefreshFlag(!refreshFlag);
      val(true);
    } catch (error) {
      // cogoToast.error("Error");
      console.log("error", error);
    }
  };

  const handleSubmitt = () => {
    submitDoc();
  };

  const approveApi = async () => {
    if (select.newStatus === "blank" || select.newStatus === "") {
      cogoToast.warn("Please select status");
    } else {
      try {
        const axiosConfig = {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const res = await axios.post(
          `${EXCHANGE_URLS_ADMIN}/statusupdate`,
          select,
          axiosConfig
        );
        cogoToast.success("Status Submitted");
        console.log("res", res?.data?.data?.appDetails);
        if (res?.status === 200) {
          dispatch(UserDetails(res?.data?.data?.appDetails));
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const handleSubmit = () => {
    approveApi();
  };

  useEffect(() => {
    setRefreshFlag(false);
  }, []);

  const selectContainerStyle = {
    position: "relative",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "288px",
    padding: "20px",
    borderRadius: "10px",
    border: "2px dashed #555",
    color: "#444",
    cursor: "pointer",
    transition: "background .2s ease-in-out, border .2s ease-in-out",
  };

  const seses = {
    position: "relative",
    display: "flex",
    // gap: '10px',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "288",
    padding: "20px",
    borderRadius: "10px",
    border: "2px dashed #555",
    color: "#444",
    cursor: "pointer",
    transition: "background .2s ease-in-out, border .2s ease-in-out",
  };

  const selectTitleStyle = {
    color: "#444",
    marginbottom: "14px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    transition: "color .2s ease-in-out",
  };

  return (
    <Root>
      <div className="container">
        <div className="row">
          <h4>Application : {id}</h4>

          {refreshFlag ? (
            " "
          ) : (
            <>
              {/* <h3 className="mt-3">Update Document</h3> */}
              <div className="col-lg-6" style={selectContainerStyle}>
                <div className="">
                  <div className="imgg">
                    <img
                      src="https://www.crizac.co.uk/catalog/assets/images/upload_icon.svg"
                      className=""
                      class="img-fluid"
                      alt="Upload"
                      title="Upload Documents"
                    ></img>
                  </div>
                  <h5>Please Upload only COLOR SCAN COPY</h5>
                  <label style={selectTitleStyle}>
                    <select
                      onChange={handleDocumentTypeChange}
                      value={selectedDocumentType}
                    >
                      <option className="hliihi" value="">
                        Select Document Type{" "}
                      </option>
                      <option value="aadhar">Aadhar Card</option>
                      <option value="pan">PAN Card</option>
                      <option value="pass_front">Passport Front</option>
                      <option value="pass_back">Passport Back</option>
                      <option value="10th">10th Grade Certificate</option>
                      <option value="12th">12th Grade Certificate</option>
                    </select>
                  </label>
                  {selectedDocumentType && (
                    <div className="mt-2">
                      <label>
                        Upload Document:
                        <input
                          type="file"
                          onChange={(e) => {
                            setSelectedFile(e.target.files[0]);
                          }}
                        />
                      </label>
                      <button onClick={handleSubmitt}>Submit</button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          <div className="col-lg-1"></div>
          <>
            <div className="col-lg-5">
              <div className="" style={seses}>
                <div className="view">
                  <a
                    href={`${IMG_URL}/${detail?.documents[0]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Aadhar{" "}
                    <button>
                      <BsFillEyeFill />
                    </button>
                  </a>
                </div>
                <div className="view">
                  {" "}
                  <a
                    href={`${IMG_URL}/${detail?.documents[1]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Pancard{" "}
                    <button>
                      {" "}
                      <BsFillEyeFill />
                    </button>
                  </a>
                </div>
                <div className="view">
                  {" "}
                  <a
                    href={`${IMG_URL}/${detail?.documents[5]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Intermediate{" "}
                    <button>
                      {" "}
                      <BsFillEyeFill />
                    </button>
                  </a>
                </div>
                <div className="view">
                  {" "}
                  <a
                    href={`${IMG_URL}/${detail?.documents[2]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Passport Front
                    <button>
                      {" "}
                      <BsFillEyeFill />
                    </button>
                  </a>
                </div>
                <div className="view">
                  <a
                    href={`${IMG_URL}/${detail?.documents[3]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Passport back{" "}
                    <button>
                      <BsFillEyeFill />
                    </button>
                  </a>
                </div>

                <div className="view">
                  <a
                    href={`${IMG_URL}/${detail?.documents[4]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Matric{" "}
                    <button>
                      {" "}
                      <BsFillEyeFill />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
      <div className="main_box2">
        <div className="status3">
          {userCheck.role === "admin" ? (
            <>
              <select
                onChange={(e) => {
                  setSelect({
                    ...select,
                    newStatus: e.target.value,
                    applicationId: getDetails.application_id,
                  });
                }}
              >
                <option value="blank">Select Status</option>
                <option value="approved">Approve</option>
                <option value="rejected">Reject</option>
              </select>

              <button
                className="btn"
                onClick={() => {
                  handleSubmit();
                }}
              >
                {" "}
                Submit
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  height: 100%;
  width: 100%;
  margin: 10px;
  padding: 10px;
  font-family: "Mulish", "sana-serif";
  @media (max-width: 888px) {
    margin: 0;
    padding: 0;
  }

  .main_box1 {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    @media (max-width: 566px) {
      padding: 0;
      flex-direction: column;
      width: 150px;
    }
  }
  button {
    border: 2px solid #a5d8fa;
    margin-left: 10px;
    justify-content: flex-end;
    @media (max-width: 766px) {
      margin: 0;
      height: 30px;
    }
  }
  .view {
    display: flex;
    gap: 10px;
    margin: 5px;
    padding: 10px;
    width: 250px;
    a {
      width: 181px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      text-decoration: none;
    }
    @media (max-width: 566px) {
      padding: 5px;
      margin: 0;
      min-height: 100px;
      width: 130px;
      a {
        min-width: 120px;
        width: 100%;
        min-height: 50px;
        height: 100%;
      }
    }
  }
  .status1 {
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    @media (max-width: 666px) {
      padding: 5px;
      margin: 5px;
    }
  }
  .status2 {
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    @media (max-width: 666px) {
      padding: 5px;
      width: 150px;
      margin: 5px;
    }
  }
  .main_box2 {
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
    @media (max-width: 566px) {
      padding: 0;
      flex-direction: column;
      width: 150px;
    }
  }
  .status3 {
    display: flex;
    justify-content: center;
    gap: 30px;
    @media (max-width: 566px) {
      padding: 0;
      flex-direction: column;
      width: 150px;
    }
  }

  select {
    margin-bottom: 44px;
    background-color: white;
    color: black;
    line-height: 1.5em;
    padding: 8px;
    border-radius: 20px;
    margin: 13px;
    margin-left: 33px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 240px;
    background-image: linear-gradient(45deg, transparent 50%, blue 50%),
      linear-gradient(135deg, blue 50%, transparent 50%),
      linear-gradient(to right, skyblue, skyblue);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), 100% 0;
    background-size: 5px 5px, 5px 5px, 40px 45px;
    background-repeat: no-repeat;
    @media (max-width: 555px) {
      padding: 3px;
      width: 120px;
      background-size: 5px 5px, 5px 5px, 30px 35px;
      align-items: center;
    }

    select:focus {
      background-image: linear-gradient(45deg, white 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, white 50%),
        linear-gradient(to right, gray, gray);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
      background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
      background-repeat: no-repeat;
      border-color: grey;
      outline: 0;
    }
  }

  .btn {
    border: none;
    width: 150px;
    padding: 10px;
    border-radius: 40px;
    background-color: blue;
    color: white;
    &:hover {
      color: white;
      background-color: #ff6525;
    }
    @media (max-width: 566px) {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  //  .select{
  //   color:red;
  //   background-color: #ff6525;
  //   border: 2px dotted #000; / 2px wide dotted border in black (#000) /
  //   color: rgba(0, 0, 0, 0.3); / Faint black color /
  //   width:100%;
  //   height: 340px;
  //  }

  .hloo {
    color: red;
  }
  .imgg {
    text-align: center;
    margin-bottom: 32px;
    margin-right: 36px;
  }
  .hl1l1 {
    padding: 8px 14px;
    background-color: #e9521d;
    transition: all ease-in-out 0.3s;
    color: #fff;
    border: 1px solid #e9521d;
    border-radius: 6px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
  }
  .view {
    display: flex;
    gap: 90px;
  }
  .hliihi {
    text-align: center;
  }
`;
