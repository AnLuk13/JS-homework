import "../css/WelcomePage.css";

function WelcomePage({ userName }) {
  return (
    <div>
      <h1 className="h1">Hello, {userName}</h1>
    </div>
  );
}

export default WelcomePage;
