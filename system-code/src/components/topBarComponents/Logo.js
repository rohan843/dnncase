import logoImage from "../../assets/Logo.png";

function Logo() {
  return (
    <div className="pl-2 h-8 w-max">
      <img className="h-8" src={logoImage} alt="" />
    </div>
  );
}

export default Logo;
