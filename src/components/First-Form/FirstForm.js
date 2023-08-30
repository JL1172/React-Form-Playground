import { StyledForm } from "../styledComps"
import { useForm } from "./ffhooks/useForm"
import Reactstrap, { Form, FormGroup, Input, Label, Alert, Placeholder } from "reactstrap";
import { useEffect, useState } from "react";
import { useFirst } from "./ffhooks/useFirst";
import { states } from "./fifteyState";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { schema } from "./schema";
import * as yup from 'yup';

const initialValue = {
    fname: "",
    lname: "",
    email: "",
    state: "",
    username: "",
    password: "",
}

const initialPageData = {
    firstPage: true,
    secondPage: false,
    thirdPage: false,
    fourthPage: false,
}

export default function FirstForm(props) {
    const [pageData, setPageData, changePageBack, changePageToLast,
        changePageToSecond, completeForm, reset] = useFirst("First", initialPageData);
    const [data, change, submit, afterData, error] = useForm("Form-1", initialValue, completeForm, reset);
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        schema.isValid(data).then(valid => setDisabled(!disabled))
    }, [data])


    return (
        <StyledForm first={pageData.firstPage} second={pageData.secondPage} third={pageData.thirdPage}>
            <main>
                {!pageData.firstPage && !pageData.secondPage && !pageData.thirdPage && !pageData.fourthPage &&
                    <button className="reset" onClick={reset}>First Page</button>
                }

                <h3>Registration Form</h3>
                <div>
                    <section>Info</section>
                    <Placeholder
                            color= {pageData.secondPage || pageData.thirdPage? "" : "light"}
                        size = "xs"
                        xs={12}
                        style = {{height : "10px",width : "100px", marginTop : "1.5rem",color : "royalblue", transition : ".5s"}}
                    />
                    <section>Contact</section>
                    <Placeholder
                        color= {pageData.thirdPage ? "" : "light"}
                        size = "xs"
                        xs={12}
                        style = {{height : "10px",width : "100px", marginTop : "1.5rem",color : "royalblue",transition : ".5s"}}
                    />
                    <section>Profile</section>

                </div>
                <Form onSubmit={submit}>
                    {pageData.firstPage && <div>
                        <FormGroup floating>
                            <Input type="text" placeholder="first name" id="fname" name="fname" value={data.fname} onChange={change} />
                            <Label htmlFor="fname">First Name</Label>
                        </FormGroup>
                        {error.fname && <p color="danger" style={{ color: "red", }}>*{error.fname}</p>}
                        <FormGroup floating>
                            <Input type="text" placeholder="last name" id="lname" name="lname" value={data.lname} onChange={change} />
                            <Label htmlFor="lname">Last Name</Label>
                        </FormGroup>
                        {error.lname && <p color="danger" style={{ color: "red" }}>*{error.lname}</p>}
                        <div id="firstPageButton">
                            <button onClick={setPageData}>Next</button>
                        </div>
                    </div>}
                    {pageData.secondPage &&
                        <div>
                            <Routes>
                                <Route path="contact" element={
                                    <div>
                                        <FormGroup floating>
                                            <Input type="email" placeholder="email@email.com" id="email" name="email" value={data.email} onChange={change} />
                                            <Label htmlFor="email">Email</Label>
                                        </FormGroup>
                                        {error.email && <p color="danger" style={{ color: "red" }}>*{error.email}</p>}
                                        <FormGroup row>
                                            <Input name="state" onChange={change} value={data.state} id="state" type="select">
                                                <option value="">Select State</option>
                                                {states.map((n, i) => {
                                                    return <option key={i} value={n}>{n}</option>
                                                })}
                                            </Input>
                                        </FormGroup>
                                        {error.state && <p color="danger" style={{ color: "red" }}>*{error.state}</p>}</div>
                                } />
                            </Routes>
                            <div id="secondPageButtons">
                                <button onClick={changePageBack}>Back</button>
                                <button onClick={changePageToLast}>Next</button>
                            </div>
                        </div>
                    }
                    {pageData.thirdPage &&
                        <Routes>
                            <Route path="profile" element={<div>
                                <FormGroup floating>
                                    <Input type="text" value={data.username} onChange={change} id="username" name="username" placeholder="username" />
                                    <Label htmlFor="username">Username</Label>
                                </FormGroup>
                                {error.username && <p color="danger" style={{ color: "red" }}>*{error.username}</p>}
                                <FormGroup floating>
                                    <Input type="text" value={data.password} onChange={change} id="password" name="password" placeholder="password" />
                                    <Label htmlFor="password">password</Label>
                                </FormGroup>
                                {error.password && <p color="danger" style={{ color: "red" }}>*{error.password}</p>}
                                <div id="thirdPageButtons">
                                    <button onClick={changePageToSecond}>Back</button>
                                    <input disabled={disabled} type="submit" id="submit" />
                                </div>
                            </div>} />
                        </Routes>}
                </Form>
                {pageData.fourthPage &&
                    <div >
                        <button className="reset" onClick={reset}>Reset</button>
                        {afterData.map((n, i) => {
                            console.log(n)
                            return <div id="fourth">
                                <div key={i}>{n.username}</div>
                                <div key={i}>{n.password}</div>
                            </div>
                        })}</div>}
            </main>
        </StyledForm>
    )
}