import { useState } from "react";

const Content = () => {
    const [name,setName] = useState("Jason");
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave', 'Jason', 'Mike', 'Mary', 'Amelia'];
        const int = Math.floor(Math.random() * names.length);
        setName(names[int]);
    }

    const handleClick = () => {
        console.log('Clicked');
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}> Change Name!</button>
        </main>
    )
}

export default Content