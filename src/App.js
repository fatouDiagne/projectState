import { Component } from "react";


class App extends Component {
  
 constructor(props){
   super(props)
   this.state = {
       fullname: "john",
       bio: "passionné par l'informatique",
       imgSrc:'http://placeimg.com/640/360/any',
       profession: "Developpeur web",
       shows: false,
       timer: null,
       date: new Date()

    
      }
   
    this.showPerson = this.showPerson.bind(this);
   
    this.showTimer = this.showTimer.bind(this);
  
    }
  
   componentDidMount(){

    this.timer = window.setInterval(
      () => this.showTimer(),
      1000
    );
   
   
   console.log(this.timer);
   console.log(this.showTimer())
     

  }

      

     showTimer(){
          this.setState({
            date: new Date()
          });
          return this.state.date;
      }

      showPerson(){
        

        this.setState({
          shows: true,
        })

      }
     
   
 
  render(){
    return (
      <div>
        

     { this.state.shows ? 
            <div>
              <h2>Votre nom {this.state.fullname} </h2>
              <h2>Votre bio{ this.state.bio}</h2>
              <h2><img src={this.state.imgSrc}/> </h2>
              <h2>Votre profession {this.state.profession} </h2>
              <h2>time: {this.timer}  </h2> 
            </div> 
      : <button onClick={this.showPerson}>click me</button>
       }
       
      </div> 

    );
  }
}

export default App;
