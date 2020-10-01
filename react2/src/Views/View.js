import React from 'react'
import Loader from '../Components/Loader'


function View(props){
    // Create your own Mock API: https://mockapi.io/
    const pages = props.combinedPages

    let content = null

    if(pages?.error){
        content = <div>
            <div className="bg-red-300 p-3">
                Konnte die Seite leider nicht laden...
            </div>
        </div>
    }

    if(pages?.loading){
        content = <Loader></Loader>
    }

    if(pages?.data){
        const thisPage = pages.data.filter( page => page.slug === props.page)[0]
        content = (
            <div>
                <div dangerouslySetInnerHTML={ {__html: thisPage.inhalt} }></div>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>
        </div>
    )
}

export default View