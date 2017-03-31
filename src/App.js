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
      facetSelected:null
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

     handleShoeSelect(shoe) {
    //todo: do better error handling
   const mycart = this.state.cart;
    mycart.push(shoe);
    this.setState({
      cart:mycart
    });
  }

  handleFacetSelect(facet){
      if(this.state.cart.length > 0){
        this.setState({
          facetSelected:null
        });
      }else{
      this.setState({
          facetSelected:facet.onFacetSelect
        });
    }
  }

  handleSelect(facet){
    console.log(facet);
  }

  render() {
    return (
      <div>
      <NavBar title="Hello World"/>
      <div className="row">

        <div className="col s3">
            <Facet items={this.state.shoes} onFacetSelect={this.handleFacetSelect} handleSelect={this.handleSelect} />
          </div>

          <div className="col s6">
            <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect}/>
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart}/>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
