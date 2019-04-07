import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { lat: 40, errorMessage: ''};
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err) => {this.setState({errorMessage: err.message})}
        );
    }
    componentDidUpdate(){
        console.log('UPDATEED');
    }
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>{this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return (
                <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
            );
        }
        return(
            <Spinner message="Please accept location request"/>
        );
    }
    render() {
        return (
            <div className="border black">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)