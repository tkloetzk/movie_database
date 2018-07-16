import React from 'react';
import Grid from '@material-ui/core/Grid';
import Results from './../results/Results';
import './App.css';
import Header from './header/Header';
import SearchCriteria from '../searchCriteria/SearchCriteria';

const App = () => (
  <div className="App">
    <Header>Movie Database</Header>
    <section className="container">
      <SearchCriteria />
      <Grid container>
        <Results />
      </Grid>
    </section>
  </div>
);

export default App;
