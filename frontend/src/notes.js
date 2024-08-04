import { useEffect, useState } from "react";
import axios from 'axios'



const Notes = () => {

    const [notes, setNotes] = useState(null)

    useEffect(()=> {
        fetchNotes();
    },[])

    const fetchNotes = async() => {
        const res = await axios.get('http://localhost:5000/data')

        console.log(res)
    }


    return(
        <div>
            I am Abhishek Sinha
        </div>
    )
}


export default Notes;