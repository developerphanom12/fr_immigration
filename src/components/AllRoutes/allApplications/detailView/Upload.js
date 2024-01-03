import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImEye } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
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
  const [preImg, setPreImg] = useState("");
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

  const handleObjectUrl = (e) => {
    if (e) {
      setPreImg(URL.createObjectURL(e));
    } else {
      setPreImg("");
    }
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
    height: "30%",
    margin:"0px",
    padding: "10px",
    borderRadius: "10px",
    border: "2px dashed #555",
    color: "#444",
    cursor: "pointer",
    transition: "background .2s ease-in-out, border .2s ease-in-out",
  };

  const seses = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    color: "#444",
    transition: "background .2s ease-in-out, border .2s ease-in-out",
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
              <div className="col-lg-6">
                <div className="a1">
                  <div className="imgg" style={selectContainerStyle}>
                    click here
                    <img
                      // src="https://www.crizac.co.uk/catalog/assets/images/upload_icon.svg"
                      src={
                        preImg
                          ? preImg
                          : "https://www.crizac.co.uk/catalog/assets/images/upload_icon.svg"
                      }
                      alt="Upload"
                      className="inside_img"
                    ></img>
                    {selectedDocumentType && (
                      <input
                        type="file"
                        onChange={(e) => {
                          setSelectedFile(e.target.files[0]);
                          handleObjectUrl(e.target.files[0]);
                        }}
                      />
                    )}
                  </div>
                  <h6>Please Select Type To Upload Document Images</h6>
                  <div>
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
                    {selectedDocumentType && (
                      <div className="mt-2">
                        <button onClick={handleSubmitt}>Submit</button>
                      </div>
                    )}
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
                          <div>
                            <button
                              onClick={() => {
                                handleSubmit();
                              }}
                            >
                              {" "}
                              Submit
                            </button>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <>
            <div className="col-lg-5">
              <div className="" style={seses}>
                <div className="view">
                  <div className="docu">
                    {" "}
                    <IoDocumentTextOutline />
                  </div>
                  <a
                    href={`${IMG_URL}/${detail?.documents[0]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Aadhar{" "}
                    <button>
                      <ImEye />
                    </button>
                  </a>
                </div>
                <div className="view">
                  <div className="docu">
                    {" "}
                    <IoDocumentTextOutline />
                  </div>{" "}
                  <a
                    href={`${IMG_URL}/${detail?.documents[1]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Pancard{" "}
                    <button>
                      {" "}
                      <ImEye />
                    </button>
                  </a>
                </div>
                <div className="view">
                  <div className="docu">
                    {" "}
                    <IoDocumentTextOutline />
                  </div>{" "}
                  <a
                    href={`${IMG_URL}/${detail?.documents[5]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Intermediate{" "}
                    <button>
                      {" "}
                      <ImEye />
                    </button>
                  </a>
                </div>
                <div className="view">
                  <div className="docu">
                    {" "}
                    <IoDocumentTextOutline />
                  </div>{" "}
                  <a
                    href={`${IMG_URL}/${detail?.documents[2]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Passport Front
                    <button>
                      {" "}
                      <ImEye />
                    </button>
                  </a>
                </div>
                <div className="view">
                  <div className="docu">
                    {" "}
                    <IoDocumentTextOutline />
                  </div>
                  <a
                    href={`${IMG_URL}/${detail?.documents[3]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Passport back{" "}
                    <button>
                      <ImEye />
                    </button>
                  </a>
                </div>

                <div className="view">
                  <div className="docu">
                    {" "}
                    <IoDocumentTextOutline />
                  </div>
                  <a
                    href={`${IMG_URL}/${detail?.documents[4]?.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Matric{" "}
                    <button>
                      {" "}
                      <ImEye />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  /* height: 96%; */
  width: 100%;
  margin: 10px;
  /* padding-left: 90px; */
  box-shadow: 1px 1px 5px 1px gray;
  @media (max-width: 788px) {
    /* padding-left: 60px; */
  }
  font-family: "Roboto", "sana-serif";
  @media (max-width: 888px) {
    margin: 0;
    padding: 0;
  }
  h4 {
    margin-top: 10px;
  }
  .row{
    justify-content: space-around;
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

  .view {
    display: flex;
    padding: 10px;
    width: 60%;

    .docu {
      cursor: pointer;
      svg {
        color: darkgrey;
        width: 40px;
        height: 40px;
      }
    }

    a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      align-items: center;
      text-decoration: none;
      color: black;
      button {
        border: none;
        background: white;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    @media (max-width: 566px) {
      padding: 5px;
      margin: 0;
      min-height: 50px;
      width: 70%;
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

  .hloo {
    color: red;
  }
  .a1 {
    padding: 5px;
    gap: 5px;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    .imgg {
      text-align: center;
      cursor: pointer;
      margin: 12px;
      position: relative;
      &:hover {
        opacity: 0.5;
      }
      .inside_img {
        height: 30%;
        width: 30%;
        object-fit: contain;
      }
      input {
        position: absolute;
        height: 80%;
        width: 80%;
        opacity: 0;
        cursor: pointer;
      }
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 10px;
      width: 100%;
      select {
        background-color: white;
        color: black;
        text-decoration: none;
        border: 1px solid gray;
        padding: 10px;
        width: 65%;
        border-radius: 50px;
        font-size: 12px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, black 50%),
          linear-gradient(135deg, black 50%, transparent 50%),
          linear-gradient(to right, #8656ec, #c6abff);
        background-position: calc(100% - 20px) calc(1em + 2px),
          calc(100% - 15px) calc(1em + 2px), 100% 0;
        background-size: 5px 5px, 5px 5px, 40px 45px;
        background-repeat: no-repeat;
        &:hover {
          box-shadow: 4px 4px 5px darkgray;
          transition: all 0.1s ease-in-out 0s;
        }
        @media (max-width: 555px) {
          padding: 8px;
          font-size: 14px;
          background-size: 5px 5px, 5px 5px, 30px 45px;
        }
      }
      .mt-2 {
        /* text-align: center; */
        button {
          border: none;
          width: 150px;
          margin: 0;
          padding: 5px;
          border-radius: 50px;
          background-color: #8656ec;
          color: white;
          &:hover {
            box-shadow: 1px 1px 5px 1px gray;
          }
          @media (max-width: 566px) {
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    .main_box2 {
      display: flex;
      flex-direction: column;
      padding: 10px;

      @media (max-width: 566px) {
        padding: 0;
        width: 100%;
        align-items: center;
      }
      .status3 {
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 100%;
        @media (max-width: 566px) {
          padding: 0;
          flex-direction: column;
          width: 90%;
        }
        select {
          background-color: white;
          color: black;
          text-decoration: none;
          border: 1px solid gray;
          padding: 10px;
          width: 90%;
          border-radius: 50px;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, black 50%),
            linear-gradient(135deg, black 50%, transparent 50%),
            linear-gradient(to right, #8656ec, #c6abff);
          background-position: calc(100% - 20px) calc(1em + 2px),
            calc(100% - 15px) calc(1em + 2px), 100% 0;
          background-size: 5px 5px, 5px 5px, 40px 45px;
          background-repeat: no-repeat;
          &:hover {
            box-shadow: 1px 1px 5px 1px gray;
            transition: all 0.1s ease-in-out 0s;
          }
          @media (max-width: 555px) {
            padding: 8px;
            font-size: 14px;
            background-size: 5px 5px, 5px 5px, 30px 45px;
          }
        }
        > div {
          button {
            border: none;
            width: 150px;
            padding: 5px;
            border-radius: 50px;
            background-color: #8656ec;
            color: white;
            &:hover {
              box-shadow: 1px 1px 5px 1px gray;
            }
            @media (max-width: 566px) {
              width: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
  .hl1l1 {
    background-color: #e9521d;
    transition: all ease-in-out 0.3s;
    color: #fff;
    border: 1px solid #e9521d;
    border-radius: 6px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
  }

  .hliihi {
    text-align: center;
  }
  .mt-2 {
    button {
      width: 100px;
      margin: 10px;
    }
  }
`;
