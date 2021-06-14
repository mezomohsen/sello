import React from 'react';

function ListItems(props){

    const items = props.items;
    


    const listItems = items.map((items , i)=>{
        return <div className="list" key={items + 1}>
            <p>
                <input type="text" id={items.key} value={items} onChange={(e) => {props.update(this.target.value, items.key)} }/>
            </p>
            <i className="fas fa-trash" onClick={() => props.delete(items)}></i>
        </div>
    });
    
    return (
        <div className="">
            <div className="pt-1">{listItems}</div>
       </div>
    )
}

export default ListItems;