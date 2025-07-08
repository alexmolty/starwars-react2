const PersonCardLine = ({label, value}) => {
    return (
        <div className="d-flex w-50 justify-content-between">
            <div className="opacity-75">{label}</div> <div>{value}</div>
        </div>);
};

export default PersonCardLine;