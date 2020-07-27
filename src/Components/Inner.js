import React, { Component } from 'react'

class Inner extends Component {
    render() {

        const arr = this.props.items;
        console.log(arr)
        const items = arr.map((item,i) => {
        return <div key={i}>
                <input type='text' value={item} onChange={(e) => this.props.editBtn(e.target.value)} />
                 <button onClick={() =>{
                     this.props.deleteBtn(i)
                }}>Delete</button>
            
            </div>
        })
        return (

            <div>
              {items}
            </div>
        )
    }
}

export default Inner
