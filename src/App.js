import { Component } from "react";


class App extends Component {
  
 constructor(props){
   super(props)
   this.state = {
       fullname: "john",
       bio: "passionné par l'informatique",
       imgSrc:'http://placeimg.com/640/360/any',
       profession: "Developpeur web",
       shows: false
    
      }
   
    this.showPerson = this.showPerson.bind(this);
    this.affichage = this.affichage.bind(this);
    this.masqPerson = this.masqPerson.bind(this);
  
    }
  
   componentDidMount(){
   
    
    let timer = window.setInterval(() => {
      
   },100);
  }

      

      masqPerson(){
        alert("Erreur")
      }

      showPerson(){
        
        this.setState({
          shows: true,
        })

      }
     
   
 
  render(){
    return (
      this.state.shows ? this.masqPerson(): 
        <>
          <div>
            <h2>Votre nom {this.state.fullname} </h2>
            <h2>Votre bio{ this.state.bio}</h2>
            <h2><img src={this.state.imgSrc}/> </h2>
            <h2>Votre profession {this.state.profession} </h2> 
            <button onChange={this.showPerson}>click me</button>
            <h2>interval: {this.timer}</h2>
            </div> 
      </>
    );
  }
}

export default App;
