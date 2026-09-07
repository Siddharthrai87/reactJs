import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>Save<Bookmark/> </button>
        </div>
        <div className="center">
            <h3>{props.company}<span>{props.datePosted}</span></h3>
            <h2>{props.post}</h2>
            <div>
              <h4><span>{props.tag1}</span><span>{props.tag2}</span></h4>
            </div>
        </div>
        <hr />
        <div className="bottom">
          <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
          </div>
          <div><button>Apply Now</button></div>
        </div>
    </div>
  )
}

export default Card