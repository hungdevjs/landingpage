import React from "react"

export default ({ title, description, detail, mb }) => <>
    <p className="text-center" style={{ color: "#2f55d4", fontWeight: 700 }}>{title}</p>
    <p className="text-center font-weight-bold" style={{ fontSize: "1.5rem" }}>{detail}</p>
    <p className="text-center text-muted" style={{ fontWeight: 650, marginBottom: mb ? mb : "48px" }}>{description}</p>
</>