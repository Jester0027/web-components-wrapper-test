import { AppCounter, MyComponent, defineCustomElements } from "react-wrapper";

defineCustomElements();

function App() {
  return (
    <>
      <MyComponent first="John" middle="Doe" last="Smith" />
      <AppCounter />
    </>
  );
}

export default App;
