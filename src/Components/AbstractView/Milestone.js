 import React, { Component } from 'react';
 import './ProcessFlow.css'
 
 class Milestone extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            stageName:'',
            show:false              
         }
     }
      showbtn(){        
          this.setState({
              show:true
          })
      }
      hidebtn(){        
        this.setState({
            show:false
        })
    }

     render() {
         return (
             <div className="milestone">
                <div id="pointer" onMouseEnter={this.showbtn.bind(this)} onMouseLeave={this.hidebtn.bind(this)}>
                    <input value={this.state.stageName} type="text" placeholder="1. Enter the stage name" className="milestoneInput"
                    onChange={(text)=>{
                        this.setState({
                            stageName: text.target.value
                        })
                    }}/>
                </div>
                <div id="del" style = { this.state.show === true ? {} : {display : "none"}} onClick={this.props.removeData}>x</div>
            </div>
            
         )
     }
 }
 
 export default Milestone
 