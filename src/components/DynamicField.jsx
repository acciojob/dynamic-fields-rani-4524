import React, { useState } from 'react'

const DynamicField = () => {
    const[fields,setFields] = useState([
        {
            name:'',
            age:''
        }
    ]);

    const handleChange=(index ,e)=>{
        const{name,value}=e.target;

       const updatedFields = [...fields];
       updatedFields[index][name]=value;

       setFields(updatedFields)
    }

    const addField = ()=>{
        setFields([...fields , {name:"" , age:""}]);
    }

    const removeField = (index) =>{
        const updatedFields = fields.filter((_,i)=>i!==index);
        setFields(updatedFields);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted Data:" , fields);
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      {
        fields.map((field , index)=>(
            <div key={index}>
                <input type="text" placeholder='name' name='name'  value={field.name} onChange={(e)=>handleChange(index,e)}/>
                <input type="number" placeholder='age' name='age' value={field.age} onChange={(e)=>handleChange(index,e)}/>
                <button onClick={()=>removeField(index)}>Remove</button>
            </div>
        ))
      }

      <button type='button' onClick={addField}>Add More..</button>

      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default DynamicField
