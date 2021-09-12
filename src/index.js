import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BankList from "./Components/BankList/BankList";
import Calculator from "./Components/Calculator/Calculator";
import NotFound from "./Components/NotFound/NotFound";
import AddBank from "./Components/AddBank/AddBank";
import EditBank from "./Components/EditBank/EditBank";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//API
import { updateBank, getAllBank } from "./Services/api-service";

class App extends Component {
  componentDidMount() {
    getAllBank().then((data) => {
      if (data === null) {
        this.setState({ List: [] });
      } else {
        this.setState({
          List: data,
        });
      }
    });
  }

  state = {
    List: [],
    CurrentBank: null,
  };
  // ---------------------------
  onEdit = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    this.setState({
      CurrentBank: this.state.List[index],
    });
  };
  // ----------------------------
  onEditBank = (editBank) => {
    let tmpList = this.state.List.slice();
    const index = this.state.List.findIndex((elem) => elem.id === editBank.id);
    tmpList[index] = editBank;
    this.setState({
      List: tmpList,
    });
    updateBank(tmpList);
  };
  // -----Delete bank------------
  onDelete = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    // console.log(index);
    let partOne = this.state.List.slice(0, index);
    let partTwo = this.state.List.slice(index + 1);
    let tmpList = [...partOne, ...partTwo];
    this.setState(() => {
      return {
        List: tmpList,
      };
    });
    updateBank(tmpList);
  };

  // -----Add bank---------------
  onAddBank = (newBank) => {
    let tmpList = this.state.List.slice();
    // tmpList.unshift(newBank); //start
    tmpList.push(newBank); //end
    this.setState({
      List: tmpList,
    });
    updateBank(tmpList);
  };
  // -------------------------
  render() {
    const { List } = this.state;
    const { CurrentBank } = this.state;
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <BankList onDelete={this.onDelete} onEdit={this.onEdit} BankList={List} />
            )}
          />

          <Route path='/addbank' render={() => <AddBank onAddBank={this.onAddBank} />} />
          <Route
            path='/editbank'
            render={() => <EditBank Bank={CurrentBank} onEditBank={this.onEditBank} />}
          />
          <Route path='/calculator' render={() => <Calculator BankList={List} />} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
