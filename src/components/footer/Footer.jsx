const Footer = () => {
    return (<footer className="py-4 rounded-bottom-4 row m-0">
        <div className="btn btn-danger col-sm-2 offset-sm-2"
             onClick={() => alert("We apologize. The site is under construction, the form is unavailable.")}>
            Send me an
            <span className="text-dark text-uppercase"> email</span></div>
    </footer>);
};

export default Footer;