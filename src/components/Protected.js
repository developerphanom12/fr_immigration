import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children }) {
  const token = localStorage.getItem("token");
  const userCheck = useSelector((state) => state?.users?.userCheck);

  const navigate = useNavigate();

  if (token && userCheck) {
    return children;
  }
}
