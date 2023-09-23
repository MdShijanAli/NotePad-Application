import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hoocks/useTitle";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";


const SingleNote = () => {
  const {title, description, _id} = useLoaderData();
  // console.log(singleNote)
  useTitle(`${title}`)
  const navigate = useNavigate();
  

  const handleDelete = (_id) => {
    const url = `http://localhost:5000/note/${_id}`;
    console.log(url)
    fetch(url, {
      method: "DELETE",
    })
      .then(() => {
        toast.success("Note Deleted Successfully");
        navigate('/')
      })
      .catch(err => {
      toast.error(err)
    })
  }


  return (
    <div>
      <div className="card m-10 bg-base-100 shadow-xl">
  <div className="card-body">
          <h2 className="card-title">{ title}</h2>
          <p className=" break-words">{description }</p>
    <div className="card-actions justify-end">
      <button className="bg-green-800 rounded-full p-3"><BiEdit className="w-6 h-6 text-white"></BiEdit></button>
      <button onClick={()=>handleDelete(_id)} className="bg-red-700 rounded-full p-3"><RiDeleteBin6Line className="w-6 h-6 text-white"></RiDeleteBin6Line></button>
          </div>
  </div>
</div>
    </div>
  );
};

export default SingleNote;