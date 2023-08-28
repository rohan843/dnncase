const useOnIncrInputCount = () => {
  return (setNodes, curNodeId, curInputCount) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== curNodeId) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, inputCount: curInputCount + 1 },
          };
      })
    );
  };
};

export default useOnIncrInputCount;
