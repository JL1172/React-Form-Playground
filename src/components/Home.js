import { StyledHome } from "./styledComps";
import { Routes, Route, Link } from "react-router-dom";


export default function Home(props) {
    return (
        <StyledHome>
            <div>
                <div>H</div>
                <div>o</div>
                <div>m</div>
                <div>e</div>
            </div>
            <input value="View Forms" type="button" onClick={props.setVisible} />
            {props.visible &&
                <div id="visible">
                    <Link to="form-1">Form-1</Link>
                </div>
            }
        </StyledHome>
    )
}