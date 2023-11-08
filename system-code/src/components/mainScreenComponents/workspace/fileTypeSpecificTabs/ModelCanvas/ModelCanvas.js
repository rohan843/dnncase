import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";
import { useState } from "react";

const leftPaneConfig = [
  {
    componentType: "button",
    show: true,
    innerText: "Add a Layer",
    onClick: () => {},
  },
  {
    componentType: ""
  },
  {
    componentType: "button",
    show: true,
    innerText: "Add a Packer",
    onClick: () => {},
  },
  {
    componentType: "button",
    show: true,
    innerText: "Add a Repeater",
    onClick: () => {},
  },
  {
    componentType: "button",
    show: true,
    innerText: "Activations",
    onClick: () => {},
  },
];

function ModelCanvas() {
  const [leftPaneOpen, setLeftPaneOpen] = useState(false);
  const [rightPaneOpen, setRightPaneOpen] = useState(false);
  return (
    <div className="h-full w-full background-lighter relative overflow-hidden">
      <GraphCanvas />
      <LeftPane
        open={leftPaneOpen}
        onOpen={() => {
          setLeftPaneOpen(true);
        }}
        onClose={() => {
          setLeftPaneOpen(false);
        }}
        config={leftPaneConfig}
      />
      <RightPane
        open={rightPaneOpen}
        onOpen={() => {
          setRightPaneOpen(true);
        }}
        onClose={() => {
          setRightPaneOpen(false);
        }}
      />
    </div>
  );
}

export default ModelCanvas;
