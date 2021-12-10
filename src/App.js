import Pokemon from "./Pokemon";

function App() {
  return (
    <>
      <main style={{ height: "100vh" }}>
        <div className="text-center my-5 fs-1 fw-bolder text-decoration-underline text-warning">
          Pokelist
        </div>
        <div>
          <Pokemon />
        </div>
      </main>
    </>
  );
}

export default App;
