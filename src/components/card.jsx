import React from 'react'

const Card = ({ data }) => {
    const { title, icon } = data
    return (
        <div className="w-[250px] shadow-xl h-[200px] rounded-md flex flex-col justify-center items-center hover:bg-gray-700 hover:text-white text-gray-700  transition-all bg-lightGrey cursor-pointer">
            <div>
                <h1 className="font-bold text-4xl">{icon}</h1>
            </div>
            <p className="text-lg tracking-wide font-semibold pt-5">{title}</p>
        </div>
    )
}

export default Card