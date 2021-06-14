import React, { useState } from 'react'
import axios from 'axios';


function Form() {

    const url = "";
    const [data, setdata] = useState({
        name: "",
        data: "",
        iduser: ""
    })

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id] = e.target.value;
        setdata(newdata);
        

        console.log(newdata);
    }

    function submit(e){
        e.preventDefault();
        await axios.post(url, {
            name: data.name,
            data: data.data,
            iduser: data.iduser
        }).then((response) => {
            this.setState({ sliders: response.data.data })
        });
            
    }

    return (
        <div className="pt-5">
            <form className="pt-5 pb-5 text-center" style={{ width: 400 }} onSubmit={(e) => submit(e)}>
                <input type="text" className="form-control m-1" placeholder="name" onChange={(e) => handle(e)} id="name" value={data.name} />
                <input type="date" className="form-control m-1" placeholder="date" onChange={(e) => handle(e)} id="date" value={data.data} />
                <input type="number" className="form-control m-1" placeholder="iduser" onChange={(e) => handle(e)} id="iduser" value={data.iduser} />
                <button className="btn btn-primary m-1">send</button>
            </form>
        </div>
    )
}

export default Form;

