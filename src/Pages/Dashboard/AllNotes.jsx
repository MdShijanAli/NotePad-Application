import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utilities/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../../hoocks/useTitle";

const AllNotes = () => {
  useTitle("All Notes")
  const { user } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/notes')
            .then(res => res.json())
            .then(data => {
                const filtr = data.filter(note => note?.email == user?.email)
                // console.log(filtr);
                setNotes(filtr);
            })
    }, [user])


  return (
    <>
       {notes.length? <div className="grid grid-cols-3 gap-5 m-10">
      {
        notes.map(note=> <div key={note?._id} className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{ note?.title}</h2>
            <p>{ note?.description}</p>
                 <div className="card-actions justify-end">
                   <button className="btn btn-primary">Read More</button>
                 </div>
         </div>
       </div>)
        }
      </div> :
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl bg-[#204162] px-10 py-5 rounded-md text-white font-semibold">You Don't Have any Note. Please make note <Link className="underline" to="/add-note">first</Link></h1>
      </div>}
    </>
  );
};

export default AllNotes;