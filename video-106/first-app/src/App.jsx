import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {


  return (
    <>
      <Navbar>

      </Navbar>

<div className="cards">
  <Card title="a" desc="card 1 desc"></Card>
  <Card title="b" desc="card 2 desc"></Card>
  <Card title="c" desc="card 3 desc"></Card>
  <Card title="d" desc="card 4 desc"></Card>
</div>

      <Footer>

      </Footer>
    </>
  )
}

export default App
