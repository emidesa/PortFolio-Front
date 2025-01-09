
const Homepage = () => {
  return (
    <div style={{ display: 'flex' }}>
     
      <main
        style={{ 
          backgroundColor: '#2E2D2D',
          minHeight: '100vh',
          flex: 1,
          marginLeft: '250px', // Même largeur que la navbar
          padding: '2rem',
          color: 'white',
        }}
      >
        <div className="container">
          <h1 className="display-2 mb-4">Hi,</h1>
          <h1 className="display-2 mb-4">
            I'm <span  style={{
      background: "linear-gradient(90deg, #FF6B6B, #8B0000)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}>Emeline</span>,
          </h1>
          <h1 className="display-2 mb-4">Web developer.</h1>
          <p className="text-white mb-5">Fullstack developer</p>
          <button
            className="btn px-4 py-2"
            style={{
            background: "linear-gradient(90deg, #FF6B6B, #8B0000)",
              color: 'white',
              borderRadius: '5px',
              border:"1px solid white",
            }}
          >
            Contact Me !
          </button>
        </div>
      </main>
    </div>
  );
}

export default Homepage;

