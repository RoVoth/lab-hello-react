import MenuOption from "./MenuOption";

function Index() {
  return (
    <div>
      <div id="App-header">
        <h1>
          Say Hello to <br />
          ReactJS
        </h1>
        <p>
          You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer.
        </p>

        <a href="">
          <button>
            <h2>Awesome!</h2>
          </button>
        </a>
      </div>
      <section id="downSection">
        <div>
          <MenuOption />
        </div>
      </section>
    </div>
  );
}
export default Index;
