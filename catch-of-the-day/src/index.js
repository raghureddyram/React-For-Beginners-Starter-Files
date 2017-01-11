// let's go!
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css'
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

// Match compnents can't be direct children of BrowserRouter, wrap in a div
const Root = () => {
  return (
    <BrowserRouter>
      <div> 
        <Match exactly pattern="/" component={StorePicker}/>
        <Match exactly pattern="/store/:storeId" component={App}/>
        <Miss  component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
