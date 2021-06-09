import React, { useState } from "react"
import "./Search.css"
import { SearchResult } from "./SearchResult";

export default function Search() {
    const [image, setImage] = useState("");

    const handleInput = (event) => {
        const data = event.target.value;
        setImage(data)
    }
   
    return (
        <>
            <div className="searchBox">
                <input type="text" className="searchText" placeholder="Enter search item.." val={image} onChange={handleInput} />
                <a href="#" className="searchBtn">
                    <i class="fa fa-search fa-2x" ></i>
                </a>
            </div>
            <br></br>
            {image === "" ? null : <SearchResult  name={image} />}
        </>
    )
}