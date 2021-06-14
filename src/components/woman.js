import React, { Component } from 'react';
import ListItems from '../components/listItems';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Woman extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            currentItem :{
                text: '',
                key: ''
            }
        }

        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // this.setUpdate = this.setUpdate.bind(this);
        
    }
    
    editItem(e){
        this.setState({
            currentItem: e.target.value,
            key: Date.now()
        })
    }

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        // console.log(newItem);
        if(newItem.text !== ""){
            const newItems=[...this.state.items , newItem];
            // console.log(newItems);
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    ket: ''
                }
            })
            // console.log(newItems);
        }
    }

    deleteItem(key){
        const fiterItem = this.state.items.filter(item => item!==key);
        this.setState({
            items: fiterItem
        })
        console.log(this.items)
    }
    update(text , key){
        
    }

    render() {
        return (
            <div className="pt-5 pb-5 text-center">
                <form className="pt-5 " onSubmit={this.addItem}>
                    <input type="text" placeholder="enter text" value={this.state.currentItem.text}
                     onChange={this.editItem} />
                    <button type="submit">Add</button>
                </form>
                <ListItems items={this.state.items} delete={this.deleteItem} update={this.update} />
            </div>
        );
    }
}

export default Woman;