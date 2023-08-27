import { Handle, getConnectedEdges, useNodeId, useStore } from "reactflow";

// TODO: This has the HIGHEST priority.
// FIXME: Modify this at line 8 to get the number of edges connected to the _handle_ not the node.
function SingleConnectionHandle(props) {
  const enclosingNodeId = useNodeId();
  const isConnectable = useStore((s) => {
    const node = s.nodeInternals.get(enclosingNodeId);
    const connectedEdges = getConnectedEdges([node], s.edges);
    return connectedEdges.length === 0;
  });

  return <Handle {...props} isConnectable={isConnectable} />;
}

export default SingleConnectionHandle;
