import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Facet from './components/Facet';
import Api from './api';


class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
    this.state = {
      shoes:[],
      cart:[],
      facetSleected:null
    }
    this.handleShoeSelect = this.handleShoeSelect.bind(this);
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
    componentDidMount() {
         Api.getShoes()
        .then((list)=>{
          this.setState({shoes:list});
        });
  }

  handleShoeSelect (shoe) {
    //todo: do better error handling
   const mycart = this.state.cart;
    mycart.push(shoe);
    this.setState({
      cart:mycart
    });
  }

  render() {
    return (
      <div>
      
      <NavBar title="Hello World"/>
      <Facet items={this.state.shoes}/>
       <CartSummary cart={this.state.cart}/>
        <div className="row">
          <div className="col s6">
             <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
