
// import './App.css';
import { Component } from 'react';
import axios from 'axios';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImagesList';



class App extends Component {
  state = { images : []}
  onSearchSubmit = async (term) =>{
   const response = await unsplash.get("https://api.unsplash.com/search/photos" , {
      params : {query : term} ,
      
    }) ;
     this.setState({ images : response.data.results})
  }
  render(){
    return (
      <div className="App ui container" style={{ marginTop: '10px'}}>
      
       <SearchBar onSubmit = {this.onSearchSubmit}/>
       <ImageList images ={ this.state.images}/>
      </div>
    );
  }
}

export default App;
