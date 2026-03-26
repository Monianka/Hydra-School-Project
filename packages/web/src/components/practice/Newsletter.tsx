"use client";

import { useState } from "react";

export default function Newsletter(){
const [email, setEmail] = useState("");
const [msg, setMsg] = useState("");

const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    setMsg(`Thank ${email} for subscribing!`);
    setEmail("");
}

    return(
        <form onSubmit= {handleSubmit}>
        <input value ={email} onChange={(e) =>setEmail(e.target.value)}
        placeholder="Email">
        
        </input>
        <button>Suscribe</button>
        {msg && <p>{msg}</p>}
        
        </form>
    )
}