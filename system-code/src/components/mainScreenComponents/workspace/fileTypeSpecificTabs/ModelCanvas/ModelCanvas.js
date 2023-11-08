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

const rightPaneConfig = [
  {
    componentType: "title",
    show: true,
    innerText: "Conv2D Layer",
  },
  {
    componentType: "h1",
    show: true,
    innerText: "Arguments",
  },
  {
    componentType: "table/key-value",
    show: true,
    content: [
      [
        {
          keyInnerText: "Demo Parameter",
          valueInnerText: 25,
          isValueEditable: true,
          removable: true,
        },
        {
          keyInnerText: "Demo Parameter",
          valueInnerText: 25,
          isValueEditable: false,
          removable: true,
        },
      ],
    ],
  },
  {
    componentType: "text-area/editable-text",
    show: true,
  },
  {
    componentType: "text-area/readonly-plaintext",
    show: true,
  },
  {
    componentType: "text-area/readonly-markdown",
    show: true,
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
        config={rightPaneConfig}
      />
    </div>
  );
}

export default ModelCanvas;
