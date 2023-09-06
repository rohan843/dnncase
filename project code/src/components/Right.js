function Right(props) {

  if(!props.nodes){
    return <div style={{height: "87.5vh", width: "15vw", border: "1px solid black"}}>
      No Node selected
      </div>;
  }
  
  const nodeToDisplay = props.nodes.find(node => node.id === props.text);

  if(!nodeToDisplay){
    return <div style={{height: "87.5vh", width: "15vw", border: "1px solid black"}}>
      No Node selected
      </div>;
  }

  return <div style={{height: "87.5vh", width: "15vw", border: "1px solid black"}}>
    Right
    <div className="info">HyperParameters : {props.text}</div>
    <pre>{JSON.stringify(nodeToDisplay.data.hyperparameters, null, 2)}</pre>
    </div>;
}

export default Right;
