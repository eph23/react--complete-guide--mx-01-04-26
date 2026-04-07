import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";


function App() {

    return (
        <>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <CoreConcepts />
                </section>
                <Examples />
            </main>
        </>
    );
}

export default App;
