import React from "react";
import CardSection from "./components/CardSection/CardSection";
import MidSection from "./components/MidSection/MidSection";
import Navigation from "./components/Navigation/Navigation";
import PhoneSection from "./components/PhoneSection/PhoneSection";
function App() {
  return (
    <div className="App">
      <Navigation />
      <br />
      <PhoneSection />
      <MidSection />
      <CardSection />
    </div>
  );
}

export default App;
