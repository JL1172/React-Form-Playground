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
justify-content : flex-start;
align-items : flex-end;
img {
    width : 50px;
}
a {
    color : white;
    text-decoration : none;
    font-size : 30px;
    margin-left : 3rem;
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
section {
    width : 15rem;
    height : fit-content;
    margin-top : 4rem;
    display : flex;
    justify-content  : space-between;
    font-size : 25px;
    a {
        background-color : rgb(157, 168, 206);
        outline : 2px solid rgb(39, 39, 39);
        color : white;
        text-decoration : none;
        border-radius : 20px;
        padding : .3rem;
        &:hover {
            color :  rgb(157, 168, 206);
            background-color : white;
            transform : scale(1.1);
        }
        &:active {
            animation : ${activekf} .3s ease-in-out forwards;
        }
    }
}
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

export const StyledForm = styled.div`
height : 100vh;
display  : flex;
flex-direction  : column;
justify-content : center;
align-items : center;
main {
    border : 2px solid black;
    width : 40rem;
    height : 40rem;
    h3 {
        text-align : center;
        margin-bottom : 5rem;
        padding-top  :2rem;
    }
>div {
    display : flex;
    justify-content  :space-evenly;
    border-bottom : 1px solid lightgray;
    padding-bottom : 1rem;
   section {
    border : 2px solid lightgray;
    padding : 1rem;
    border-radius : 10rem;
    z-index : 1;
   }
   section:nth-of-type(1) {
    background-color : ${props => props.first ? "royalblue" : "white"};
    color : ${props => props.first ? "white" : "black"};  
   }
   section:nth-of-type(2) {
    background-color : ${props => props.second ? "royalblue" : "white"}; 
    color : ${props => props.second ? "white" : "black"};  
   }
   section:nth-of-type(3) {
    background-color : ${props => props.third ? "royalblue" : "white"}; 
    color : ${props => props.third ? "white" : "black"};  
   }
}

form {
    margin-top : 3rem;
    display : flex;
    flex-direction  : column;
    align-items : center;
    select {
       margin-top : 4rem;
    }
    #secondPageButtons {
        margin-top : 6rem;
        display : flex;
        justify-content : space-between;
    }
    #firstPageButton {
        margin-top : 9rem;
        display : flex;
        margin-left : 15rem;
        justify-content : flex-end;
    }
    #thirdPageButtons {
        margin-top : 9rem;
        display : flex;
        justify-content : space-between;
    }
    button {
        background-color : royalblue;
        border : none;
        border-radius : 5px;
        width : 50px;
        color : white;
        &:active {
            background-color : white;
            color : royalblue;
            transform : scale(1.1); 
            border-color : royalblue;
        }
    }
}
}
#submit {
        background-color : royalblue;
        border : none;
        border-radius : 5px;
        width : fit-content;
        color : white;
        &:active {
            background-color : white;
            color : royalblue;
            transform : scale(1.1); 
            border-color : royalblue;
        }
    }
.reset {
    background-color : white;
        border : none;
        border-radius : 5px;
        width : fit-content;
        color : black;
        &:active {
            color : royalblue;
        }
    }
`