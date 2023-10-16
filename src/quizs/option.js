export default function Option({ imgPath, text }) {
    return (<>
        <div>
            <img src={imgPath} alt="optionimg" />
            <div className="op_text">
                {text}
            </div>
        </div>
    </>)
}