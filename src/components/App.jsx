import React from 'react';
import NavBar from './NavBar';
import Menu from './Menu';
import Admin from './Admin';
import WineForm from './WineForm';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterWineList: {},
      selectedWine: null
    };
    this.handleAddingNewWineToList = this.handleAddingNewWineToList.bind(this);
    this.handleChangingSelectedWine = this.handleChangingSelectedWine.bind(this);
  }

  handleAddingNewWineToList(newWine){
    var newWineId = v4();
    var newWineList = Object.assign({}, this.state.masterWineList, {
      [newWineId]: newWine 
    });
    this.setState({masterWineList: newWineList});
  }

  handleChangingSelectedWine(wineId){
    this.setState({selectedWine: wineId});
  }

  render(){
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' render={()=><Menu wineList={this.state.masterWineList} />} />
          <Route path='/newwine' render={()=><WineForm onNewWineCreation={this.handleAddingNewWineToList} />} />
          <Route path='/admin' render={(props)=><Admin wineList={this.state.masterWineList} currentRouterPath={props.location.pathname} onWineSelection={this.handleChangingSelectedWine} selectedWine={this.state.selectedWine} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
