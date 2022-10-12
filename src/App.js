import React from 'react';
import dataJSON from "./data/henkel_data"
import Product from "./components/Product"
import Button from "./components/Button"
import buttonsDB from "./data/buttons"


export default function App() {
    const [data, setData] = React.useState(dataJSON)
    const [adhesives, setAdhesives] = React.useState(dataJSON['Adhesives'])
    const [cosmetics, setCosmetics] = React.useState(dataJSON['Cosmetics'])
    const [detergents, setDetergents] = React.useState(dataJSON['Detergents'])
    const [schwarzkopf, setSchwarzkopf] = React.useState(dataJSON['Schwarzkopf'])
    const [buttons, setButtons] = React.useState(buttonsDB)

    // Function for looking for a url image by product name at the start of program. 
    // For running this function again the key and project id (cx) have to be changed. 
    // For more information visit https://blog.expertrec.com/google-custom-search-json-api-simplified/
    // React.useEffect(() => {
    //     adhesives.map(value => {
    //         fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyBM2nnvMcJEUJ1SZ46l1DJCD_hgo4ODgUM&cx=40f252bfb75954065&q=' + value.name)
    //         .then((response) => response.json())
    //         .then((response) => setAdhesives(prevList => prevList.map(item => {
    //             if(value.name === item.name) {
    //                 console.log(response)
    //                 console.log(value.name)
    //                 if (response.searchInformation.totalResults === "0") {
    //                     console.log("total result 0")
    //                     return {...item, url: ""}
    //                 }
    //                 console.log(response.searchInformation.totalResults)
    //                 return {...item, url: response.items[0].pagemap.cse_image[0]}
    //             }
    //             return item;
    //         })))
    //     })
    // }, [])

    // Update filter 
    function handleClick(id) {
        setButtons(preButtons => preButtons.map(button => {
            if(button.id === id) {
                console.log(buttons)
                return {...button, isClicked: !button.isClicked}
            }
            else {
                return button;
            }
        }))
    }

    React.useEffect(() => {

        buttons.forEach(button => {
            setData(preData => preData.map(item => {
                if(item.type === button.name && button.isClicked) {
                    return {...item, isVisible: button.isClicked}
                }
                else if (item.type === button.name && !button.isClicked) {
                    return {...item, isVisible: button.isClicked}
                }
                else {
                    return item
                }
            }))
        })
        
    }, [buttons])

    let uniqueChars = data.filter((element, index) => {
        return data.indexOf(element) === index;
    });
    
    console.log(uniqueChars);

    return(
        <div className="main-container">
            <div className="buttons">
                {buttons.map(button => <Button key={button.id} isClicked={button.isClicked} name={button.name} handleClick={() => handleClick(button.id)}/>)}
            </div>
            <div className="products">
                {data.map(item => item.isVisible && <Product key={item.name + item.capacity} imgUrl={item.url} name={item.name} price={item.price} capacity={item.capacity}/>)}
            </div>
        </div>

    )
}