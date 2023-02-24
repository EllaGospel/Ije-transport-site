import cartoon from "./images/cartoon.jpg"
import bus from "./images/bus.jpg"


function Body() {
  return (
    <>
    <div className="flex justify-center">
     <img className="h-52 w-[250px]" src={cartoon} alt=" humans wait for bus" />
     </div> 
     <div>
        <img className="h-52 w-[350px]  ml-5" src={bus} alt=" waiting bus" />
     </div>
    </>
  )
}

export default Body
