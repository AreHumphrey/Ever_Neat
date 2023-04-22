import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";
import Delivery from "./pages/Delivery";
import Location from "./pages/Location";
import Certificate from "./pages/Certificate";

function App() {

    return (
       <BrowserRouter>
           <Routes>
               <Route path='/' Component={Main}></Route>
               <Route path='/delivery' Component={Delivery}></Route>
               <Route path='/location' Component={Location}></Route>
               <Route path='/certificate' Component={Certificate}></Route>
           </Routes>
       </BrowserRouter>

    );
}

export default App;
