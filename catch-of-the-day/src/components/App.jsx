import React from 'react';
import StorePicker from './StorePicker';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component{
  constructor(){
    super();

    this.addFish = this.addFish.bind(this);

    this.state = {
      fishes: {},
      order: {},
    }
  }

  addFish(fish){
    //update our state
    // do that by taking copy of current state, then update. for performance

    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();

    fishes[`fish-${timestamp}`] = fish;

    this.setState({ fishes: fishes }); // set the updated state only for fish es
    // set state
  }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;
