import React, { Component } from 'react'
import Inner from './Inner';
class Outer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            arr:[],
            name:'',
             
        }
        this.inputRef = React.createRef();
    
    }
    handleInput = (e) => {
        this.setState({
            name:e.target.value,
            
        })
        
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {arr, name } = this.state;
       if(name !== ''){
           const item = [...arr,name];
           console.log(item);
           this.setState({
               arr:item,
               name:'',
               key:'',
           })

       }
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }
    deleteBtn = (val) => {
        const filter = this.state.arr.filter((item,i) => i!== val )
                this.setState({
                    arr:filter,
                })
            }
    editBtn = (val) => {
        const items = this.state.arr
        items.map(item =>{
            if(item === val){
                item = val;
            }
        })
        this.setState({
                arr:items
        })
    }
    
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type='text' placeholder="Enter task" ref={this.inputRef} 
                   value ={this.state.name} 
                   onChange={this.handleInput} />
                   <button type="submit">ADD</button>
                   <Inner items = {this.state.arr} deleteBtn = {this.deleteBtn}
                   editBtn = {this.editBtn} />
                   </form> 
            </div>
        )
    }
}

export default Outer
