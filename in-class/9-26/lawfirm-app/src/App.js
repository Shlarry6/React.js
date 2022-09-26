import React, { useState } from 'react';
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


function App() {
  const [showPromise, setShowPromise] = useState(false);

  const showPromiseHandler = () => {
    setShowPromise(true);
  };
  const hidePromiseHandler = () => {
    setShowPromise(false);
  };

  console.log(window.location);

  return (
    <Layout>
      {window.location.pathname === "/" && 
      <>
        <Adbox onShow={showPromiseHandler} onHide={hidePromiseHandler} promise={showPromise} />
        <StatePlayground />
        <Highlight showPromise={showPromise} />
        <Featured />
      </>
      }
      {window.location.pathname === "/contact" &&
        <>
          <Sidebar><ContactSidebar/></Sidebar>
          <Main><ContactForm/></Main>
        </>
      }
    </Layout>
  );
}

export default App;
