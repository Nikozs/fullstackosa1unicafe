import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
        luvut: [],
        keskiarvo: this.laskekeskiarvo.bind(this),
        positiivisia: this.laskehyvatprosentit.bind(this)

      }
      this.kasvataHyva = this.kasvataHyva.bind(this)
      this.kasvataNeutraali = this.kasvataNeutraali.bind(this)
      this.kasvataHuono = this.kasvataHuono.bind(this)
     
    }
    
  
laskehyvatprosentit()
{
  let pos=0;
  
  if (this.state.huono>0 || this.state.hyva>0 || this.state.neutraali>0)
  {
   pos=(this.state.hyva*100)/(this.state.huono+this.state.neutraali+this.state.hyva);
  }

  return pos;
}

    laskekeskiarvo()
    {
      let yht=0;
      let kesk=0;

      this.state.luvut.map(p => yht=yht + p);
      if(this.state.luvut.length>0)
      {
      kesk=yht/this.state.luvut.length;
      }
    return kesk;    
}

    kasvataHyva() {
      this.state.luvut.push(1);
      this.setState({ hyva: this.state.hyva + 1 }) 
    }

    kasvataNeutraali() {
      this.state.luvut.push(0);
        this.setState({ neutraali: this.state.neutraali + 1 }) 
      }

    kasvataHuono() {
      this.state.luvut.push(-1); 
      this.setState({ huono: this.state.huono + 1 }) 
  }

//1,10 
 /*  buttonclick = (arvo) => {
     return ()=>{
    this.state.luvut.push(arvo);
    switch (arvo)
    {
      case 1:
      this.setState({ hyva: this.state.hyva + 1 }) 
      break
      case 0:
      this.setState({ neutraali: this.state.neutraali + 1 }) 
      break
      case -1:
      this.setState({ huono: this.state.huono + 1 }) 
      break
      default:
      break
    }
  }
} */




    render() {
      
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.kuvaus}</button>
  )
} 

const Statistic = (props) => {
  return (
    <tr><td>{props.texti}:</td><td> {props.arvo}</td></tr>
  )
}

const Statistics = (props) => {
  return (<div>
    <h1>Statistiikka</h1>
    <table>
      <tbody>
    {props.children}
    </tbody></table></div>
  )
}

      
        return (
          <div>
            <p>Anna palautetta</p>
            <div>
              <Button onClick={this.kasvataHyva} kuvaus="Hyvä"/>
              <Button onClick={this.kasvataNeutraali} kuvaus="Neutraali"/>
              <Button onClick={this.kasvataHuono} kuvaus="Huono"/>
              
              <Statistics>
                <Statistic texti="Hyva" arvo={this.state.hyva}/>
                <Statistic texti="Neutraali" arvo={this.state.neutraali}/>
                <Statistic texti="Huono" arvo={this.state.huono}/>
                <Statistic texti="Keskiarvo" arvo={this.state.keskiarvo()}/>
                <Statistic texti="Positiivisia" arvo={this.state.positiivisia()}/>
              </Statistics>
            </div>
          </div>
        )
      }
    }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )



