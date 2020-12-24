import React,{useState} from 'react';

function Temp() {
   const Bikes=[
    {
        manufacturer:"",
        model:"",
        onRoadPrice:"",
     },
   ];

   const [bikesCopy,setBikes] = useState(Bikes);
   
   const handleChange=(index,event)=>{
     const values=[...bikesCopy];
     values[index][event.target.name]=event.target.value;
     setBikes(values);
   }

   const handleSubmit=(e)=>{
         e.preventDefault ();
   }

   const handleAdd=()=>{
      setBikes([...bikesCopy,{manufacturer:"",model:"",onRoadPrice:"",}])
   }

   const handleRemove=(index)=>{
      const values=[...bikesCopy];
      values.splice(index,1);
      setBikes(values);
   }
    return (
      
         <div className="jumbotron mt-5 pt-5">
               <form onSubmit={handleSubmit}>
                  {bikesCopy.map((bikes,index) => (
                     <div key={index} className="row">
                        <input type="text"
                        className="col form-control"
                        name="manufacturer"
                        label="Manufacturer"
                        placeholder="Manufacturer"
                        value={bikes.manufacturer}
                        onChange={event=>handleChange(index,event)}
                        />
                        <input type="text"
                        className="col form-control"
                        name="model"
                        label="Model"
                        placeholder="Model"
                        value={bikes.model}
                        onChange={event=>handleChange(index,event)}
                        />
                        <input type="text"
                        className="col form-control"
                        name="onRoadPrice"
                        label="On Road Price"
                        placeholder="On Road Price"
                        value={bikes.onRoadPrice}
                        onChange={event=>handleChange(index,event)}
                        />
                        <button 
                        className="btn btn-sm btn-primary m-1"
                        onClick={handleAdd}
                        >Add</button>
                        <button 
                        className="btn btn-sm btn-primary m-1"
                        onClick={handleRemove}
                        >Remove</button>
                     </div>
                  ))}
                  <button className="btn btn-primary m-4"
                  type="submit"
                  onClick={handleSubmit}
                  >Submit</button>
               </form>
        </div>
    )
}

export default Temp;
