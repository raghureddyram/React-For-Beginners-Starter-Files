import React from 'react';
import StorePicker from './StorePicker';
import Header from './Header';
import Fish from './Fish';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
class App extends React.Component{
  constructor(){
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

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

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key){
    const order = {...this.state.order};

    order[key] = (order[key] + 1) || 1;

    this.setState({order: order});
  }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className='list-of-fishes'>
                      {Object
                        .keys(this.state.fishes)
                        .map((key) => <Fish key={key} addToOrder={this.addToOrder} details={this.state.fishes[key]} identifier={key}/>)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory loadSamples={this.loadSamples} addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;
