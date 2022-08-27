import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: '',
            clicked: false,
            userInputHistory: []
        }
    }

    handleChange =(event) =>{
        event.preventDefault();
        this.setState({userInput: event.target.value,clicked: false})

    }

    handleSubmit = (event) =>{
      event.preventDefault();
      this.setState({clicked: true})
      this.setState({userInputHistory: [...this.state.userInputHistory,this.state.userInput]})

    }

    render(){
      //var userInputHistory=[]
      //if (this.state.clicked){
        var userInput= this.state.userInput
        var userInputHistory= this.state.userInputHistory
        console.log(userInputHistory);
      //}
        return(
            <div>
                <form id="FormTextInput" onSubmit={this.handleSubmit}>
                  <div id="FormTextDisplay">
                  {
                      userInputHistory.map(function(data,index) {
                        return <div id='verticalLine'><p id='userText'>User: {data}</p></div>;
                      })
                  }
                  </div>
                  <textarea cols="66" rows="6" type='text' value={userInput} onChange={this.handleChange}/><br/>
                  <button type="submit"  onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}


export default Form
