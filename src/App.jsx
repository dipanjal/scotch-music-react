import './App.css'
import NavBar from "./components/core/NavBar.jsx";
import TextSphereContainer from "./components/TextSphereContainer.jsx";


function App() {
  return (
      <>
          <div className="scotch-container">
              <NavBar />
              <div className="main-container">
                  <TextSphereContainer />
                  <div className="learn-arrow">
                      <div className="learn">LEARN MORE</div>
                      <div className="arrow">🢓</div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default App
