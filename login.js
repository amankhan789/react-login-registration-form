import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState("");  //define state value for stoing value
    const [password,setPassword] = useState("");
    const[allEntry,setallEntry] =useState([]);   // define state for store new entry
    const submitForm =(e)=>{
        e.preventDefault();    // e.preventD use for not refresh the html
        const newEntry ={email:email,password:password };
        setallEntry([...allEntry,newEntry]);   //... it is spred operator for all data show
        console.log(allEntry);
    }
//onchange  use agr state and key ki value change ho to uspe njr rkhta h  aor store variabl pe store krta h!
    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                    
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"  value={password}  onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                {
                    allEntry.map((curElem)=>{
                        return(
                             <div className="showdata">
                                 <p>{curElem.email}</p>
                                 <p>{curElem.password}</p>

                             </div>
                        )

                    })
                }
            </div>
        </>
    )
};

export default Login;