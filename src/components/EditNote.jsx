// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from "react";
import toast from "react-hot-toast";


// eslint-disable-next-line react/prop-types
const EditNote = ({id, title, description}) => {
 
  
  const [note, setNote] = useState({id, title, description});
   

    const handleUpdate = event => {
        event.preventDefault();
        console.log(note);
        fetch(`https://note-pad-server.vercel.app/note/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Note Updated Successfully!!!')
                  // navigate(`/note/${id}`)
                  window.location.href = `/note/${id}`;
                }
                console.log(data)
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const updateNote = { ...note }
        updateNote[field] = value;
        setNote(updateNote)

    }


  return (
    <div>
      <input type="checkbox" id="edit_note_modal" className="modal-toggle" />
      <div className="modal">
                 <div className="modal-box">
                 <form onSubmit={handleUpdate}>
                                <h3 className='text-center text-3xl font-semibold mb-10'>Add Note</h3>
                           
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
              <input type="text" defaultValue={title} disabled name="title" id="title" className="input input-bordered input-success w-full" />
                               </div>
            
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea onChange={handleInputChange} name="description" id="description" defaultValue={description} className="textarea textarea-success w-full textarea-lg" ></textarea>
                                </div>




                                <div className="modal-action">
                                    <button type='submit' htmlFor="edit-modal" className="btn bg-[#00b22d] text-white hover:bg-[#00b22d]">Save</button>
                                </div>
                            </form>
                  </div>
                  <label className="modal-backdrop" htmlFor="edit_note_modal">Close</label>
                  </div>
    </div>
  );
};

export default EditNote;