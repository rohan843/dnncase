1. Compiler execution begins with known set of files and file to begin execution in.
2. Parse all files into in-memory structures.
3. Compiler starts top-level artefact topological sorting for scheduling:
   1. Start from initial artefact.
   2. Scan the current artefact for a list of other artefacts used in it (via `FunctionNode -> ImportedArtefact or CallBackNode`).
   3. Treat these other artefacts as neighbors of current artefact to perform a topological sort among the artefacts existing in the system.
   4. Prepare an array containing the sequence of artefacts relevant to the current compilation, starting with the one that has no incoming dependencies, and ending at the artefact with >=1 dependencies (the initial artefact).
   5. Return this **artefact compilation schedule**.
4. Begin compilation of artefacts accoring to the schedule from (3). In each compilation:
   1. Map the current artefact's type to an appropriate compilation method.
   2. Traverse the nodes of the artefact in a topologically sorted way. Only generate code for a node once all its incoming edges have data on them.
   3. Once a node is ready to emit data, place the data on its output edge(s).
   4. Once the code for an artefact is generated, place it in a function and output the function in the output file.
   5. Store the name of the artefact's function mapped to its internal reference.
5. The artefact which was the initial artefact, its function must be called on the top level at the end of the file.