import React from 'react';
import NavBar from './NavBar';
import Menu from './Menu';
import WineForm from './WineForm';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterWineList: {}
    };
    this.handleAddingNewWineToList = this.handleAddingNewWineToList.bind(this);
  }

  handleAddingNewWineToList(newWine){
    newWineId = v4();
    var newWineList = Object.assign({}, this.state.masterWineList, {
      [newWineId]: newWine 
    });
    this.setState({masterWineList: newWineList});
  }

  render(){
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' render={()=><Menu wineList={this.state.masterWineList} />} />
          <Route path='/newwine' render={()=><WineForm onNewWineCreation={this.handleAddingNewWineToList} />} />
          <Route path='/admin' Component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
