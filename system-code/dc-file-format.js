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
        hyperparams: [{ hyperparamName: String }],
        commentText: String,
        commentType: "plain" | "markdown",
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
