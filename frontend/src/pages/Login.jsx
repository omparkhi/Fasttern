import React, {useState} from 'react';
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
        // console.log(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            alert("Login successfully");
            console.log(res.data);
        } catch (error) {
            alert(error.message || "Login failed");
        }
    }

    return (
        <div className='flex justify-center text-white mt-16'>
            <form onSubmit={handleSubmit}  className=' p-8 rounded-xl shadow-lg bg-gray-900'>
                <h1 className='text-2xl font-bold p-4 text-center'>Login</h1>          

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

                <button type='submit' className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition">Login</button>

            </form>
        </div>
    );
};

export default  Login;