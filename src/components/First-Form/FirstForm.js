import { StyledForm } from "../styledComps"
import { useForm } from "./ffhooks/useForm"
import Reactstrap,{Form,FormGroup,Input,Label} from "reactstrap"

const initialValue = {
    fname : "",
    lname : "",
    email : "",
    state : "",
    username : "",
    terms : false,
}

export default function FirstForm(props) {
    const [data,change,submit] = useForm("Form-1",initialValue)
    return (
        <StyledForm>
            <main>
                <h3>Registration Form</h3>
                <div>
                    <section>Info</section>
                    <article></article>
                    <article></article>
                    <section>Contact</section>
                    <article></article>
                    <article></article>
                    <section>Profile</section>
                </div>
                <Form onSubmit={submit}>
                    <FormGroup floating>
                    <Input type="text" placeholder="first name" id="fname" name="fname" value={data.fname} onChange={change}/>
                    <Label htmlFor="fname">First Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                    <Input type="text" placeholder="last name" id="lname" name="lname" value={data.lname} onChange={change}/>
                    <Label htmlFor="lname">Last Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                    <Input type="email" placeholder="email@email.com" id="email" name="email" value={data.email} onChange={change}/>
                    <Label htmlFor="email">Email</Label>
                    </FormGroup>
                </Form>
            </main>

        </StyledForm>
    )
}