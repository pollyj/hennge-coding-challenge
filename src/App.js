import React from 'react';
import './App.css';
import SearchBar from './components/search-bar/SearchBar.js';
import ResultsList from './components/results-list/ResultsList';
// import NoMatches from './components/no-matches/NoMatches';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <SearchBar />
          </div>
        </div>
          <div className="row">
            <div className="col">
              <ResultsList />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
