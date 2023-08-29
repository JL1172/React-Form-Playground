import styled from "styled-components"
import {keyframes} from "styled-components"

const kf = keyframes`
0% {
 color : rgb(39, 39, 39);
}
25% {
 color : rgb(156, 153, 153);
}
50% {
 color : rgb(235, 232, 232);
}
75% {
 color : rgb(156, 153, 153);
}
100% {
 color : rgb(39, 39, 39);
}
`

export const StyledHeader = styled.div`
background-color : rgb(39, 39, 39);
height : 5rem;
border-bottom : 4px solid gray;
display : flex;
justify-content : space-around;
align-items : flex-end;
a {
    color : white;
    text-decoration : none;
    font-size : 30px;
}
`
export const StyledHome = styled.div`
background-color : rgb(92, 92, 92);
height : 100vh;
display : flex;
justify-content : center;
align-items : center;
div {
    animation : ${kf} 5s infinite; 
}
div:nth-of-type(1) {
    font-size : 50px;
}
div:nth-of-type(2) {
    font-size : 50px;
    animation-delay : .1s;
}
div:nth-of-type(3) {
    font-size : 50px;
    animation-delay : .2s;
}
div:nth-of-type(4) {
    font-size : 50px;
    animation-delay : .3s;
}
`