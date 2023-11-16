const file = {
  edges: [
    {
      id: String,
      source: String,
      target: String,
      sourceHandle: String,
      targetHandle: String,
    },
  ],
  nodes: [
    {
      id: String,
      position: {
        x: Number,
        y: Number,
      },
      data: {
        artefactID: String,
        hyperparams: [{ id: String, value: String }],
        commentText: String,
        commentType: "plain" | "markdown",
        isTODO: Boolean,
        inputHandles: [
          String, // IDs
        ],
        outputHandles: [
          String, // IDs
        ],
        reusable: Boolean,
        reuseCount: Number,
      },
      type: String,
    },
  ],
};
