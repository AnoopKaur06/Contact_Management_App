import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSave() {
        dispatch(addContact(form))
    }

    return (
        <div class="w-full h-full flex items-center"> 
        <div className="w-full max-w-md mx-auto my-4 pt-16 bg-white rounded-md shadow-lg p-8 border">
            <div>
            <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
            <div className="mb-4 flex flex-wrap">
                <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                    <label className="block font-bold mb-2" htmlFor="first-name">
                        First Name
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded-md"
                        id="first-name"
                        type="text"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-2">
                    <label className="block font-bold mb-2" htmlFor="last-name">
                        Last Name
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded-md"
                        id="last-name"
                        type="text"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="mobile">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="mobile"
                    type="number"
                    name="mob"
                    min="10"
                    max="10"
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md w-full"
                onClick={handleSave}
            >
                Save Contact
            </button>
            </div>
        </div>
        </div>
    );
}

export default ContactForm;