import React, {useState} from 'react';
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: "",
        role: "seeker",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        // console.log(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //preventDefault
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", formData)
            alert("Signup successfully");
            console.log(res.data);
        } catch (error) {
            alert(error.message || "Signup failed");
        }

    }
    
    return (
        <div className='flex justify-center text-white mt-16'>
            <form onSubmit={handleSubmit} className=' p-8 rounded-xl shadow-lg bg-gray-900'>
                <h1 className='text-2xl font-bold p-4 text-center'>Sign Up</h1>          
                <div className="mb-4">
                    <label htmlFor="name" className='block text-sm mb-1'>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        id='name'
                        onChange={handleChange}
                        required
                        className="w-96 px-3 py-2 text-white bg-gray-800  bg-gray-800"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className='block text-sm mb-1'>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        id='email'
                        onChange={handleChange}
                        required
                        className="w-96 px-3 py-2 bg-gray-800 rounded bg-gray-800"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className='block text-sm mb-1'>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        id='password'
                        onChange={handleChange}
                        required
                        className="w-96 px-3 py-2 bg-gray-800 rounded bg-gray-800"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="role" className='block text-sm mb-1'>Select your Role</label>
                    <select name="role" className="w-96 px-3 py-2 bg-gray-800 rounded" id="role" onChange={handleChange}>
                        <option value="seeker">Seeker</option>
                        <option value="recruiter">Recruiter</option>
                    </select>
                </div>

                <button type='submit' className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition">Signup</button>

                

            </form>
        </div>
    );
}

export default Signup;