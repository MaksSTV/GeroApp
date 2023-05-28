import { useRef, useEffect, useState, useLayoutEffect } from "react"
import "./Main.scss"
import Items from "../../API/Items"
import Item from "../Item/Item"


const Main = function () {

    const ref = useRef(null)
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [gridCol, setGridCol] = useState(0);
    const [items, setItems] = useState([])
    

    useLayoutEffect(() => {
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);

        console.log(width + "  1")
    }, []);
    
    
    useEffect(() => {
        function handleWindowResize() {
            setWidth(ref.current.clientWidth);
            setHeight(ref.current.clientHeight);
            console.log(width + "  2")
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        const size = document.getElementById('grid')
        const style = getComputedStyle(size)
        const sizeCol = style.getPropertyValue("grid-template-columns").split(" ").length
        
        if(sizeCol !== gridCol){
            setGridCol(sizeCol)
        }

        console.log(sizeCol, gridCol)

    }, [width]);

    useEffect(() => {
        let windowSize = document.documentElement.clientHeight;
        let contentSize = windowSize - 218;
        let countRow = Math.round((contentSize) / 130);

        /*fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${countRow * gridCol}`)
        .then((response) => response.json())
        .then((json) => setItems(json));*/

        if(gridCol !== 0){
            const res = Items.getItems(countRow, gridCol)
            res.then(json => setItems(json)) 
        }
           

    }, [gridCol]);

    //alert("hello")


    return (
        <div className="Main">
            <div className="left-side">
                Left side
            </div>
            <div className="main-content">
                <div className="container">
                    <div className="main-content__grid" ref={ref} id="grid">
                        {
                            items.map(item =>
                                <Item id={item.id} title={item.title} key={item.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="right-side">
                Right side
            </div>
        </div>
    )

}

export default Main;