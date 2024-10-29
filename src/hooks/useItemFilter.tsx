import  { useState } from 'react'

const useItemFilter = () => {

    const [filterInput, setFilterInput] = useState({
        Type: "",
        MinPrice: "",
        MaxPrice: "",
        category: "",
        subcategory: "",
        sort: "",
    })
    // Dummy handler for the onChange events
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const event = {
            target: {
                name: e.target.name, // Pass the input's name
                value: e.target.type === "checkbox" ? e.target.checked : e.target.value, // Handle checkbox and other inputs
            },
        };
        console.log(event); // You can replace this with your actual logic
    };

    return {
        filterInput,
        handleFilterChange
    }
}

export default useItemFilter