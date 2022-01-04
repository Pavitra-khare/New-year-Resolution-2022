// import logo from './logo.svg';
import './App.css';
import react from 'react';
import Todo from './Todo'

function App() {

const [InputText,Setinputtext] =  react.useState("");
const [Arrayoftask,Setarrayoftask]=react.useState([]);


const Textonchange =(event)=>{
Setinputtext(event.target.value);
}

const Arraysetfunction = ()=>{
if(InputText.length>0){
Setarrayoftask((Oldarray)=>{
return [...Oldarray,InputText];
});
Setinputtext("");
}
};

const Delete=(index)=>{

  Setarrayoftask((Oldarray)=>{
   return Oldarray.filter((current,i)=>{
    
      
        return index!==i;
    });
  });
  
}

// document.addEventListener('keydown',(event)=>{
//   if(event.key==='Enter'){
  
//     Arraysetfunction();
//   }
// });




  return (
    <>
    {/* <div className="fullbody"> */}
    <div className="year">
    <h1 className='mainheading'>2022</h1>
    </div>
    <div className="cardalign">
    <div className="card">
    
      <div className="heading">
        <h1>New Year Resolution</h1>
      </div>
      <div className="enter_task">
        <input type="text" value={InputText} className="addtask" placeholder="Enter Resolution" onChange={Textonchange} />
        <button className="addbutton" onClick={Arraysetfunction}>+</button>
      </div>
      <ul>

        {
          Arrayoftask.map((value,index)=>{
           return(
             <>
             <Todo func={Delete} id={index} key={index} text={value}/>
             </>
           );
          })
        }
      </ul>
    </div>
    </div>
    {/* </div> */}
    </>
  );
}

export default App;
