import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const Edit = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const CurrentContacts = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  useEffect(() => {
    if (CurrentContacts) {
      setName(CurrentContacts.name);
      setEmail(CurrentContacts.email);
      setNumber(CurrentContacts.number);
    }
  }, [CurrentContacts]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !number) {
      return toast.warn("Plaes fill all feilds");
    }

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    console.log(checkEmail);

    if (checkEmail) {
      return toast.error("Email Already Exists");
    }

    const checknumber = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === number
    );

    if (checknumber) {
      return toast.error("Num Already Exists");
    }

    const checkname = contacts.find((contact) => contact.name === name);

    if (checkname) {
      return toast.error("Name Already Exists");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATED_CONTACT", payload: data });
    toast.success("Updated Contact Succesfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        {CurrentContacts ? (
          <>
            <h1 className=" display-3 text-center  ">Edit Contact {id}</h1>
            <div className="col-md-6 shadow  mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Name"
                    className="form-control "
                  />
                </div>

                <div className="form-group my-3">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="number"
                    placeholder="Enter Phone Number"
                    className="form-control"
                  />

                  <button
                    className="my-2 btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Updarted
                  </button>

                  <Link className="my-2 btn btn-danger mx-5" to="/">
                    cancel
                  </Link>
                </div>
              </form>
            </div>
          </>
        ) : (
          <h1> {id} id not found</h1>
        )}
      </div>
    </div>
  );
};
