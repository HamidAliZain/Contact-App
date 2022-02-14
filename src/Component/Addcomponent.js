import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



export const Addcontact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const contacts = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !number) {
            return toast.warn("Plaes fill all feilds")
        }

        const checkEmail = contacts.find(
            (contact) => contact.email === email
        );
        console.log(checkEmail)

        if (checkEmail) {
            return toast.error("Email Already Exists")
        }

        const checknumber = contacts.find(
            (contact) => contact.number === number
        );


        if (checknumber) {
            return toast.error("Num Already Exists")
        }


        const checkname = contacts.find(
            (contact) => contact.name === name
        );

        if (checkname) {
            return toast.error("Name Already Exists")
        }



        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number,
        }
        dispatch({ type: "ADD_CONTACT", payload: data })
        toast.success("Added Succesfully")
        navigate("/")
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className=' display-3 text-center  '>
                    Add Contact
                </h1>
                <div className='col-md-6 shadow  mx-auto p-5'>
                    <form >
                        <div className="form-group my-3">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className="form-control " />
                        </div>

                        <div className="form-group my-3">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" className="form-control" />
                        </div>

                        <div className="form-group my-3">
                            <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder="Enter Phone Number" className="form-control" />
                        </div>

                        <div className="form-group">
                            <input onClick={handleSubmit} type="submit" value="Student" className="btn btn-block btn-dark  " />
                        </div>

                    </form>
                </div>
            </div>
        </div>)
}
