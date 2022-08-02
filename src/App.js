import "./App.css";
import Head from "./Head";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";


export default function App(){
    return(
        
        <div className="App">
            <img src="./me.png.jpg" alt="Sivakama" className="photo"></img>
            <Head/>
            <About/>
            <Interests/>
            <Footer />
        </div>
        
    )
}