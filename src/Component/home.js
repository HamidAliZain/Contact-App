import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";

export const Home = () => {
  const contacts = useSelector((state) => state);
  const dipatch = useDispatch();

  const deletContact = (id) => {
    dipatch({ type: "DELET", payload: id });
    toast.success("Successfully deleted");
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-12 my-3 text-right  bt">
          <Link to="/add" className="btn btn-outline-dark ">
            Add Contact
          </Link>
        </div>

        <div className=" col-md-10 mx-auto">
          <table className="table table-hover media-size ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Account</th>
                <th scope="col">Number</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link
                        className="btn_me my-2 btn btn-primary"
                        to={`/edit/${contact.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deletContact(contact.id)}
                        className="btn_me  btn  btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
