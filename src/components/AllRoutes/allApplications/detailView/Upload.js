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

export default function Upload({ detail ,val}) {
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [select, setSelect] = useState({
    newStatus: "",
    applicationId: "",
  });
  let { id } = useParams();
  console.log("checkdaata", id);
  const userDetails = useSelector((state) => state?.users?.user);
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

  return (
    <Root>
      <h4>Application : {id}</h4>
      <div className="main_box1">
      {refreshFlag ? (
      " "
    ) : (
        <div className="status1">
          <label>
            Select Document Type:
            <select
              onChange={handleDocumentTypeChange}
              value={selectedDocumentType}
            >
              <option value="">Select Document Type</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="pan">PAN Card</option>
              <option value="pass_front">Passport Front</option>
              <option value="pass_back">Passport Back</option>
              <option value="10th">10th Grade Certificate</option>
              <option value="12th">12th Grade Certificate</option>
            </select>
          </label>
          {selectedDocumentType && (
            <div>
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
     
    )}

        <div className="status2">
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
      width: 220px;
      display: flex;
      justify-content: space-between;
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
    background-color: white;
    border: thin solid blue;
    display: inline-block;
    line-height: 1.5em;
    padding: 10px;
    border-radius: 20px;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 200px;
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
`;
