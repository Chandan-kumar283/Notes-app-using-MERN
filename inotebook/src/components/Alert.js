import React from "react";

  function Alert(props) {
    const capitalize =(word)=>{
      if (!word) return "";
          const lower = word.toLowerCase();
          return lower.charAt(0).toUpperCase() +lower.slice(1);
    }
return (
   
 <div style={{height : "40px"}}>
   { props.alert &&  <div className={`alert alert-${props.alert.typ} `}role="alert">
      <strong>{capitalize(props.alert.typ)}</strong> {props.alert.msg}
    </div>}
 </div>
  );
}

export default Alert;