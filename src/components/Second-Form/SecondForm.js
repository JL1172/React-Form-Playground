import { SecondStyledForm } from "../styledComps"

export default function SecondForm(props) {
    return (
        <SecondStyledForm>
        <div id ="container">
            <form>
                <div id = "firstColumn">
                    <div>
                    <label htmlFor="fname">First Name : </label>
                    <input type="text" id = "fname" name = "fname" placeholder="fname" />
                    </div>
                </div>
                <div id = "secondColumn">
                    <div>
                <label htmlFor="lname">Last Name : </label>
                    <input type="text" id = "lname" name = "lname" placeholder="lname" />
                    </div>
                </div>
            </form>
        </div>
        </SecondStyledForm>
    )
}