import React, {  useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "../Component/style.css";
const Button = ({ data }) => {
  const { id } = useParams();
  const selectedItem = data.find((item) => item.show.id.toString() === id);
  const [model, setModel] = useState(true);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const renderMessage = (text) => {
    return { __html: text };
  };

  if (!selectedItem) {
    return <div>Loading...</div>;
  }
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

   
    if (name === "" || email === "" || number === "") {
      alert("All Field are required");
    } else {
      const formData = {
        moviename: selectedItem?.show?.name,
        name,
        email,
        number,
      };

      const storedData = JSON.parse(localStorage.getItem("formData")) || [];
      storedData.push(formData);
      localStorage.setItem("formData", JSON.stringify(storedData));

     
      console.log("data ", storedData);
      closeModal();
    }
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(!modalIsOpen);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="parent">
        <img src={selectedItem?.show?.image?.medium} />
        <div className="content">
          <h5>Movie Name : {selectedItem?.show?.name}</h5>
          <div className="child">
            <span>Summary:</span>
            <p
              dangerouslySetInnerHTML={renderMessage(
                selectedItem?.show?.summary
              )}
            ></p>
          </div>

          <button className="btn btn-primary" onClick={openModal}>
            Book Ticket
          </button>
        </div>
      </div>
      {model && (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <form onSubmit={handleFormSubmit}>
              <div className="form">
                <h1 htmlFor="">Movie Name: {selectedItem?.show?.name}</h1>
                <div className="input">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="userName"
                    value={name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input">
                  <label>Number:</label>
                  <input
                    type="number"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                  />
                </div>

                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Button;
