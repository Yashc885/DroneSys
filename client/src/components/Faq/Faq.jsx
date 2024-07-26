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
            title: "What types of drones are available for booking?",
            desc: "We offer a variety of drones for different needs, including consumer drones for photography and video, professional drones for surveying and inspections, and specialized drones for agricultural and environmental monitoring. You can view detailed specifications and choose the best drone for your needs on our 'Drones' page."
        },
        {
            title: "How do I book a drone?",
            desc: "Booking a drone is simple. Visit our booking page, select the drone you want to rent, choose the rental period, and fill in the necessary details. Once your booking is confirmed, you will receive a confirmation email with all the details and instructions."
        },
        {
            title: "What is included in the drone rental?",
            desc: "Each drone rental includes the drone itself, a battery, a charger, and a carrying case. Depending on the drone, additional accessories such as extra batteries, memory cards, or camera equipment may be included or available for an additional fee."
        },
        {
            title: "What are the rental rates?",
            desc: "Our rental rates vary depending on the type of drone and the duration of the rental. You can find detailed pricing information on our 'Rates' page. We offer daily, weekly, and monthly rental options to suit your needs."
        },
        {
            title: "Do I need any special licenses to operate a drone?",
            desc: "In many regions, you may need a drone operator's license or certification, especially for commercial use. Please check local regulations and ensure you have the required permissions before operating the drone. We can provide guidance on the necessary certifications if needed."
        },
        {
            title: "What happens if the drone is damaged or lost?",
            desc: "If the drone is damaged or lost during the rental period, you will be responsible for the repair or replacement costs. We offer optional insurance coverage to protect against accidental damage or loss. Please review our insurance options when booking."
        },
        {
            title: "Can I extend my rental period?",
            desc: "Yes, you can extend your rental period if the drone is available. Contact our support team as soon as possible to request an extension. We will adjust the rental charges accordingly and send you a confirmation."
        },
        {
            title: "What should I do if I encounter problems with the drone?",
            desc: "If you experience any issues with the drone during the rental period, please contact our support team immediately. We provide 24/7 customer support to assist with any technical problems or concerns you may have."
        },
        {
            title: "How do I return the drone?",
            desc: "Return the drone to the designated drop-off location specified in your booking confirmation. Ensure that all components, including the drone, battery, charger, and carrying case, are returned in good condition. Late returns may incur additional charges."
        },
        {
            title: "What is your cancellation policy?",
            desc: "You can cancel your booking up to 24 hours before the rental start time for a full refund. Cancellations made less than 24 hours before the rental period may incur a cancellation fee. Please review our cancellation policy on the 'Terms and Conditions' page for more details."
        }
    ];
    
    
    return (
        <div>
            <section className="bg-gray-700 py-12 md:py-16 mx-auto grid place-items-center">
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
