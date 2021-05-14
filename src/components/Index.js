import React, { Component } from 'react'
import Search from './tracks/Search'
import Tracks from './tracks/Tracks'


class Index extends Component{
    render(){
        return(
            <React.Fragment>
                <Search/>
                <Tracks />
            </React.Fragment>
        )
    }
}

export default Index