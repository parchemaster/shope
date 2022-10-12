import React from 'react';
import dataJSON from "./data/henkel_data.json"
import Product from "./components/Product"


export default function App() {
    const [data, setData] = React.useState(dataJSON)
    const [adhesives, setAdhesives] = React.useState(dataJSON['adhesives-2022'])
    const [cosmetics, setCosmetics] = React.useState(dataJSON['cosmetics-2022'])
    const [detergents, setDetergents] = React.useState(dataJSON['detergents-2022'])
    const [schwarzkopf, setSchwarzkopf] = React.useState(dataJSON['schwarzkopf-Professional-2022'])

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

    const elements = schwarzkopf.map(item => <Product imgUrl={item.url} name={item.name} price={item.price} capacity={item.capacity}/>)

    return(
        <div className="main-container">
            <div className="buttons">
                <div>Adhesives</div>
                <div>Cosmetics</div>
                <div>Detergents</div>
                <div>Schwarzkopf</div>
            </div>
            <div className="products">
                {elements}
            </div>
        </div>

    )
}