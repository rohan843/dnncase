const useOnDecrInputCount = (minInputCount = 0) => {
  return (setNodes, curNodeId, curInputCount) => {
    if (curInputCount === minInputCount) return;
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== curNodeId) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, inputCount: curInputCount - 1 },
          };
      })
    );
  };
};

export default useOnDecrInputCount;
