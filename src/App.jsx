import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <div className="scotch-container">
              <nav>
                  <a href="#">CONTACT</a>
                  <a href="#">ABOUT</a>
                  <a href="#" className="buy">BUY NOW</a>
              </nav>
              <div className="main-container">
                  <div className="text-sphere-container">
                      <div className="text-container">
                          <h1>Scotch</h1>
                          <h2>VIDEOCASSETTE EG</h2>
                          <h3>T 120</h3>
                          <p>Designed by the inventors of videotape, this Scotch EG Videocasette gives your superior
                              performance</p>
                          <a href="https://www.amazon.com/-/es/Scotch-Cinta-blanco-T-120-est%C3%A1ndar/dp/B008C7Z54Y"
                             className="buy-cta">Buy Now</a>
                      </div>
                      <a href="https://www.amazon.com/-/es/Scotch-Cinta-blanco-T-120-est%C3%A1ndar/dp/B008C7Z54Y">
                          <div className="sphere"></div>
                      </a>
                  </div>
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
