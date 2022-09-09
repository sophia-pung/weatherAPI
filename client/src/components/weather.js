import { useState, useEffect } from "react";

//construct weather
const Weather = (props) => {
    //we use useState to update variables in the document as we move down the array. create State
    //want to have different default value that you can check for so you know when to render 
    const [weather, setWeather] = useState (null)
    
    const loadData = () => {
        fetch('http://localhost:8090/weather')
        //data comes in as string, gets converted to json object 
        .then((response) => response.json())
        .then(data => {
            //sets outfits as the JSON data by replacing the empty array
            //changes value from null to new value, after setting it, it triggers a re-render
            setWeather(data);
        })
    }

    //we use useEffect to update every time the DOM reloads. tells the component to bring data when page is rendered. 
    //when the component mounts, loadData() is called
    //component lifecycle: appears (constructor- created), mount (it's visible on a page after everything has loaded), updates (anytime props or state changes), unmount (anything related to cleaning page)
    useEffect(() => { //https://reactjs.org/docs/hooks-effect.html & https://initialcommit.com/blog/usestate-useeffect-hooks-react#:~:text=The%20useState%20hook%20is%20used,re%2Drendering%2C%20and%20unmounting.
        //return before useEffect, because loadData hasn't been called 
        //components render first, and then run the mount operation. mount lifecycle step- where useEffect is run. 
        //by nature JS wants to run in the background first. wants loading animation to load first (async operations are never really blocking a page). 
        loadData();
    }, [])

    //console.log(weather == {})    
    return (
        <div className='Container'>
            {/* shorthand if statement; anytime you chain values with && (righthand most value is returned if things to the left is true) */}
            {weather != null && (<h1>{weather.main.temp}</h1>)}
        {/* can't use array methods because it's not an array, JSON data is stored as a list
        <p>(outfits[0].top)</p>
        <p>(outfits[0].bottom)</p> */} 
        </div>
    )
}

export default Weather