'use client'
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Collapse } from 'react-collapse';

const AccordionItem = ({ open, toggle, title, desc }) => {
    return (
        <div className="pt-2">
            <div
                className="bg-white py-6 px-12 flex justify-between items-center cursor-pointer"
                onClick={toggle}
            >
                <p className="text-lg font-semibold">{title}</p>
                <div className="text-xl">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className="bg-white px-12 pb-4">{desc}</div>
            </Collapse>
        </div>
    );
};

export default AccordionItem;
