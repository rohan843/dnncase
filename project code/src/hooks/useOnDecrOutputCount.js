// This hook has a very specific use case. It returns a function that can be passed to the IncrDecrToolbar for the purpose of handling its 'onDecrement' event.

const useOnDecrOutputCount = (minAllowedOutputs = 0) => {
  return (setNodes, curNodeId, curOutputCount) => {
    if (curOutputCount === minAllowedOutputs) return;
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== curNodeId) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, outputCount: curOutputCount - 1 },
          };
      })
    );
  };
};

export default useOnDecrOutputCount;
