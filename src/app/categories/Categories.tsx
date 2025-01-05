"use client"
import React from "react";
import { motion } from 'framer-motion'
import CategoryCard from "./categorycard";



export default function Categories({ options }: { options: CategoryCard[] }) {

    return (
        <motion.div
            className="grid grid-cols-3 gap-6 h-screen "
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}>
            {options.map((option) => (
                <Options title={option.title} description={option.description} img={option.img} buttontitle={option.buttontitle} alt={option.alt} key={option.description}></Options>
            ))}
        </motion.div>

    );
}

const Options: React.FC<OptionsProps> = (props) => {
    return (
        <motion.div
            className="inter-var flex"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}>
            <CategoryCard {...props} />
        </motion.div>
    );
}



