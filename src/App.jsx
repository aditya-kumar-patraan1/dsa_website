import { useState } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import Navbar from "./Navbar";
import Body from "./Body";
import ImageArea from "./ImageArea";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import GridArea from './GridArea.jsx';
import FriendStory from './FriendStory.jsx'
import MoreFeedbacks from './MoreFeedbacks.jsx'
import DownloadArea from './DownloadSection.jsx'
import MemberShipPage from './MemberShipPage.jsx'
import AccordianPage from './AccordianPage.jsx'
import Footer from './Footer.jsx'
import SortingVisualizer from './SortingVisualizer.jsx';
import SortingHomePage from './SortingHomePage.jsx'
import Page3Sort  from "./Page3Sort.jsx";
import Page4Sort  from "./Page4Sort.jsx";
import SortingVideoPage from './SortingVideoPage.jsx';
import SortFooter from './SortFooter.jsx';
import TodoList from './TodoList.jsx';
import CodeEditor from './CodeEditor.jsx';

function App() {
  return (
    <>
      <div id="root" className="flex flex-col">
        <Navbar />

        <Body/>

        <ImageArea/>


        how it works
        <Card1/>
        <Card2/>
        <Card3/>  


        <GridArea/>


        <FriendStory/>


        <MoreFeedbacks/>



         <DownloadArea />

        <MemberShipPage />

        <AccordianPage />



        <Footer /> 

        <SortingVisualizer />


        {/* <SortingHomePage /> */}
        {/* <SortingVideoPage /> */}


        {/* <Page3Sort /> */}
        {/* <Page4Sort /> */}


        {/* <SortFooter /> */}


        {/* <TodoList /> */}

        {/* <CodeEditor /> */}
        
      </div>
    </>
  );
}

export default App;
