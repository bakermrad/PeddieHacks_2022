import React from "react"

export default function Hero() {
    const exerciselevel = "level 1"
    return (
        <div className="Hero">
            <img src="" alt="" />
            <h2 className="heroText" >{exerciselevel}</h2>
            <select name="selectList" id="selectList">
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
            </select>
        </div>
        
    )
}