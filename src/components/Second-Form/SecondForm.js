import { SecondStyledForm } from "../styledComps"

export default function SecondForm(props) {
    return (
        <SecondStyledForm>
            <h3>Tall Oaks Club</h3>
            <div id="container">
                <form>
                    <div id="firstColumn">
                        <div className="wrapper">
                            <div id="fname">
                                <label htmlFor="fname">First Name: </label>
                                <input type="text" id="fname" name="fname" placeholder="jacob" />
                            </div>
                            <div id="lname">
                                <label htmlFor="lname">Last Name: </label>
                                <input type="text" id="lname" name="lname" placeholder="" />
                            </div>
                                <div className="radio">
                                    <label htmlFor="favColor">Date:</label>
                                    <input type="date" />
                                </div>
                        </div>
                    </div>
                    <div id="secondColumn">
                        <div className="wrapper">
                            
                        </div>
                    </div>
                </form>
            </div>
        </SecondStyledForm>
    )
}