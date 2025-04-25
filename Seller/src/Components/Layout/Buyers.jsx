import React from "react";
import Header from "../Layout/BuyerComp/header/Bheader";
import { Form } from "react-router-dom";
import FormSection from "./BuyerComp/formSection";
import PostSteps from "./BuyerComp/PostSteps";
import RecentlyPosted from "./BuyerComp/RecentlyPosted";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="p-6 ">
        <FormSection />
      </div>
      <PostSteps/>
      <RecentlyPosted />
    </div>
  );
};

export default App;
