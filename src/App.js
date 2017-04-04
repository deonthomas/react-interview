import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Facet from './components/Facet';
import Api from './api';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shoes:[],
      tmpShoeList:[],
      cart:[],
      facetSelected:null
    }
    this.handleShoeSelect = this.handleShoeSelect.bind(this);
    this.handleFacetSelect = this.handleFacetSelect.bind(this);
  }

  componentDidMount() {
         Api.getShoes()
        .then((list)=>{
          this.setState({tmpShoeList:list, shoes:list});
        });
   }

  handleShoeSelect(shoe) {
   const mycart = this.state.cart;
    mycart.push(shoe);
    this.setState({
      cart:mycart
    });
  }

  handleFacetSelect(facet){
    //fix shared state problems
    console.log(facet);
    this.setState({
      facetSelected: (this.state.cart.length > 0 ? null : facet.onFacetSelect)
    });

    Api.getShoes()
    .then((list)=>{
      this.setState({
        shoes: list.filter((item)=> item.brand === facet.brand)
      });
    });
  }

  render() {
    return (
      <div>
      <NavBar title="My ShoeStore "/>
      <div className="row">
        <div className="col s3">
            <Facet items={this.state.tmpShoeList} onFacetSelect={this.handleFacetSelect} />
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
