import React from "react"

export default ({ item, mr, ml }) => <div className={`p-4 bg-white ${mr && "mr-4"} ${ml && "ml-4"}`} style={{ borderRadius: "4px", boxShadow: "0 8px 14px rgba(0, 0, 0, .2)" }}>
    <p className="text-muted mb-4 text-left" style={{ fontWeight: 650 }}>{`"${item.description}"`}</p>
    <div className="d-flex">
        <div className="bg-secondary mr-3" style={{ borderRadius: "50%", width: "56px", height: "56px" }}></div>
        <div>
            <p className="mb-0 text-left" style={{ fontWeight: 700, fontSize: "1.1rem" }}>{item.name}</p>
            <p className="text-muted text-left" style={{ fontWeight: 650, fontSize: "0.9rem" }}>{item.role}</p>
        </div>
    </div>
</div>