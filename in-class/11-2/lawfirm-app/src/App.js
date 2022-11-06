import React, { useState, useCallback } from 'react';
import './App.css';
import Layout from './components/UI/Layout/Layout';
import Adbox from './components/body/Adbox';
import Featured from './components/body/Featured';
import Highlight from './components/body/Highlight';
import StatePlayground from './components/StatePlayground/StatePlayground';
import Sidebar from './components/UI/Sidebar/Sidebar';
import ContactSidebar from './components/Contact/ContactSidebar';
import ContactForm from './components/Contact/ContactForm';
import Main from './components/UI/Main/Main';
import ContactList from './components/Contact/ContactList';
import {RequestContextProvider} from './Store/request-context';
import Practices from './components/practices/Practices';

function App() {
  const [showPromise, setShowPromise] = useState(false);
  // const [requests, setRequests] = useState();

  const showPromiseHandler = useCallback(() => {
    setShowPromise(true);
  }, []);
  const hidePromiseHandler = useCallback(() => {
    setShowPromise(false);
  }, []);

  let content;

  switch (window.location.pathname) {
    case "/":
      content = <>
        <Adbox 
        onShow={showPromiseHandler} 
        onHide={hidePromiseHandler} 
        // promise={showPromise} 
        />
        {/* <StatePlayground /> */}
        <Highlight showPromise={showPromise} />
        <Featured />
      </>;
      break;
    case "/contact":
      content = <>
        <Sidebar><ContactSidebar /></Sidebar>
        <Main><RequestContextProvider><ContactForm /></RequestContextProvider></Main>
      </>;
      break;
    case "/requests":
      content = <>
        <Sidebar><ContactSidebar /></Sidebar>
        <Main><RequestContextProvider><ContactList /></RequestContextProvider></Main>
      </>;
      break;
    case "/practices":
      content = <>
        <Sidebar><ContactSidebar/></Sidebar>
        <Main><Practices /></Main>
      </>
      break;
    default:
        content = <div>The content you requested could not be found.</div>
  };

  return (
    <Layout>
      {content}
    </Layout>
  );
}

export default App;
