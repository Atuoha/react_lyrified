import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Track(props) {
    const { track } = props
    return (
        <div className="col-md-3 mt-2">
            <Card className="card_element" style={{paddingTop: "10px"}}>
                    <Card.Img className="center-align text-center align-content-center" variant="top " src="music.jpg" style={{ width: '120px', margin: "0 auto" }}  />
                    <Card.Body> 
                        <Card.Title>
                            <b>Track <i className="fa fa-play-circle-o"></i>:</b> {track.track_name}  
                            <br/><b>Artist <i className="fa fa-user"></i>:</b> {track.artist_name}
                        </Card.Title>            
                        <p><b>Track Ratings <i className="fa fa-star"></i>:</b> {track.track_rating}</p>
                        <p><a href={track.track_share_url} target="_blank" rel="noreferrer" style={{color: "#d33c69"}}>Share Track <i className="fa fa-share"></i></a></p>

                        <Link to={`/lyrics/track/${track.track_id}&commontrack_id/${track.commontrack_id}`} className="btn btn-block btn-secondary mr-2" >View Track <i className="fa fa-caret-right"></i></Link>
                    </Card.Body>
             </Card>
        </div>
    )
}


export default Track