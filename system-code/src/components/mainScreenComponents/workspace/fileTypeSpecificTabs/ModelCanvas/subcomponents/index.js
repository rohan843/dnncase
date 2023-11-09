import Title from "./Title";
import H1Button from "./H1Button";
import H from "./H";
import HierarchicalElementSelector from "./HierarchicalElementSelector";
import KeyValue from "./tables/KeyValue";
import Markdown from "./textAreas/Markdown";
import Plaintext from "./textAreas/Plaintext";
import { ConvLSTM2Dlayer, InputNode, OutputNode } from "./nodes";

export const SubcomponentsIndex = {
  "h1-button": H1Button,
  "hierarchical-element-selector": HierarchicalElementSelector,
  title: Title,
  h: H,
  "table/key-value": KeyValue,
  "text-area/plaintext": Plaintext,
  "text-area/markdown": Markdown,
};

export const Nodes = {
  layer: ConvLSTM2Dlayer,
  input: InputNode,
  output: OutputNode,
};
