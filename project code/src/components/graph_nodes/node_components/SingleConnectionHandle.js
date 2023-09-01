import { Handle, getConnectedEdges, useNodeId, useStore } from "reactflow";

function SingleConnectionHandle(props) {
  const enclosingNodeId = useNodeId();
  const isConnectable = useStore((s) => {
    const node = s.nodeInternals.get(enclosingNodeId);
    const connectedEdges = getConnectedEdges([node], s.edges);
    const handleId = props.id;
    const isCurHandleASource = props.type === "source";
    return (
      connectedEdges.filter((edge) => {
        if (isCurHandleASource) {
          return (
            edge.sourceHandle === handleId && edge.source === enclosingNodeId
          );
        } else {
          return (
            edge.targetHandle === handleId && edge.target === enclosingNodeId
          );
        }
      }).length === 0
    );
  });

  return <Handle {...props} isConnectable={isConnectable} />;
}

export default SingleConnectionHandle;
