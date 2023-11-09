import { SubcomponentsIndex } from "./subcomponents";

function ConfigBasedSubcomponentDisplay({ config }) {
  const renderedChildren = config.map((subcomponentConfig) => {
    const Subcomponent = SubcomponentsIndex[subcomponentConfig.componentType];
    return (
      <Subcomponent config={subcomponentConfig} key={subcomponentConfig.id} />
    );
  });
  return (
    <div className="w-full h-max break-words flex flex-col items-center justify-center">
      {renderedChildren}
    </div>
  );
}
export default ConfigBasedSubcomponentDisplay;
