import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Dropdown() {
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("A");
  const [availableRooms, setAvailableRooms] = useState([
    {
      num: 101,
      type: "A",
    },
    {
      num: 103,
      type: "A",
    },
    {
      num: 104,
      type: "A",
    },
    {
      num: 106,
      type: "A",
    },
    {
      num: 201,
      type: "B",
    },
    {
      num: 203,
      type: "B",
    },
    {
      num: 301,
      type: "C",
    },
  ]);
  const [unavailableRooms, setUnavailableRooms] = useState([
    {
      num: 102,
      type: "A",
    },
    {
      num: 105,
      type: "A",
    },
    {
      num: 202,
      type: "B",
    },
    {
      num: 302,
      type: "C",
    },
  ]);
  const filteredDataAvailable = availableRooms.filter(
    (item) => item.type === selectedType
  );
  const filteredDataUnavailable = unavailableRooms.filter(
    (item) => item.type === selectedType
  );

  const handleCheckboxChange = (room) => {
    console.log("Available",availableRooms);
    console.log("Unavailable",availableRooms);
    console.log(room);
    // Open the modal
    setShowModal(true);
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setShowModal(false);
  }
  
  return (
    <>
      <div className="">
        <label>Choose the type of room :</label>
        <select
          className="select-btn ms-3"
          name="cars"
          id="cars"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="A">Type-A</option>
          <option value="B">Type-B</option>
          <option value="C">Type-C</option>
        </select>
      </div>
      <div>
        <h5>AvailableRooms</h5>
        <ul className="list-group">
          {filteredDataAvailable.map((room) => (
            <li className="list-group-item mt-1" key={room.num}>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                id="firstCheckbox"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label ms-2" htmlFor="firstCheckbox">
                Room-{room.num}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5>UnavailableRooms</h5>
        <ul className="list-group">
          {filteredDataUnavailable.map((room) => (
            <li className="list-group-item mt-1" key={room.num}>
              <label className="form-check-label ms-2" htmlFor="firstCheckbox">
                Room-{room.num}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                placeholder="please enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="please enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="please enter your phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Check IN
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="please enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Check Out
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="please enter your email"
              />
            </div>

            <button type="submit" className="btn btn-primary" >
              Book now
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Dropdown;
