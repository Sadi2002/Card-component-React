import Logo from "./test.webp";
import Human from "./human.avif";

export default function App() {
  return (
    <div className="container">
      <Image />
      <Title />
      <Description />
      <Stats />
      <User />
    </div>
  );
}

function Image() {
  return <img src={Logo} alt="test" />;
}

function Title() {
  return <h1>Camera on sea</h1>;
}
function Description() {
  return (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
      iusto.
    </p>
  );
}

function Stats() {
  return (
    <div className="stats">
      <span>21.00123</span>
      <span>1 day left</span>
    </div>
  );
}

function User() {
  return (
    <div className="user">
      <img src={Human} alt="" />
      <span>
        Created by <span className="user-name">Gabriel Kolang</span>
      </span>
    </div>
  );
}
