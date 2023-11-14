// TODO: Make this and all its children stateless. Keep file-specific state in redux instead.

import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";
import { useDispatch, useSelector } from "react-redux";
import { applyConfigModifier } from "../../../../../store";
import {
  H1Button,
  HierarchicalElementSelector,
  Title,
  H,
  KeyValue,
  Plaintext,
  Markdown,
} from "./subcomponents";

const permissibleFileTypes = {
  dc: true,
};

function ModelCanvas({ activeFileIndex }) {
  const dispatch = useDispatch();
  const activeFileType = useSelector(
    (store) => store.filesystem.fsState[activeFileIndex].data.filetype
  );
  const config = useSelector((store) => store.viewConfig[activeFileIndex]);
  if (!config) {
    // TODO: Add code here to setup config to a value from backend (default config for this file type).
  }
  if (!permissibleFileTypes[activeFileType]) return null;

  return (
    <div className="h-full w-full background-lighter relative overflow-hidden">
      {/* <GraphCanvas /> */}
      <LeftPane
        open={config.leftPaneOpen}
        onOpen={() => {
          dispatch(
            applyConfigModifier({
              fileIndex: activeFileIndex,
              modifier: (config) => {
                config.leftPaneOpen = true;
              },
            })
          );
        }}
        onClose={() => {
          dispatch(
            applyConfigModifier({
              fileIndex: activeFileIndex,
              modifier: (config) => {
                config.leftPaneOpen = false;
              },
            })
          );
        }}
      >
        <H1Button show innerText="Layers" onClick={() => {}} />
        <HierarchicalElementSelector
          show
          options={[
            {
              id: "reusable",
              label: "apply reuse block.",
            },
            {
              id: "dummy1",
              label: "This is a dummy option that I put here.",
            },
            {
              id: "dummy2",
              label:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam numquam sunt a voluptatum deserunt, odit repellat impedit excepturi placeat est praesentium illo, soluta suscipit! Neque modi veniam nesciunt molestias?",
            },
          ]}
          contents={{
            root: {
              index: "root",
              isFolder: true,
              children: ["word-embeddings", "convolutional"],
              data: {},
            },
            "word-embeddings": {
              index: "word-embeddings",
              isFolder: true,
              children: ["embedding"],
              data: { name: "Word Embedding" },
            },
            embedding: {
              index: "embedding",
              isFolder: false,
              data: {
                name: "Embedding Layer",
              },
            },
            convolutional: {
              index: "convolutional",
              isFolder: true,
              children: [
                "conv2d",
                "deconv2d",
                "alongnameddeconv2dlayerwithasuperlooooongnamedeconv2d",
              ],
              data: { name: "Convolutional Layers" },
            },
            conv2d: {
              index: "conv2d",
              isFolder: false,
              data: {
                name: "Conv2D Layer",
              },
            },
            deconv2d: {
              index: "deconv2d",
              isFolder: false,
              data: {
                name: "DeConv2D Layer",
              },
            },
            alongnameddeconv2dlayerwithasuperlooooongnamedeconv2d: {
              index: "alongnameddeconv2dlayerwithasuperlooooongnamedeconv2d",
              isFolder: false,
              data: {
                name: "ALongNamedDeconv2DLayerWithASuperLooooongNameDeconv2D Layer",
              },
            },
          }}
          onSelect={(elementID, options) => {
            alert(`${elementID}, ${JSON.stringify(options)}`);
          }}
        />
        <H1Button show innerText="Add a Packer" onClick={() => {}} />
        <H1Button show innerText="Add a Repeater" onClick={() => {}} />
        <H1Button show innerText="Activations" onClick={() => {}} />
      </LeftPane>
      <RightPane
        open={config.rightPaneOpen}
        onOpen={() => {
          dispatch(
            applyConfigModifier({
              fileIndex: activeFileIndex,
              modifier: (config) => {
                config.rightPaneOpen = true;
              },
            })
          );
        }}
        onClose={() => {
          dispatch(
            applyConfigModifier({
              fileIndex: activeFileIndex,
              modifier: (config) => {
                config.rightPaneOpen = false;
              },
            })
          );
        }}
      >
        <Title show innerText="Conv2D Layer" />
        <H show level={1} innerText="Arguments" />
        <KeyValue
          show
          content={[
            {
              keyInnerText: "Demo Parameter 1",
              valueInnerText: 25,
              isValueEditable: true,
              removable: false,
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText: "Demo Parameter 2",
              valueInnerText: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa',
              isValueEditable: false,
              removable: false,
            },
            {
              keyInnerText: "Demo Parameter 3",
              valueInnerText: 25,
              isValueEditable: true,
              removable: true,
              onRemove: () => {
                alert("removed!");
              },
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText: "A very long Demo Parameter 4",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
            {
              keyInnerText: "Demo Parameter 5",
              valueInnerText:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              isValueEditable: true,
              removable: true,
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText: "Demo Parameter 6",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
            {
              keyInnerText: "Demo Parameter 7",
              valueInnerText: 25,
              isValueEditable: true,
              removable: true,
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
            {
              keyInnerText: "Demo Parameter 9",
              valueInnerText: 25,
              isValueEditable: true,
              removable: true,
              onValueChange: (newValue) => {
                console.log(newValue);
              },
            },
            {
              keyInnerText: "Demo Parameter 10",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
            {
              keyInnerText: "Demo Parameter 11",
              valueInnerText: 25,
              isValueEditable: false,
              removable: true,
            },
          ]}
          enableNewKeyValueInput
          onNewKeyValueInputSubmit={(key, value) => {
            alert(`${key}: ${value}`);
          }}
          onCancel={() => {
            alert("Cancelled");
          }}
          onAdd={() => {
            alert("add");
          }}
          onNewWindow={() => {
            alert("newWindow");
          }}
        />
        <H show level={1} innerText="Code Comments" />
        <Plaintext
          show
          innerText={
            "Lorem,\n\nipsum dolor sit amet consectetur adipisicing elit. Atque illum dolorum velit magni eos expedita tempore culpa libero dolore. Sunt fugit porro ducimus aperiam. Modi aliquid sequi odit possimus tempora?"
          }
          onChange={() => {}}
          onConvertToMarkdown={() => {}}
        />
        <Markdown
          show
          editsEnabled={false}
          innerText={
            "# Dummy Text\nLorem, [ipsum]() dolor _sit_ **amet** consectetur adipisicing elit.\n>Atque illum dolorum velit magni eos expedita tempore culpa libero dolore. Sunt fugit porro ducimus aperiam. Modi aliquid sequi odit possimus tempora?"
          }
          onChange={() => {}}
          onConvertToPlaintext={() => {}}
        />
      </RightPane>
    </div>
  );
}

export default ModelCanvas;
