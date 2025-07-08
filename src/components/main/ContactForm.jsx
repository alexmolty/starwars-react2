import Planets from "./Planets.jsx";

const ContactForm = () => {
    return (<div className="farGalaxy text-center">
        <form>
            <div className="form-group mb-3">
                <label className="form-label">Your name</label>
                <input type="text" className="form-control w-100" placeholder="Enter your name"/>
            </div>

            <div className="form-group mb-3">
                <label className="form-label">Message</label>
                <input type="text" className="form-control w-100" placeholder="Enter your message"/>
            </div>
            <Planets/>
            <div>
                <button className="btn-danger" onClick={e => e.preventDefault()}>Sent</button>
            </div>
        </form>

    </div>);
};

export default ContactForm;