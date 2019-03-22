import React from "react";
/*import { Link } from "react-router-dom";*/

import FileUpload from "./FileUpload";
import FunctionComponent from "./FunctionComponent";
import AdminTools from "../AdminFunctions/adminTools";

function UserIndex() {
  return (
    <div>
      <FileUpload />
      <AdminTools/>
      {/*<FunctionComponent />*/}
    </div>
  );
}

export default UserIndex;
