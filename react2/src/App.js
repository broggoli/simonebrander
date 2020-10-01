import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import View from './Views/View'
import Projects from './Views/Projects'
import Loader from './Components/Loader'
import {useGetAllAsPages} from './Hooks/HttpRequests'

function App() {
  
  let combinedPages = useGetAllAsPages();

  let content = null

  if(combinedPages.error){
    content = <div>
      <div className="bg-red-300 p-3">
          Es gab einen Fehler, versuche es später noch einmal oder lade die Seite neu..
      </div>
    </div>
  }

  if(combinedPages.loading){
    content = <Loader></Loader>
  }

  if(combinedPages.data){
    let menuProps = combinedPages.data.map( page => {
      const subPages = page?.subPages?.map(subPage => { 
        return {
          title: subPage.titel,
          slug: subPage.slug
        }
      })
      return { 
        title: page.titel, 
        slug: page.slug,
        subPages: subPages
      }})
    
    content = (
      <Router>
        <div className="p-3">
          <Menu root="" menuProps={menuProps} />
          <Switch>
            <Route exact path="/simone-brander">
              <View page="simone-brander" combinedPages={combinedPages}/>
            </Route>
            <Route exact path="/">
              <Redirect to="/simone-brander" />
            </Route>
            <Route exact path="/projekte">
              <Projects page="/projekte" combinedPages={combinedPages}/>
            </Route>
            <Route path="/projekte/:slug">
              <Projects page="/projekte/:slug" combinedPages={combinedPages}/>
            </Route>
            <Route path="/kontakt">
            <View page="kontakt" combinedPages={combinedPages}/>
            </Route>
          </Switch>
        </div>

        <Footer />

      </Router>
    );
  }

  return (
    <div className="relative pb-10 min-h-screen">
      {content}
    </div>
  );
}

export default App;
