import "../styles/App.css";
import Layout from "./Layout";
// import Signup from "./pages/Signup";
// import Home from './pages/Home'
// import Login from "./pages/Login";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        <Quiz />
        {/* <Login /> */}
      </Layout>
    </div>
  );
}

export default App;
