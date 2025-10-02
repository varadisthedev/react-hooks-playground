import React from 'react';

function MovieEmbed() {

    const embedUrl='https://vidsrc.xyz/embed/movie/tt5433140';
    return (
    
        <div >
        
            <h1 className="text-3xl font-extrabold text-blue-400 mb-6 text-center">
                movie player for raj
            </h1>

            <div className="relative w-full max-w-4xl pt-[56.25%] rounded-xl shadow-2xl overflow-hidden border-4 border-blue-500">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={embedUrl}
                    allowFullScreen
                    frameBorder="0"
                    
                >
                    erorr messgae
                    
                </iframe>
            </div>

           
        </div>
    );
}

export default MovieEmbed;
