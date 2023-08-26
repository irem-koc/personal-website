import './App.css';
import DotRing from './components/DotRing';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
// https://elisc-react.vercel.app/index-one-page#home website
function App() {
  return (
    <div className="App">
      <DotRing />
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
