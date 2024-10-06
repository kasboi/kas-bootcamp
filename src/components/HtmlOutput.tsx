import React from "react"

const HtmlOutput = ({ children }) => {
    return (
        <div
            style={{
                padding: "10px 5px",
                borderRadius: "6px",
                border: "2px solid #dee2e6",
                backgroundColor: "#f1f3f5",
                color: "black",
            }}
        >
            {children}
        </div>
    )
}

export default HtmlOutput
