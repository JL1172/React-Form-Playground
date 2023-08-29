import { StyledForm } from "../styledComps"

export default function FirstForm(props) {
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
                <form>
                    <input type="text" placeholder="first name" id="fname" name="fname" />
                </form>
            </main>

        </StyledForm>
    )
}