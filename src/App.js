import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList';
import Shoe from './components/Shoe';
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
      shoes:[]
    }
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

  }

  render() {
    return (
      <div>

        <NavBar title="Hello World"/>

        <div className="row">
          <div className="col s6">
             <ShoeList shoes={this.state.shoes}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
