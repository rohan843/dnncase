// This hook has a very specific use case. It returns a function that can be passed to the IncrDecrToolbar for the purpose of handling its 'onIncrement' event.

const useOnIncrOutputCount = () => {
  return (setNodes, curNodeId, currentOutputCount) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== curNodeId) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, outputCount: currentOutputCount + 1 },
          };
      })
    );
  };
};

export default useOnIncrOutputCount;
