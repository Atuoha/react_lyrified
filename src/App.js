import React, { Component } from 'react'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './components/Index'
import { Provider } from './context';
import Lyrics from './components/tracks/Lyrics';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
     
  }



  render() {
    return (
      <Provider>
        <Router>
            <React.Fragment>
              <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/lyrics/track/:track_id&commontrack_id/:common_track_id" component={Lyrics} />
                    </Switch>
                </div>
              <Footer />
            </React.Fragment>
        </Router>
       </Provider>
    )
  }
}

export default App