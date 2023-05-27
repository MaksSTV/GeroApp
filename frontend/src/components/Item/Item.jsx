import calculateSize from "calculate-size"

const Item = function ({id, title}) {

    return (
        <div>
            {
                calculateSize(title, {
                    font: 'Inter',
                    fontSize: '16px'
                }).width >= 146 ?
                    <div className="main-content__grid-item">...</div> :
                    <div className="main-content__grid-item">
                        {title}
                    </div>
            }
        </div>
    )
}

export default Item;