import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

const reducer = (state, action)=>{
    switch (action.type) {
        case "SEARCH_TRACK":
            return{
                ...state,
                track_list: action.payload,
                heading: "Search Results"
            }    
        default:
            return state;
    }
}

export class Provider extends Component {
        constructor(props){
            super(props)
            this.state = {
                track_list: [],
                heading: "Top 10 Tracks",
                dispatch: action => this.setState(state => reducer(state, action))
            }
        }

        componentDidMount(){
            axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=12&country=ng&f_has_lyrics=1&apikey=e8912285e7edad37d47d3024fc87e72b`)
            .then(response=>{
                console.log(response.data)
                this.setState({
                    track_list: response.data.message.body.track_list
                })
            })
            .catch(err=>console.log(err))
        }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
