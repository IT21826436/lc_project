// import React, { useState } from 'react'

// export default function test1() {
//   const [items, setItems] = useState([])

// const handleAddItem = () => {
//   // Generate a unique id for the new item
//   const newItemId = Date.now();

//   // Create a new item object with default values
//   const newItem = {
//     id: newItemId,
//     name: '',
//     age: '',
//     gender: 'Male',
//     date: '',
//     examLevel: '',
//     grade: '',
//   };

//   // Add the new item to the list
//   setNumOfChilds([...numOfChilds, newItem]);
// };
//   return (
//     <div>
//       <div data-repeater-list="group-a">
//                   <div className="row" data-repeater-item>
//                     <form className="form-repeater">
//                       <div data-repeater-list="group-a">
//                         <div className="row" data-repeater-item>
//                           <div class="col-md-6 mb-3">
//                             <label class="form-label" for="form-repeater-1-1">
//                               Name
//                             </label>
//                             <input
//                               type="text"
//                               id="form-repeater-1-1"
//                               class="form-control"
//                               placeholder="john.doe"
//                             />
//                           </div>

//                           <div class="col-md-6 mb-3">
//                             <label class="form-label" for="form-repeater-1-1">
//                               age
//                             </label>
//                             <input
//                               type="number"
//                               id="form-repeater-1-1"
//                               class="form-control"
//                               placeholder="john.doe"
//                             />
//                           </div>

//                           <div class="col-md-6 mb-3">
//                             <label class="form-label" for="form-repeater-1-3">
//                               Gender
//                             </label>
//                             <select id="form-repeater-1-3" class="form-select">
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                             </select>
//                           </div>

//                           <div class="col-md-6 mb-3">
//                             <label
//                               for="html5-date-input"
//                               class="col-md-2 col-form-label"
//                             >
//                               Date
//                             </label>
//                             <div class="">
//                               <input
//                                 class="form-control"
//                                 type="date"
//                                 value="2021-06-18"
//                                 id="html5-date-input"
//                               />
//                             </div>
//                           </div>

//                           <div class="col-md-6 mb-3">
//                             <label
//                               for="exampleFormControlSelect1"
//                               class="form-label"
//                             >
//                               exam level
//                             </label>
//                             <select
//                               class="form-select"
//                               id="exampleFormControlSelect1"
//                               aria-label="Default select example"
//                             >
//                               <option selected="">select level</option>
//                               <option value="1">level 1</option>
//                               <option value="2">level 2</option>
//                               <option value="3">level 3</option>
//                               <option value="3">level 4</option>
//                             </select>
//                           </div>
//                           <div class="col-md-6 mb-3">
//                             <label
//                               for="exampleFormControlSelect1"
//                               class="form-label"
//                             >
//                               grade
//                             </label>
//                             <select
//                               class="form-select"
//                               id="exampleFormControlSelect1"
//                               aria-label="Default select example"
//                             >
//                               <option selected="">select grade</option>
//                               <option value="1">grade 1</option>
//                               <option value="2">grade 2</option>
//                               <option value="3">grade 3</option>
//                               <option value="3">grade 4</option>
//                             </select>
//                           </div>

//                           <div className="col-md-12 d-flex justify-content-between mb-4 mt-3">
//                             <button
//                               className="btn btn-success btn-sm text-nowrap px-3"
//                               type="button"
//                               data-repeater-create
//                               onClick={handleAddItem}
//                             >
//                               <i className="bx bx-plus" /> Add More
//                             </button>
//                             <button
//                               className="btn btn-danger btn-sm text-nowrap px-3"
//                               type="button"
//                               data-repeater-delete
//                             >
//                               <i className="bx bx-x" /> Remove
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                   <div className="col-md-12 d-flex justify-content-between mb-4 mt-3"></div>
//                 </div>
//     </div>
//   )
// }
