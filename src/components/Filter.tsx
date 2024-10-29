"use client"
import React from 'react';
import CustomFormField from './Form field/CustomFormField';
import DropdownField from './Form field/DropdownField';
import useItemFilter from '@/hooks/useItemFilter';



const Filter = () => {
    const { filterInput,handleFilterChange }=useItemFilter()

    return (
        <div className="flex justify-between w-[80%] mt-12 border-2 border-red-500">
            <div className="w-full md:mid2Temps lg:flex lg: gap-6 grid grid-cols-smallTemp">
                {/* Dropdown field */}
                <CustomFormField
                    type='dropdown'
                    data={[{ label: "Physical", value: "Physical" }, { label: "Digital", value: "Digital" }]}
                    name='type'
                    value={filterInput.Type}
                    dataLabel='Type'
                    className=''
                    onChange={handleFilterChange}
                />

                {/* Min and Max price inputs */}
                <CustomFormField
                    type="text"
                    name="min"
                    placeholder="Min price"
                    value={filterInput.MinPrice}
                    onChange={handleFilterChange}
                    className=" h-[2rem] font-medium rounded-[6px] pl-2 w-[7rem] focus:outline-none border-[1px] border-red-400"
                />
                <CustomFormField
                    type="text"
                    name="maxpice"
                    placeholder="Max price"
                    value={filterInput.MaxPrice}
                    onChange={handleFilterChange}
                    className=" h-[2rem] font-medium rounded-[6px] pl-2 w-[7rem] focus:outline-none border-[1px] border-red-400"
                />

                {/* Additional dropdown fields */}
                <CustomFormField
                    type='dropdown'
                    data={[{ label: "New Arrival", value: "New Arrival" }, { label: "Popular", value: "Popular" }]}
                    name='category'
                    value={filterInput.category}
                    dataLabel='category'
                    className=''
                    onChange={handleFilterChange}
                />
                <CustomFormField
                    type='dropdown'
                    data={[{ label: "All Filters", value: "All Filters" },]}
                    name='subcategory'
                    value={filterInput.subcategory}
                    dataLabel='All Filters'
                    className=''
                    onChange={handleFilterChange}
                />
               
            </div>
            <div className="">
                <CustomFormField
                    type='dropdown'
                    data={[{ label: "Price (low to high)", value: "plow to highrice" }, { label: "Price (high to low)", value: "high to low" }, { label: "Newest", value: "Newest" }, { label: "Oldest", value: "Oldest" }]}
                    name='sort'
                    value={filterInput.sort}
                    dataLabel='Sort By'
                    className=''
                    onChange={handleFilterChange}
                />
            </div>
        </div>
    );
}

export default Filter;
