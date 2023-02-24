import { BrowserRouter  as Router,Route,Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import GetDirection from "./Components/GetDirection";

function App() {
  return (
    <>
   <Router>
    <div className="flex justify-between w-full h-screen flex-col">
     <Nav/>
      <main>
         <Routes>
             <Route path='/' element={<Body/>}/>
             <Route path='/direction' element={<GetDirection/>}/>
          </Routes>
      </main>
     <Footer/>
   </div>
  </Router>
   </>
  );
}

export default App;
