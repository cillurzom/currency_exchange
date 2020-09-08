import React from "react"
import Alert from "react-bootstrap/Alert";

const Error = ({ errorMsg}) => (
    <Alert variant={"danger"} ><i className="fas fa-exclamation-triangle text-danger"></i> {errorMsg}</Alert>
)

export default Error;