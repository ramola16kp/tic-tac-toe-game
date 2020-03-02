import React, {Component, Fragment} from 'react'
import ReactTooltip from 'react-tooltip'
let intitialState = {
    playerOne: true,
    messageCode:'',
    visibleLine:''
}
class Demo1 extends Component{
   state = {...intitialState}
   showErrorMessage = ()=> {
       return this.state.playerOne ? "Player two won the match" : "Player one won the match"
   }

   checkForWinner=()=>{   
        if(((this.state.one) && (this.state.two) && (this.state.three)) && (this.state.one === this.state.two) && (this.state.two === this.state.three))
        {
            this.setState({messageCode : this.showErrorMessage(), visibleLine: 1 })
            
        }
        else if(((this.state.four) && (this.state.five) && (this.state.six)) && (this.state.four === this.state.five) && (this.state.five === this.state.six)  && ( this.state.six === this.state.four)){
            this.setState({messageCode :this.showErrorMessage(), visibleLine:2  })
        }

        else if(((this.state.seven) && (this.state.eight) && (this.state.nine)) && (this.state.seven === this.state.eight) && (this.state.eight === this.state.nine)  && ( this.state.nine === this.state.seven)){
            this.setState({messageCode :this.showErrorMessage(), visibleLine: 3  })
        } 

        else if(((this.state.one) && (this.state.four) && (this.state.seven)) && (this.state.one === this.state.four) && (this.state.four === this.state.seven)  && ( this.state.seven === this.state.one)){
            this.setState({messageCode :this.showErrorMessage(), visibleLine:4 })
        } 

        else if(((this.state.two) && (this.state.five) && (this.state.eight)) && (this.state.two === this.state.five) && (this.state.five === this.state.eight)  && ( this.state.eight === this.state.two) ){
            this.setState({messageCode :this.showErrorMessage(), visibleLine:5 })
        } 

        else if(((this.state.three) && (this.state.six) && (this.state.nine)) && (this.state.three === this.state.six) && (this.state.six === this.state.nine)  && ( this.state.nine === this.state.three)){
            this.setState({messageCode :this.showErrorMessage(), visibleLine:6 })
        } 

        else if(((this.state.one) && (this.state.five) && (this.state.nine)) && (this.state.one === this.state.five) && (this.state.five === this.state.nine)  && ( this.state.nine === this.state.one) ){
            this.setState({messageCode :this.showErrorMessage(), visibleLine: 7 })
        }

        else if(((this.state.three) && (this.state.five) && (this.state.seven)) && (this.state.three === this.state.five) && (this.state.five === this.state.seven)  && ( this.state.seven === this.state.three) ){
            this.setState({messageCode :this.showErrorMessage(), visibleLine:8})
        }

        if(( this.state.one && this.state.two && this.state.three && this.state.four && this.state.five && this.state.six && this.state.seven && this.state.eight && this.state.nine )){
            this.setState({messageCode :"Match Draw" })
        }
}
   
   getValues = (e) => {
       if(this.state[e.target.id] || this.state.messageCode) return;
       e.target && this.setState({
        [e.target.id] : this.state.playerOne ? "x" : "o",
        playerOne:!this.state.playerOne,
        }, () => this.checkForWinner())
        
   }

   resetState = () => {
    this.setState({one:null,
        two:null,
        three:null,
        four:null,
        five:null,
        six:null,
        seven:null,
        eight:null,
        nine:null,
        messageCode: "",
        visibleLine:''
    })
   }
    
   render(){
       console.log(this.state);
        return (
            <div>
                <div className="position-relative" style={{width:"500px"}}>
                    <h1 style={{textAlign:"center", marginBottom:"70px"}}>Tic Tac Toe</h1>
                    {this.state.messageCode ? <div className={this.state.messageCode === "Match Draw" ? "text-danger" : "text-success" }>{this.state.messageCode }</div> : ''}
                    <table style={{width:"100%"}}>
                            <tr>
                                <td width="33.3%" id="one" value="1" style={{textAlign:"center", borderRight:"4px"}} onClick ={this.getValues} className={this.state.one || this.state.messageCode  ? "avoid-clicks" : ''}><span>{this.state.one || ""}</span></td>
                                <td width="33.3%" id="two" value="2"  onClick ={this.getValues} className={this.state.two ? "avoid-clinks" : ""}><span>{this.state.two || ""}</span></td>
                                <td width="33.3%" id="three" value="3"  onClick ={this.getValues} className={this.state.three ? "avoid-clinks" : ""}><span>{this.state.three || ""}</span></td>
                                <span className={Number(this.state.visibleLine) === 1 ? `show-line-${Number(this.state.visibleLine)}` : ''}></span>
                                <span className={Number(this.state.visibleLine) === 4 ? `show-line-${Number(this.state.visibleLine)}` : ""}></span>
                            </tr>
                            
                            
                            <tr>
                                <td width="33.3%" id="four" value="4"  onClick ={this.getValues}  className={this.state.four ? "avoid-clinks" : ""}><span>{this.state.four || ""}</span></td>
                                <td width="33.3%" id="five" value="5"  onClick ={this.getValues}  className={this.state.five  ? "avoid-clinks" : ""}><span>{this.state.five || ""}</span></td>
                                <td width="33.3%" id="six" value="6"  onClick ={this.getValues}  className={this.state.six   ? "avoid-clinks" : ""}><span>{this.state.six || ""}</span></td>
                                
                                <span className={Number(this.state.visibleLine) === 2 ? `show-line-${Number(this.state.visibleLine)}` : ''}></span>
                                <span className={Number(this.state.visibleLine) === 5 ? `show-line-${Number(this.state.visibleLine)}` : ""}></span>
                            </tr>


                            <tr>
                                <td width="33.3%" id="seven" value="7"  onClick ={this.getValues}  className={this.state.seven  ? "avoid-clinks" : ""}><span>{this.state.seven || ""}</span></td>
                                <td width="33.3%" id="eight" value="8"  onClick ={this.getValues}  className={this.state.eight  ? "avoid-clinks" : ""}><span>{this.state.eight || ""}</span></td>
                                <td width="33.3%" id="nine" value="9"  onClick ={this.getValues}  className={this.state.nine ? "avoid-clinks" : ""}><span>{this.state.nine || ""}</span></td>
                                <span className={Number(this.state.visibleLine) === 3 ? `show-line-${Number(this.state.visibleLine)}` : ''}></span>
                                <span className={Number(this.state.visibleLine) === 6 ? `show-line-${Number(this.state.visibleLine)}` : ""}></span>
                            </tr>
                    </table>
                    {this.state.messageCode?<button className="btn btn-danger" onClick={this.resetState}>Restart Game</button>: ''}
                    <p className={Number(this.state.visibleLine) === 7 ? "digonalLine" : ''}></p>
                    <p className={Number(this.state.visibleLine) === 8 ? "digonalRight" : ''}></p>
                </div>
           </div>
       )
   }
}

export default Demo1