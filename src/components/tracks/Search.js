import axios from 'axios'
import React, { Component } from 'react'
import { Consumer } from '../../context'


class Search extends Component{

    constructor(props){
        super(props)
        this.state = {
            search_keyword: ""
        }
    }

    changeText(e){
        console.log(e.target.value)
        let search = e.target.value
        this.setState({
            search_keyword:search,
        })
    }

    searchTrack = (dispatch, e)=>{
        e.preventDefault()
        // alert('holla at me babe!')
        if(this.state.search_keyword !== ''){
            console.log(this.state.search_keyword)
            axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.search_keyword}&page_size=12&page=1&s_track_rating=desc&apikey=${process.env.REACT_MM_KEY}`)
            .then(response=>{
                console.log(response.data)
                dispatch({
                    type: "SEARCH_TRACK",
                    payload: response.data.message.body.track_list
                })
                this.setState({search_keyword: ''})
            })
            .catch(err=>console.log(err))
        }
        else{
            alert('Search keyword required ):')
        }
        
    }

    render(){
        return(
            <Consumer>
                {value=>{
                    const { dispatch } = value;
                    return(
                        <div className="text-center">
                            <h4 className="lead">Search For A Song's Lyrics <i className="fa fa-search fa-1x"></i></h4>
                            <div className="form-group col-md-6 mx-auto">
                                <form onSubmit={this.searchTrack.bind(this, dispatch)} >
                                    <div className="input-group dates-wrap">                                              
                                        <input value={this.state.search_keyword}  id="search" onChange={(e)=>this.changeText(e)} className="dates form-control"  placeholder="search song by title..." type="text" />                        
                                        <div className="input-group-prepend">
                                            <button type="submit" className="btn btn-danger"><i className="fa fa-search"></i></button>
                                        </div>											
                                    </div>
                                </form>    
                            </div>       
                        </div>
                    )
                }}
            </Consumer>
            
        )
    }
}


export default Search