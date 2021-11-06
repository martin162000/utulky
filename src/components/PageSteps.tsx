import React from 'react'



const PageSteps = (data:any) => {


    return (
            <div className="pageSteps">
              <span className={`step ${data.page===1 ? "active" : ""}`}></span>
              <span className={`step ${data.page===2 ? "active" : ""}`}></span>
              <span className={`step ${data.page===3 ? "active" : ""}`}></span>
            </div>
    )
}

export default PageSteps
