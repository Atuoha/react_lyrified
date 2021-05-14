import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
// import Moment from "moment";

function Lyrics() {
    const { track_id } = useParams()
    const { common_track_id } = useParams()
    const [lyrics, setLyrics] = useState("")
    const [url, setUrl] = useState("")
    const [track, setTrack] = useState({})

    useEffect(()=>{
      
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=${process.env.REACT_MM_KEY}`)
        .then(response=>{
            console.log(response.data.message.body.lyrics.lyrics_body)
            setLyrics(response.data.message.body.lyrics.lyrics_body)
            setUrl(response.data.message.body.lyrics.backlink_url)

        })
        .catch(err=>console.log(err))

        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${common_track_id}&apikey=${process.env.REACT_MM_KEY}`)
        .then(response=>{
            console.log(response.data)
            setTrack(response.data.message.body.track)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <div className="col-md-10 mx-auto mt-2">
            <Link to={`/`} className="btn btn-secondary mr-2" ><i className="fa fa-caret-left"></i> Go Back</Link>
        <Card className="card_element" style={{paddingTop: "10px"}}>
                <Card.Img className="center-align text-center align-content-center" variant="top " src="/music.jpg" style={{ width: '120px', margin: "0 auto" }}  />

                {lyrics !== '' ?
                    <Card.Body> 
                    <div className="row">
                        <div className="col-md-6">
                             <h3 className="text-center"><i className="fa fa-sticky-note-o"></i> Lyrics</h3>
                             <p>"{lyrics}"</p>
                             <a href={url} target="_blank" rel="noreferrer" className="btn btn-block btn-secondary mr-2" >Read More <i className="fa fa-caret-right"></i></a>
                        </div>
 
                        <div className="col-md-6">
                             <h3 className="text-center"><i className="fa fa-play-circle-o"></i> Track Details</h3>
                             <ul className="list-group">
                                 <li className="list-group-item">
                                     <strong>Track Name:</strong> {track.track_name}
                                 </li>
 
                                 <li className="list-group-item">
                                     <strong>Artist Name:</strong> {track.artist_name}
                                 </li>
 
                                 <li className="list-group-item">
                                     <strong>Album Name:</strong> {track.album_name}
                                 </li>
 
                                 <li className="list-group-item">
                                     <strong>Track Rating:</strong> {track.track_rating} <i className="fa fa-star"></i>
                                 </li>
 
                                 <li className="list-group-item">
                                     <strong>Favorites:</strong> {track.num_favourite} 
                                 </li>
 
                                 <li className="list-group-item">
                                     <strong>Explicit Words:</strong> {track.explicit === 0 ? 'No': 'Yes'} 
                                 </li>
 
                                 <li className="list-group-item">
                                     <strong>Release Date:</strong> {track.updated_time}
                                 </li>
 
 
                             </ul>
                         </div>
                    </div>
 
                    
                 </Card.Body>
                :
                 <img src="/loading.gif" alt="loading..." style={{width: "150px", margin: "40px auto", display: "block"}} />
                }
                
         </Card>
    </div>
    )
}


export default Lyrics