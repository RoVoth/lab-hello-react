import declarativeImg from "../images/icon1.png";
import componentsImg from "../images/icon2.png";
import singlewayImg from "../images/icon3.png";
import jsxImg from "../images/icon4.png";

function MenuOption() {
  return (
    <section id="options">
      <div>
        <h3>Declarative</h3>
        <p>Reacts makes it painless to create interactive Uls.</p>
        <img src={declarativeImg} alt="Declarative" width={"100px"} />
      </div>
      <div>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
        <img src={componentsImg} alt="Components" width={"100px"} />
      </div>
      <div>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
        <img src={singlewayImg} alt="Single-Way" width={"100px"} />
      </div>
      <div>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
        <img src={jsxImg} alt="JSX" width={"100px"} />
      </div>
    </section>
  );
}
export default MenuOption;
