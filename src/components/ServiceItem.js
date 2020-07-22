import React from "react"

export default ({ item }) => <div className="d-flex flex-column align-items-center justify-content-center p-3">
    <div
        className="d-flex align-items-center justify-content-center mb-4"
        style={{
            borderRadius: "50%",
            border: "1px solid rgb(200 212 251)",
            width: "56px",
            height: "56px",
            backgroundColor: "rgb(200 212 251)"
        }}
    >
        <i className={item.icon} style={{ fontSize: "1.5rem", color: "#2f55d4" }} />
    </div>

    <h4 mb-4>{item.name}</h4>

    <p
        className="text-muted text-center"
        style={{ fontWeight: 650, width: "50%" }}
    >
        {item.description}
    </p>
</div>