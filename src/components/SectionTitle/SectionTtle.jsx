
const SectionTtle = ({heading, subHeading}) => {
    return (
        <div className="text-center mt-5 mb-7 w-3/12 mx-auto">
            <h3 className="text-yellow-600 mb-2" >---{subHeading}---</h3>
            <p className="uppercase text-3xl border-y-4 py-2">{heading}</p>
        </div>
    );
};

export default SectionTtle;