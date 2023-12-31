import React from "react";
import styled from "styled-components";
export default function AppHistory({ detail }) {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  return (
    <Root>
      <div className="app_table">
        <div className="app_header">
          <div>Date</div>
          <div>Comments</div>
          <div>Comment By</div>
        </div>
        {detail?.comments && detail?.comments.length > 0 ? (
          detail?.comments
            .filter((comment, index, self) => {
              return (
                index ===
                self.findIndex((c) => c.created_at === comment.created_at)
              );
            })
            .map((comment) => (
              <div className="app_body" key={comment.created_at}>
                <div>{formatDate(comment.created_at)}</div>
                <div>{comment.comment_text}</div>
                <div>
                  {comment.role === "admin"
                    ? "admin"
                    : comment.username && comment.role === "staff"
                    ? "Staff"
                    : comment.username}
                </div>
              </div>
            ))
        ) : (
          <div className="no-comment-msg">
            <h5>
              <i>No comments...</i>
            </h5>
          </div>
        )}
      </div>
    </Root>
  );
}
const Root = styled.section`
  /* display: flex; */
  font-family: "Roboto", sans-serif;
    @media (max-width:788px){
      padding-left: 10px;
    }
  .app_table {
    display: flex;
    flex-direction: column;
    .app_header {
      display: flex;
      background-color: #C6ABFF;
      border-bottom: 3px solid #8656EC;
      > div {
        flex: 1;
        color: white;
        border: 1px solid #dee2e6;
        padding: 10px;
      }
    }
    .app_body {
      display: flex;
      font-family: "Roboto", sans-serif;
      > div {
        flex: 1;
        border: 0.3px solid #fbfbfd;
        padding: 5px;
        color: gray;
        text-transform: capitalize;
        background-color: #c6abff45;
      }
    }
  }
  .no-comment-msg {
    margin: 10px;
    padding: 10px;
    text-align: center;
  }
  @media (max-width: 578px) {
    .app_table {
      font-size: smaller;
      margin: 0px;
      .app_header {
        min-width: 40px;
        width: 100%;
        > div {
          padding: 5px;
        }
      }
      .app_body {
        > div {
          flex: 1;
        }
      }
    }
    .no-comment-msg {
      margin: 0px;
      padding: 5px;
      font-size: small;
    }
  }
`;
