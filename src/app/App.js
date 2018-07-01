import { React } from 'react';
import './App.css';
import Header from './header/Header';
import SearchCriteria from '../searchCriteria/SearchCriteria';

const App = () => (
  <div className="App">
    <Header>Movie Database</Header>
    <section className="container">
      <SearchCriteria />
    </section>
  </div>
);

export default App;
