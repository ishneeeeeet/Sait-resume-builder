// Loading.js
import { Loader, Placeholder } from 'rsuite';
import React from "react";

const Loading = () => {
  return <div>
  <Placeholder.Paragraph rows={8} />
  <Loader center content="loading" />
</div> // Replace this with your loading animation/UI
};

export default Loading;
