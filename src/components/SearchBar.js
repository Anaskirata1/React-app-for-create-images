import { Component } from "react";

class SearchBar extends Component {
    onFormSubmit = (e) =>{
        e.preventDefault()
       console.log(this.props.onSubmit(this.state.term))
    }

  state = {
    term : ''
  }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                   <div className="field">
                   <label htmlFor="text">Enter your text</label>
                    <input type="text" id="text" value={this.state.term} onChange={(e) => this.setState({term:e.target.value})}/>
                    {this.state.term}
                    
                   </div>
                </form>
            </div>
        )
    }
}
export default SearchBar