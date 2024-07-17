
import './App.css';
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
function App() {
  return (
    <div>
      <Navbar/>
      <main className="main_container">
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App;
