// This hook has a very specific use case. It returns a function that can be passed to the IncrDecrToolbar for the purpose of handling its 'onIncrement' event.

const useOnIncrReuseCount = () => {
  return (setNodes, curNodeId, currentReuseCount) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== curNodeId) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, reuseCount: currentReuseCount + 1 },
          };
      })
    );
  };
};

export default useOnIncrReuseCount;
