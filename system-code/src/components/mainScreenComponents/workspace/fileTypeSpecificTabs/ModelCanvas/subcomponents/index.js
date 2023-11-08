import Title from "./Title";
import Button from "./Button";
import H from "./H";
import HierarchicalElementSelector from "./HierarchicalElementSelector";
import KeyValue from "./tables/KeyValue";
import Markdown from "./textAreas/Markdown";
import Plaintext from "./textAreas/Plaintext";

export const SubcomponentsIndex = {
  button: Button,
  "hierarchical-element-selector": HierarchicalElementSelector,
  title: Title,
  h: H,
  "table/key-value": KeyValue,
  "text-area/plaintext": Plaintext,
  "text-area/markdown": Markdown,
};
