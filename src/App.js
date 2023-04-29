import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";

import Delivery from "./pages/Delivery";
import Location from "./pages/Location";
import Certificate from "./pages/Certificate";
import Requisites from "./pages/Requisites";
import Confid from "./pages/Сonfidentiality";

function App() {

    return (
       <BrowserRouter>
           <Routes>
               <Route path='/' Component={Main}></Route>
               <Route path='/delivery' Component={Delivery}></Route>
               <Route path='/location' Component={Location}></Route>
               <Route path='/certificate' Component={Certificate}></Route>
               <Route path='/requisites' Component={Requisites}></Route>
               <Route path='/confidentiality' Component={Confid}></Route>
           </Routes>
       </BrowserRouter>

    );
}

export default App;
