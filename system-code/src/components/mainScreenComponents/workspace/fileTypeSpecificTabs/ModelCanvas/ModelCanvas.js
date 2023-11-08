import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";
import { useState } from "react";

const leftPaneConfig = [
  {
    id: "addalayerbutton",
    componentType: "button",
    show: true,
    innerText: "Add a Layer",
    onClick: () => {},
  },
  {
    id: "layerselector",
    componentType: "hierarchical-element-selector",
    show: false,
  },
  {
    id: "addapackerbutton",
    componentType: "button",
    show: true,
    innerText: "Add a Packer",
    onClick: () => {},
  },
  {
    id: "addarepeaterbutton",
    componentType: "button",
    show: true,
    innerText: "Add a Repeater",
    onClick: () => {},
  },
  {
    id: "addactivationsbutton",
    componentType: "button",
    show: true,
    innerText: "Activations",
    onClick: () => {},
  },
];

const rightPaneConfig = [
  {
    id: "titlerightpane",
    componentType: "title",
    show: true,
    innerText: "Conv2D Layer",
  },
  {
    id: "argumentsheading",
    componentType: "h",
    show: true,
    level: 1, // <1 | 2 | 3>
    innerText: "Arguments",
  },
  {
    id: "keyvalueparameters",
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
    id: "codecommentsheading",
    componentType: "h",
    show: true,
    level: 1,
    innerText: "Code Comments",
  },
  {
    id: "plaintextcodecomment",
    componentType: "text-area/plaintext",
    show: true,
    editsEnabled: false,
    innerText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque illum dolorum velit magni eos expedita tempore culpa libero dolore. Sunt fugit porro ducimus aperiam. Modi aliquid sequi odit possimus tempora?",
  },
  {
    id: "markdowncodecomment",
    componentType: "text-area/markdown",
    show: true,
    editsEnabled: false,
    innerText:
      "# Dummy Text\nLorem, ipsum dolor sit amet consectetur adipisicing elit.\n>Atque illum dolorum velit magni eos expedita tempore culpa libero dolore. Sunt fugit porro ducimus aperiam. Modi aliquid sequi odit possimus tempora?",
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
