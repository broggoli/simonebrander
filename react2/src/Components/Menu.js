import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import Loader from './Loader'

function Menu(props) {
    const pageData = props.menuProps;
    const root = props.root === "" ? props.root: `/${props.root}`;
    const location = useLocation();
    console.log(pageData, root)
    const length = pageData.length;
    let content = pageData.map((page, i) => 
        {   
            let slash = "";
            let activeClass = "";
            let dropDown = null;

            if (length !== i + 1) { slash = ` /`; }

            if(location.pathname.match([page.slug])) {
                activeClass = "underline";
            }

            if(page.subPages ) {
                dropDown = 
                <div className="dropDown bg-white w-auto sm:absolute sm:mt-6 flex flex-col space-y-3" >
                    {
                    page.subPages.map((subPage, i) => {
                        return (
                            <div key={`dropDownItem-${subPage.slug}`} className="dropDownItem whitespace-no-wrapspace-x-0 sm:scpae-x-10 bg-white sm:border-l border-black">
                                <Link
                                    to = {`${root}/${page.slug}/${subPage.slug}`}
                                    className="text-500 px-3 ">
                                        <span className="subPageTitle whitespace-no-wrap"> {`> ${subPage.title}`}</span>
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            }
            return (
                <div key={page.slug}>
                <div  className="menuItem flex flex-col">
                    <div className="">
                        <Link 
                            to = {`${root}/${page.slug}`}
                            className={`text-500 ${activeClass}`} >
                                {`${page.title}`}
                        </Link>
                    <span >{slash}</span>
                    </div>
                    {dropDown}
                </div>
                </div>
            )
            
        }
    )

    return (
        <header>
            <nav id="menu" className="flex flex-col text-lg sm:flex-row space-x-0 sm:space-x-10 space-y-2 sm:space-y-0 ">
                { content }
            </nav>
        </header>
    )
}

export default Menu