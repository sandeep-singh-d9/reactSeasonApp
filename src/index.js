import React from 'react'
import ReactDOM from 'react-dom' 
import SeasonDisplay from './seasonDisplay'
import Spinner from './spinner'
class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = { lat: null ,errMessage:'',};

    // }
    state = { lat: null ,errMessage:'',};
    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                this.setState({
                    lat:position.coords.latitude
                })
            } , 
            (err)=>this.setState({
                errMessage:err.message
            })
        );
    }

    render() {
        if(this.state.errMessage && !this.state.lat){
            return(
             <div>Error:{this.state.errMessage}</div>
            )    
        }
        if(this.state.lat && !this.state.errMessage){
            return(
                <SeasonDisplay lat={this.state.lat}/>
            )  
        }
        else{
            return (
                <Spinner message="Please accept location  Request"/>
            )
        }
    
        
    }
}
ReactDOM.render(<App/>,document.querySelector('#root') )