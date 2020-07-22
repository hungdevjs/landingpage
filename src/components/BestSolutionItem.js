import React from "react"

export default ({ item }) => <div className="d-flex flex-column align-items-center justify-content-center p-4">
    <i className={item.icon} style={{ fontSize: "1.5rem", color: "#34d1bf", marginBottom: "16px" }} />
    <span className="mb-2" style={{ fontSize: "2rem", color: "#fff", fontWeight: 600 }}>{item.number}</span>
    <span className="text-white" style={{ fontWeight: 550, fontSize: "1.25rem" }}>{item.detail}</span>
</div>