import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
	return <div className={classes.card}>{props.children}</div>;
};

// function Card () {
// 	return (
//         <>
//       bgcolor="primary"
//       header="Create Account"
//       status={status}
//       body={show ? (
//               <>
//               Name<br/>
//               <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
//               Email address<br/>
//               <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
//               Password<br/>
//               <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
//               <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
//               </>
//             ):(
//               <>
//               <h5>Success</h5>
//               <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
//               </>
//             )}

//     )
//     }

export default Card;
