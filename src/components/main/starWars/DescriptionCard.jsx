const DescriptionCard = () => {
    return (
        <div className="m-3 w-auto h-auto">
            <div>
                <img className="w-100 h-100 top-0" src="/src/assets/starwarslogo.png" alt="Logo"/>
            </div>
            <div className="text-center h6 mb-5 d-flex justify-content-between">
                <p>Created by</p><p>George Lucas</p>
            </div>
            <div className="text-center h6 mb-5 d-flex justify-content-between">
                <p>Original work</p><p>Star Wars (1977)</p>
            </div>
            <div className="text-center h6 mb-5 d-flex justify-content-between">
                <p>Owner</p><p>Lucasfilm</p>
            </div>
            <div className="text-center h6 mb-5 d-flex justify-content-between">
                <p>Years</p><p>1977–present</p>
            </div>
        </div>
    );
};

export default DescriptionCard;