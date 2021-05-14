import React, { Component } from 'react'

class Spinner extends Component {
    render() {
        return (
            <div>
                <img src="loading.gif" alt="loading..." style={{width: "150px", margin: "40px auto", display: "block"}} />
            </div>
        )
    }
}

export default Spinner