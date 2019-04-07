import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { lat: 40, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err) => {this.setState({errorMessage: err.message})}
        );
    }
    componentDidMount(){
        console.log('Component rendered');
    }
    componentDidUpdate(){
        console.log('UPDATEED');
    }
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>{this.state.errorMessage}</div>;
        }else if(!this.state.errorMessage && this.state.lat){
            return (
                <div>
                    Latitude: {this.state.lat}
                </div>
            );
        }else{
            return(
                <div>Loading...</div>
            );
        }
        

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)