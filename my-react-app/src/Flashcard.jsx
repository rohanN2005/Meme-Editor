import { useState } from "react";
const flashcard = ({question, answer}) =>{
    const [flipped, notFlipped] = useState(false)
    return(
        <div onclick = {() => notFlipped(!flipped)}
        className="w-64 h-40 border rounded-xl shadow-lg flex items-center justify-center text-center cursor-pointer transition-transform duration-300 bg-white hover:shadow-2xl">
            <p>
                {flipped ? answer:question}
            </p>
        </div>

        

    )
}