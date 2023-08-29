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
const kf2 = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
const activekf = keyframes`
0% {
    outline-offset : 8px;
}
25% {
    outline-offset : 10px;
}
100% {
    outline-offset : 14px;
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
background-image : linear-gradient(-45deg,rgb(39, 39, 39)
,rgb(156, 153, 153),rgb(235, 232, 232),rgb(156, 153, 153) );
background-size : 400% 400% ;
animation : ${kf2} 15s infinite;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
div {
    display : flex;
    margin-bottom : 3rem;
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
}
input {
    width : 300px;
    height : 75px;
    border-radius : 24px;
    border : none;
    outline : 2px solid rgb(39, 39, 39);
    background-color : white;
    color : black;
    font-size : 24px;
    text-align : center;
    &:hover {
        background-color : rgb(39,39,39);
        color : white;
        outline-offset : 4px;
        transition : .2s ease-in-out;
    }
    &:active {
       animation : ${activekf} .1s ease-in-out forwards;
    }
}
`