import { Handle, Position,ReactFlowProvider } from "reactflow";

function DataVariableOutput(props) {

    return(
      <div className="flex ml-20">
        
       <div className="data-variable-out">
            <span>{props.content}</span>
        </div>

        <div className="triangle-right">
        <ReactFlowProvider>
            <Handle
        className="border-black rounded-full bg-gray-600"
        position={Position.Right}
        type="target"
        id="multi-in"
      />
      </ReactFlowProvider>
        </div>
        
   </div>
    )
}

export default DataVariableOutput
