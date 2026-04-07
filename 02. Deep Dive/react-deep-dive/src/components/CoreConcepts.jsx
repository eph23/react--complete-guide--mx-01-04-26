import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "../components/CoreConcept.jsx";

function CoreConcepts() {
    return (
        <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
        </ul>
    );
}

export default CoreConcepts;
