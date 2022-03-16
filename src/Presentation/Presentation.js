import React from "react";
import "./Presentation.css";
// import { TabPanel } from "../lib/index-navbar.tsx";
// import { useTabs } from "../lib/index-navbar.tsx";
// import { TabSelector } from "../lib/TabSelector.tsx";

function Presentation() {
  // const [selectedTab, setSelectedTab] = useTabs(["me", "parcours", "vision"]);
  return (
    <div className="Presentation">
      {/* <nav className="tabs">
        <TabSelector
          isActive={selectedTab === "me"}
          onClick={() => setSelectedTab("me")}
        >
          Qui suis-je ?
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "parcours"}
          onClick={() => setSelectedTab("parcours")}
        >
          Mon parcours
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "vision"}
          onClick={() => setSelectedTab("vision")}
        >
          Ma vision
        </TabSelector>
      </nav> */}
      <div className="presentation-content">
        {/* <TabPanel hidden={selectedTab !== "me"}> */}
          <h1>Qui suis-je ?</h1>
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </p>
        {/* </TabPanel>
        <TabPanel hidden={selectedTab !== "parcours"}> */}
          <h1>Mon parcours</h1>
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </p>
        {/* </TabPanel>
        <TabPanel hidden={selectedTab !== "vision"}> */}
          <h1>Ma vision</h1>
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </p>
        {/* </TabPanel> */}
      </div>
    </div>
  );
}

export default Presentation;
