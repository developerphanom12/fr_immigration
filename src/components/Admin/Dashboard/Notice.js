import React from 'react';

const NoticeBoard = ({ notices }) => {
  return (
    <div className="notice_board">
      <h2>Notice Board</h2>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>{notice}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeBoard;

