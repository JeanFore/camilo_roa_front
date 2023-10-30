import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from 'react-icons/fa';

interface DedicatedProps {
    className?: string;
  }
  
  const Dedicated: React.FC<DedicatedProps> = ({ className }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768); // Set isMobile here, since useEffect runs on the client side
    
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleVideoClick = () => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        if (videoElement.paused) {
            videoElement.play().then(() => {
                setIsVideoPlaying(true);
                console.log('Video is playing:', isVideoPlaying); // Log for debugging
            }).catch((error) => {
                console.error("Video play failed:", error);
            });
        } else {
            videoElement.pause();
            setIsVideoPlaying(false);
            console.log('Video is paused:', isVideoPlaying); // Log for debugging
        }
    };

    return (
        <div className={`relative ${className}`} id="home-section" style={{ backgroundImage: `url('/images/dedicated/bghomefood.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

            {/* Video Header */}
            <div className="relative w-full" style={{ paddingTop: '20px', paddingBottom: '20px', overflow: 'hidden' }}> {/* Modificado aquí */}
                <video ref={videoRef}
                    onClick={handleVideoClick} // Moved onClick here
                    loop 
                    muted 
                    style={{ 
                        
                        height: isVideoPlaying ? '435px' : '415px', 
                        display: 'block', 
                        marginLeft: 'auto', 
                        marginRight: 'auto',
                        borderRadius: 30,  // Moved borderRadius here
                        boxShadow: '0px 4px 6px #00000050',
                        transform: isVideoPlaying ? 'perspective(325px) rotateX(0deg)' : 'perspective(325px) rotateX(5deg)',
                        transition: 'height 0.5s ease-in-out'
                    }}
                >
                    <source src="/images/dedicated/food1080home.mp4" type="video/mp4" />
                </video>
                {!isVideoPlaying && (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <FaPlay size={50} />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className='mx-auto max-w-7xl px-4 sm:py-10 lg:px-8 flex items-center justify-center'> 

                <div className='grid grid-cols-1 md:grid-cols-2 items-center w-full'>

                    {/* COLUMN-1 */}
                    <div className="flex items-center justify-center">
                        <Image src="/images/navBar/logocroa.png" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative flex flex-col items-start justify-center">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Dedicado a crear nuevas alternativas para tu bienestar.</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Con seguimiento y personalización lograremos las metas propuestas</p>
                    </div>

                </div>
            </div>

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />
        </div>
    )
}

export default Dedicated;
