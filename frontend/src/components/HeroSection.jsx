import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-5'>
            <div className='flex flex-col gap-5 my-10 max-w-3xl mx-auto'>
                <span className='mx-auto px-6 py-2 rounded-full bg-white text-purple-600 font-medium shadow-lg'>Your Gateway to Success</span>
                <h1 className='text-6xl font-extrabold'>Find Your <span className='text-yellow-300'>Dream Job</span> <br /> With Just One Click</h1>
                <p className='text-lg opacity-90'>Explore thousands of job opportunities from top companies worldwide. Your career starts here!</p>
                <div className='flex w-full md:w-[60%] shadow-lg border border-gray-200 bg-white rounded-full items-center gap-4 mx-auto p-2'>
                    <input
                        type="text"
                        placeholder='Search job titles or companies...'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-black px-4 py-2 rounded-l-full'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-yellow-400 hover:bg-yellow-500 px-6 py-3">
                        <Search className='h-6 w-6 text-black' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
