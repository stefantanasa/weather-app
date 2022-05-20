import React from "react"
import { Details } from "../types/Interfaces"

interface Props {
    allData: Details
}

const Results=({allData}: Props)=>{

    console.table({allData})
    return <div>
        <ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
    </div>
}

export default Results