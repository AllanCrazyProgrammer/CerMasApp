import React from "react";
import FileUpload from "./FileUpload";
import AdminTools from "../AdminFunctions/adminTools";

function UserIndex() {
  return (
    <div>
      <FileUpload />
      <AdminTools />
    </div>
  );
}

export default UserIndex;
