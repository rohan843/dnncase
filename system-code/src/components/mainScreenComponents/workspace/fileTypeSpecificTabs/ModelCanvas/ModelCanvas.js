// TODO: Make this and all its children stateless. Keep file-specific state in redux instead.

import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import GraphCanvas from "./GraphCanvas";
import { useDispatch, useSelector } from "react-redux";
import { setValueAtPath } from "../../../../../store";
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
            setValueAtPath({
              fileIndex: activeFileIndex,
              path: ["leftPaneOpen"],
              value: true,
            })
          );
        }}
        onClose={() => {
          dispatch(
            setValueAtPath({
              fileIndex: activeFileIndex,
              path: ["leftPaneOpen"],
              value: false,
            })
          );
        }}
      >
        <H1Button
          show
          innerText="Layers"
          onClick={() => {
            // toggle config.lefPane.layerSelector.show
            dispatch(
              setValueAtPath({
                fileIndex: activeFileIndex,
                path: ["leftPane", "layerSelector", "show"],
                value: !config.leftPane.layerSelector.show,
              })
            );
          }}
        />
        <HierarchicalElementSelector
          show={config.leftPane.layerSelector.show}
          options={[
            {
              id: "reusable",
              label: "apply reuse block",
            },
          ]}
          contents={
            // TODO: Get this from an artefactSlice.
            {
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
            }
          }
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
            setValueAtPath({
              fileIndex: activeFileIndex,
              path: ["rightPaneOpen"],
              value: true,
            })
          );
        }}
        onClose={() => {
          dispatch(
            setValueAtPath({
              fileIndex: activeFileIndex,
              path: ["rightPaneOpen"],
              value: false,
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
              valueInnerText:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
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
          show={config.rightPane.comment.type === "plain"}
          innerText={config.rightPane.comment.text}
          onChange={(newValue) => {
            dispatch(
              setValueAtPath({
                fileIndex: activeFileIndex,
                path: ["rightPane", "comment", "text"],
                value: newValue,
              })
            );
          }}
          onConvertToMarkdown={() => {
            dispatch(
              setValueAtPath({
                fileIndex: activeFileIndex,
                path: ["rightPane", "comment", "type"],
                value: "markdown",
              })
            );
          }}
        />
        <Markdown
          show={config.rightPane.comment.type === "markdown"}
          editsEnabled={config.rightPane.comment.markdownEditsEnabled}
          innerText={config.rightPane.comment.text}
          onChange={(newValue) => {
            dispatch(
              setValueAtPath({
                fileIndex: activeFileIndex,
                path: ["rightPane", "comment", "text"],
                value: newValue,
              })
            );
          }}
          onConvertToPlaintext={() => {
            dispatch(
              setValueAtPath({
                fileIndex: activeFileIndex,
                path: ["rightPane", "comment", "type"],
                value: "plain",
              })
            );
          }}
        />
      </RightPane>
    </div>
  );
}

export default ModelCanvas;
