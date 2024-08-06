import {create} from 'zustand'

const noteStore = create((set)=> ({
    notes : [],

    fetchNotes : async()=> {
        const res = await axios.get('http://localhost:5000/data')
       
        const data = await res.data
        //setNotes(data)
        set({notes : res.data})
        
    }

}))


export default noteStore