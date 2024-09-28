import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

console.log('Amplify.configure before');
Amplify.configure(outputs);
console.log('Amplify.configure after');

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      {/*can be wrapped here using Authenticator : https://aws.amazon.com/blogs/mobile/amplify-gen2-ga/*/}
    <App />
  </React.StrictMode>
);
