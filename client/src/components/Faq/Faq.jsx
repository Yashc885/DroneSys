'use client'
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Faq = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    const entries = [
        {
            title: "Entry 1",
            desc: "Description for Entry 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula justo vitae mauris ultrices, sit amet congue turpis tincidunt."
        },
        {
            title: "Entry 2",
            desc: "Description for Entry 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "Entry 3",
            desc: "Description for Entry 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            title: "Entry 4",
            desc: "Description for Entry 4: Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, magna ac malesuada posuere, nulla ex auctor erat, in bibendum nisi mauris a libero."
        }
    ];
    
    return (
        <div>
            <section className="bg-gray-700 h-screen grid place-items-center">
                <div className="px-10 max-w-[800px]">
                    {entries.map((data, index) => (
                        <AccordionItem
                            key={index}
                            open={index === open}
                            title={data.title}
                            desc={data.desc}
                            toggle={() => toggle(index)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Faq;
