import './App.css';
import React from 'react';
import Button from './composants/Button';
import Add from './composants/Add';
import List from './composants/List';
import Pay from './composants/Pay';
import Card from './composants/Card';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTabs: 'add',
      items: [],
      productName: "",
      price: 1,
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  selectAdd(e) {
    console.log(e)
    this.setState({
      activeTabs: 'add'
    })
  }

  selectList() {
    this.setState({
      activeTabs: 'list'
    })
  }

  selectPay() {
    this.setState({
      activeTabs: 'pay'
    })
  }

  addItem(name, price) {
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
  }

  renderContent = () => {
    switch(this.state.activeTabs) {
      case 'add':
        return <Add addItem={this.addItem}></Add>
      case 'list':
        return <List listItems={this.state.items}></List>
      case 'pay':
        return <Pay></Pay>
    }
  }

  render() {
    return (
      <div className="App" >
        <Button onClick={this.selectAdd} isSelected={this.state.activeTabs === 'add' ? true : false}> Add </Button>
        <Button onClick={this.selectList} isSelected={this.state.activeTabs === 'list' ? true : false}> List </Button>
        <Button onClick={this.selectPay} isSelected={this.state.activeTabs === 'pay' ? true : false}> Pay </Button>

        {this.renderContent()}
      </div>
    );
  }
}

export default App;
