import React from 'react'
import Card from "../Card/Card"

import "./Infocard.css"

function Infocard() {
  return (
    <Card className="infocard">
        <h3>
            Try it free 7 days <span>then 20/mo. thereafter</span>
        </h3>
    </Card>
  )
}

export default Infocard