import { Handle, getConnectedEdges, useNodeId, useStore } from "reactflow";

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
