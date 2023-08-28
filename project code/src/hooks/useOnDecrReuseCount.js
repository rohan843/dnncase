// This hook has a very specific use case. It returns a function that can be passed to the IncrDecrToolbar for the purpose of handling its 'onDecrement' event.

const useOnDecrReuseCount = (minReuseCount = 2) => {
  return (setNodes, curNodeId, currentReuseCount) => {
    if (currentReuseCount === minReuseCount) return;
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== curNodeId) return { ...node };
        else
          return {
            ...node,
            data: { ...node.data, reuseCount: currentReuseCount - 1 },
          };
      })
    );
  };
};

export default useOnDecrReuseCount;
