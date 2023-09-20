
const AddNote = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      <div className='fixed right-0 bottom-0'>
            <label htmlFor="add_note_modal">
                                  <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto' width="100" height="100" viewBox="0 0 93 93" fill="none">
                                              <g filter="url(#filter0_d_46_1632)">
                                                <circle cx="46.3791" cy="46.7595" r="31.1035" fill="#00b22d"/>
                                              </g>
                                                <path d="M46.3792 35.9758V57.5428" stroke="white" strokeWidth="3.2176" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M35.5957 46.7593H57.1627" stroke="white" strokeWidth="3.2176" strokeLinecap="round" strokeLinejoin="round"/>
                                                <defs>
                                                  <filter id="filter0_d_46_1632" x="0.275635" y="0.656006" width="92.2069" height="92.207" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                    <feOffset/>
                                                    <feGaussianBlur stdDeviation="7.5"/>
                                                    <feComposite in2="hardAlpha" operator="out"/>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.56087 0 0 0 0 1 0 0 0 0.4 0"/>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_46_1632"/>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_46_1632" result="shape"/>
                                                  </filter>
                                                </defs>
                                      </svg>
                               </label>
            </div>


            <input type="checkbox" id="add_note_modal" className="modal-toggle" />
      <div className="modal">
                 <div className="modal-box">
                 <form >
                                <h3 className='text-center text-3xl font-semibold mb-10'>Add Note</h3>
                           
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <input type="text" placeholder="Enter Title" required name="title" id="title" className="input input-bordered input-success w-full" />
                               </div>
            
                                <div className="mb-4">
                                    <label className="block dark:text-white text-gray-700 font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <textarea type="text" placeholder="Enter Title" required name="title" id="title" className="input input-bordered input-success w-full"/>
                                </div>




                                <div className="modal-action">
                                    <button type='submit' htmlFor="fund-modal" className="btn bg-[#00b22d] text-white hover:bg-[#00b22d]">Add Note</button>
                                </div>
                            </form>
                  </div>
                  <label className="modal-backdrop" htmlFor="add_note_modal">Close</label>
                  </div>
                
    </div>
  );
};

export default AddNote;