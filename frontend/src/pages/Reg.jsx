import React, { useState, useEffect } from 'react';

export default function Reg() {
  const [items, setItems] = useState([
    {
      id: Date.now(),
      name: '',
      age: '',
      gender: 'Male',
      date: '',
      examLevel: '',
      grade: '',
    },
  ]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    if (storedItems.length > 0) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAddItem = () => {
    const newItemId = Date.now();

    const newItem = {
      id: newItemId,
      name: '',
      age: '',
      gender: 'Male',
      date: '',
      examLevel: '',
      grade: '',
    };

    setItems([...items, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    if (items.length > 1) {
      alert("Are you sure !!!")
      const updatedItems = items.filter((i) => i.id !== itemId);
      setItems(updatedItems);
    }
  };

  return (
    <div className='p-5'>
      <div data-repeater-list="group-a">
        {items.map((item, index) => (
          <div key={item.id} className="row" data-repeater-item>
            <form className="form-repeater">
              <div data-repeater-list="group-a">
                <div className="row d-flex justify-content-between" data-repeater-item>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor={`form-repeater-${item.id}-1`}>
                      Name
                    </label>
                    <input
                      type="text"
                      id={`form-repeater-${item.id}-1`}
                      className="form-control"
                      placeholder="john.doe"
                      value={item.name}
                      onChange={(e) => {
                        const updatedItems = items.map((i) =>
                          i.id === item.id ? { ...i, name: e.target.value } : i
                        );
                        setItems(updatedItems);
                      }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor={`form-repeater-${item.id}-2`}>
                      Age
                    </label>
                    <input
                      type="number"
                      id={`form-repeater-${item.id}-2`}
                      className="form-control"
                      placeholder="Age"
                      value={item.age}
                      onChange={(e) => {
                        const updatedItems = items.map((i) =>
                          i.id === item.id ? { ...i, age: e.target.value } : i
                        );
                        setItems(updatedItems);
                      }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor={`form-repeater-${item.id}-3`}>
                      Gender
                    </label>
                    <select
                      id={`form-repeater-${item.id}-3`}
                      className="form-select"
                      value={item.gender}
                      onChange={(e) => {
                        const updatedItems = items.map((i) =>
                          i.id === item.id ? { ...i, gender: e.target.value } : i
                        );
                        setItems(updatedItems);
                      }}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor={`form-repeater-${item.id}-4`} className="col-md-2 col-form-label">
                      Date
                    </label>
                    <div className="">
                      <input
                        className="form-control"
                        type="date"
                        id={`form-repeater-${item.id}-4`}
                        value={item.date}
                        onChange={(e) => {
                          const updatedItems = items.map((i) =>
                            i.id === item.id ? { ...i, date: e.target.value } : i
                          );
                          setItems(updatedItems);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor={`form-repeater-${item.id}-5`} className="form-label">
                      Exam Level
                    </label>
                    <select
                      className="form-select"
                      id={`form-repeater-${item.id}-5`}
                      aria-label="Default select example"
                      value={item.examLevel}
                      onChange={(e) => {
                        const updatedItems = items.map((i) =>
                          i.id === item.id ? { ...i, examLevel: e.target.value } : i
                        );
                        setItems(updatedItems);
                      }}
                    >
                      <option value="">Select Level</option>
                      <option value="1">Level 1</option>
                      <option value="2">Level 2</option>
                      <option value="3">Level 3</option>
                      <option value="4">Level 4</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor={`form-repeater-${item.id}-6`} className="form-label">
                      Grade
                    </label>
                    <select
                      className="form-select"
                      id={`form-repeater-${item.id}-6`}
                      aria-label="Default select example"
                      value={item.grade}
                      onChange={(e) => {
                        const updatedItems = items.map((i) =>
                          i.id === item.id ? { ...i, grade: e.target.value } : i
                        );
                        setItems(updatedItems);
                      }}
                    >
                      <option value="">Select Grade</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                    </select>
                  </div>

                  <div className="col-md-12 d-flex  mb-4 mt-3">
                    {index === items.length - 1 && (
                      <button
                        className="btn btn-success btn-sm text-nowrap px-3 me-2 "
                        type="button"
                        onClick={handleAddItem}
                      >
                        <i className="bx bx-plus" /> Add More
                      </button>
                    )}
                    {items.length > 1 && (
                      <button
                        className="btn btn-danger btn-sm text-nowrap px-3 "
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <i className="bx bx-x" /> Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}