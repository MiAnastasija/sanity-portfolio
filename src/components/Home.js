import React from "react";
import image from "../sky-night.png";

export default function Home () {
    return (
        <main>
            <img src={image} 
            alt="Sky" 
            className="absolute object-cover w-full h-full" 
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">Aloha, I'm Anastasija</h1>
            </section>
        </main>
    );
}