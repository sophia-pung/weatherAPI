import { useState, useEffect } from "react";

const Outfits = (props) => {
    //we use useState to update variables in the document as we move down the array
    const [outfits, setOutfits] = useState ([])
    
    const loadData = () => {
        fetch('http://localhost:8090/api/outfits')
        .then((response) => response.json())
        .then(data => {
            //sets outfits as the JSON data 
            setOutfits(data);
        })
    }

    //we use useEffect to update every time the DOM reloads. tells the component to bring data when page is rendered. 
    useEffect(() => { //https://reactjs.org/docs/hooks-effect.html & https://initialcommit.com/blog/usestate-useeffect-hooks-react#:~:text=The%20useState%20hook%20is%20used,re%2Drendering%2C%20and%20unmounting.
        loadData();
    }, [])   

    return (
        <div className='Container'>
            {outfits.map((outfits, index) => {
                return (
                    <div key={index}>
                        <h3>{props.camper}</h3>
                        <p> {outfits.top} {outfits.bottom} </p> 
                    </div> 
                );
                })}
        {/* can't use array methods because it's not an array, JSON data is stored as a list
        <p>(outfits[0].top)</p>
        <p>(outfits[0].bottom)</p> */} 
        </div>
    )
}
export default Outfits;