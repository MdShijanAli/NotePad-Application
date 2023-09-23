import { useLoaderData } from "react-router-dom";
import useTitle from "../../hoocks/useTitle";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const SingleNote = () => {
  const singleNote = useLoaderData();
  console.log(singleNote)
    useTitle(`${singleNote?.title}`)
  return (
    <div>
      <div className="card m-10 bg-base-100 shadow-xl">
  <div className="card-body">
          <h2 className="card-title">{ singleNote?.title}</h2>
          <p className=" break-words">{singleNote?.description }</p>
    <div className="card-actions justify-end">
      <button className="bg-green-800 rounded-full p-3"><BiEdit className="w-6 h-6 text-white"></BiEdit></button>
      <button className="bg-red-700 rounded-full p-3"><RiDeleteBin6Line className="w-6 h-6 text-white"></RiDeleteBin6Line></button>
          </div>
  </div>
</div>
    </div>
  );
};

export default SingleNote;