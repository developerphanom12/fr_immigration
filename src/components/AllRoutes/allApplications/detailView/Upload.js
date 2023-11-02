import React from "react";
import styled from "styled-components";
import { BsFillEyeFill } from "react-icons/bs";

export default function Upload() {
  return (
    <Root>
      <div className="main_box1">
        <div className="status1">upload images box</div>
        <div className="status2">
          <div className="view">
            <a
            // href={`${IMG_URL}/${getDetails?.documents[0]?.file_path}`}
            // target="_blank"
            // rel="noreferrer"
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
            // href={`${IMG_URL}/${getDetails?.documents[1]?.file_path}`}
            // target="_blank"
            // rel="noreferrer"
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
            // href={`${IMG_URL}/${getDetails?.documents[5]?.file_path}`}
            // target="_blank"
            // rel="noreferrer"
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
            // href={`${IMG_URL}/${getDetails?.documents[2]?.file_path}`}
            // target="_blank"
            // rel="noreferrer"
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
            // href={`${IMG_URL}/${getDetails?.documents[3]?.file_path}`}
            // target="_blank"
            // rel="noreferrer"
            >
              View Passport back{" "}
              <button>
                <BsFillEyeFill />
              </button>
            </a>
          </div>

          <div className="view">
            <a
            // href={`${IMG_URL}/${getDetails?.documents[4]?.file_path}`}
            // target="_blank"
            // rel="noreferrer"
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
          {/* {userCheck.role === "admin" ? (
          <> */}
          <select
            onChange={(e) => {
              // setSelect({
              //   ...select,
              //   newStatus: e.target.value,
              //   applicationId: getDetails.application_id,
              // });
            }}
          >
            <option value="blank">Select Status</option>
            <option value="approved">Approve</option>
            <option value="rejected">Reject</option>
          </select>

          <button
            className="btn"
            onClick={() => {
              // approveApi();
            }}
          >
            Submit
          </button>
          {/* </>
            ) : (
            ""
           )} */}
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

  .main_box1 {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
  }
  button {
    border: 2px solid #a5d8fa;
    margin-left: 10px;
    justify-content: flex-end;
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
  }
  .search1 {
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
  }
  .search2 {
    margin: 10px;
    padding: 10px;
    border-radius: 20px;

  }
  .main_box2 {
    display: flex;
    padding: 10px;

    justify-content: space-evenly;
  }
  .status3 {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  select {
    background-color: white;
    border: thin solid blue;
    display: inline-block;
    line-height: 1.5em;
    padding:10px;
    border-radius: 20px;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
   width:200px;
    background-image: linear-gradient(45deg, transparent 50%, blue 50%),
      linear-gradient(135deg, blue 50%, transparent 50%),
      linear-gradient(to right, skyblue, skyblue);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), 100% 0;
    background-size: 5px 5px, 5px 5px,40px 45px;
    background-repeat: no-repeat;

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
    width:150px;
    padding: 10px;
    border-radius: 40px;
    background-color: blue;
    color: white;
    &:hover {
      color: white;
      background-color: #ff6525;
    }
  }
`;
