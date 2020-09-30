import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import reducer from "./redux/rootReducer";

import "./App.css";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import Note_edit_view from "./pages/Note_edit_view";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import Authentication from "./components/Authentication";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome devtools thing
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Authentication(Notes)} />
            <Route path="/addnote" component={AddNote} />
            <Route path="/view-edit-note/:id" component={Note_edit_view} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
