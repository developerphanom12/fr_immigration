import React from "react";
import axios from "axios";
import styled from "styled-components";

function Download() {
  const handleDownloadClick = () => {
    // const axiosConfig = {
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   };
    // Replace 'http://localhost:3300' with the actual URL of your Express.js server
    const excelDownloadUrl =
      "https://api-immigration.phanomprofessionals.com/api/application/generate-exc111el";
      
    axios({
      method: "get",
      url: excelDownloadUrl,
      responseType: "blob", // Important to handle binary data (e.g., a file)
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "application_data.xlsx";
        a.click();
        console.log("response.data",response.data)
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
        // Handle any errors here
      });
  };


  return (
    <Root>
      <button onClick={handleDownloadClick}>Download</button>
    </Root>
  );
}

export default Download;
const Root = styled.section`


`
