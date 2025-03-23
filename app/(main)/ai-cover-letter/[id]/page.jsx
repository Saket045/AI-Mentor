import React from 'react'

const CoverLetter = async({params}) => {
 const paramsId = await params.id;
  return (
    <div>
      Coverletter : {paramsId}
    </div>
  )
}

export default CoverLetter
