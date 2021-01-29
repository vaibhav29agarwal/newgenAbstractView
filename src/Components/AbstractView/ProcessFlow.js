import React, { Component } from 'react'
import Milestone from './Milestone'
import './ProcessFlow.css'

 
class ProcessFlow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             milestone:[{milestoneNUmer:1}]
        }
    }
    
    
    addNew(data,index){
    //    this.setState({...this.state,
    //    milestone:[...this.state.milestone,{milestoneNUmer:1}]})

       let milestone = this.state.milestone
        this.setState({
        ...this.state.milestone,
        milestone : [...milestone , {milestoneNumber : this.state.milestone[this.state.milestone.length - 1].milestoneNumber + 1}]
        })
    }

    remove(data,index){
        if(this.state.milestone.length==1){
            
        }
        else{
            let milestone=[...this.state.milestone]
            milestone=milestone.filter((item,i)=>item!==data && i!==index)
            this.setState({...this.state,
            milestone:milestone})
        }
    }

    render() {
        return (
            <div className="container">                
                 <div>
                    <div className="heading">
                      <h4> ProcessFlow</h4>
                    </div><br></br><br></br>

                    <div className="milestone">
                            {
                                this.state.milestone.map((data,i)=>{
                                    return ( <Milestone 
                                            removeData={()=>{this.remove(data,i)}}
                                        />)
                                })
                            }
                            <div id="pointer2" onClick={this.addNew.bind(this)}>+</div>
                    </div>        


                 <div id="rectangle" > + Add Workstep </div>
 
                <div className="heading mt-4">
                    <h4>Alternate Milestone</h4>
                </div><br/><br/>

 
                <div id="pointer1" style={{paddingTop:"1%"}}>+ New Alternate Stage</div>
                </div>

            </div>
        )
    }
}
 
export default ProcessFlow