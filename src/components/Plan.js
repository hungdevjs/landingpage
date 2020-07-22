import React from "react"

import Button from "./Button"

export default ({ item }) => <div className="bg-white p-4 mb-4 d-flex flex-column align-items-center justify-content-center" style={{ borderRadius: "10px", boxShadow: "0 8px 14px rgba(0, 0, 0, .2)" }}>
    <p style={{ fontWeight: 700, fontSize: "1.5rem" }}>{item.name}</p>
    <p className="mb-5" style={{ fontSize: "2rem", fontWeight: 900 }}>{item.price} $/Month</p>

    <Button title="Join now" className="mb-5" />

    <p style={{ fontWeight: 700 }}>Storage: <span style={{ color: "#34d1bf" }}>{item.storage} GB</span></p>
    <p style={{ fontWeight: 700 }}>Support: <span style={{ color: "#34d1bf" }}>{item.support}</span></p>
</div >