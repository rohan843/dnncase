import { Handle, Position,ReactFlowProvider } from "reactflow";
function DataVariable(props) {

    return(
       <div className="flex ml-20">
        <div className="triangle">
        <ReactFlowProvider>
            <Handle
        className="border-black rounded-full bg-gray-600"
        position={Position.Left}
        type="target"
        id="multi-in"
      />
      </ReactFlowProvider>
        </div>
        <div className="data-variable-in">
            <span>{props.content}</span>
            
        </div>
        
       </div>


    )
}

export default DataVariable


