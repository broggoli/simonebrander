import React from 'react'
import Loader from '../Components/Loader'
import {useParams, Link} from 'react-router-dom'
import TutuComponent from '../Components/TutuComponent'
import Menu from '../Components/Menu'

function Projects(props){
    // Create your own Mock API: https://mockapi.io/
    const pages = props.combinedPages
    const slug = useParams().slug

    let content = null
    let menu = null

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
        const projectPages  = pages.data.filter( page => page.id === -1)[0];
        if( slug ) {
            const thisPage = projectPages.subPages.filter( subPage => subPage.slug === slug)[0];
            let componentOrText;

            let menuProps = thisPage?.unterseiten?.map( subPages => {
                return {
                    title: subPages.titel,
                    slug: subPages.slug
                }
            })

            switch(slug) {
                case "tutu-der-humor-meines-vaters":
                    componentOrText = <TutuComponent></TutuComponent>
                    menuProps = [{title: "Ein Figurenbeschrieb", slug: "figurenbeschrieb"}, ... menuProps]
                    break;
                default: 
                    componentOrText = <div dangerouslySetInnerHTML={ {__html: thisPage.inhalt} }></div>
                    break;
            }
            menu = <Menu root={`projekte/${thisPage.slug}`} menuProps={menuProps}> </Menu>
            console.log(menuProps)
            content = (
                <div>
                    <h1 className="font-bold text-2xl mb-3">{thisPage.titel}</h1>
                    {componentOrText}                    
                </div>
            )
        } else {
            /** No so slug found -> this is the project overview page */
            let projectsList = projectPages.subPages.map((projectPage, i) => 
            {
                return (
                    <Link to={`projekte/${projectPage.slug}`}>
                        <div key={projectPage.slug} className="w-full overflow-hidden px-6 py-4 border-b border-black">
                            <h2 className="text-xl">{projectPage.titel}</h2>
                            <div dangerouslySetInnerHTML={ {__html: projectPage.inhalt} }></div>
                        </div>
                    </Link>
                )
            });
            content = (
                <div className="flex flex-col">
                    {projectsList}
                </div>
            )
        }
    }

    return (
        <div>
            {menu}
            <div className="container mx-auto">
                    { content } 
            </div>
        </div>
    )
}

export default Projects