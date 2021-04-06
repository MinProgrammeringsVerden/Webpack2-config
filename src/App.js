import React from 'react';


class App extends React.Component{
    handelClicked = e =>console.log('clickedddd me')
    render(){
        return<div>
            <h1>Click this stupid button</h1>
            <button onClick={this.handelClicked}>click</button>
        </div>
    }
}

 
export default App;