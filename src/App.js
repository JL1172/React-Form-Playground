import axios from "axios";
import Home from "./components/Home";
import {Routes,Route,Link} from "react-router-dom"; 
import FirstForm from "./components/First-Form/FirstForm";
import {StyledHeader} from "./components/styledComps";

export default function App() {
  return (
    <div>
      <StyledHeader>
      <Link to = "/">Home</Link>
      <Link to = "form-1">Form-1</Link>
      </StyledHeader>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "form-1" element = {<FirstForm />} />
      </Routes>
    </div>
  )
}
