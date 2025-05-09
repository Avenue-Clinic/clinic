import { useState, useEffect } from 'react';
import Image from 'next/image';

const VideoPlayButton = ({ color = '#fa183d', videoId = 'ngElkyQ6Rhs' }) => {
  // Default to a fallback video ID if none provided
  const actualVideoId = videoId || 'ngElkyQ6Rhs';
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setIsOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setIsOpen(false);
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = '';
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) closeVideo();
    };

    window.addEventListener('keyup', handleEsc);
    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, []);

  return (
    <>
      <a
        href="#"
        className="video-play-button"
        onClick={openVideo}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'block',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
        }}
      >
        {/* SVG container that is the circle itself */}
        <div
          className="svg-container"
          style={{
            width: '60px',
            height: '60px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: color ? `${color}` : '#fa183d',
          }}
        >
          {/* Your 41x41 SVG will go here */}
          <div style={{ width: '50px', height: '50px' }}>
            <Image
              src="/icons/play-button2.svg"
              alt="Play Button"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* White pulsing circle effect */}
        <div
          className="pulse-border"
          style={{
            position: 'absolute',
            zIndex: 0,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60px',
            height: '60px',
            background: 'white',
            borderRadius: '50%',
            animation: 'pulse-border 1500ms ease-out infinite',
          }}
        />
      </a>

      {isOpen && (
        <div
          className="video-overlay"
          style={{
            position: 'fixed',
            zIndex: 9999, // Higher z-index to ensure it's above everything
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(3px)',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={(e) => {
            // Close the modal when clicking the overlay (but not when clicking the iframe)
            if (e.target === e.currentTarget) {
              closeVideo();
            }
          }}
        >
          <a
            className="video-overlay-close"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeVideo();
            }}
            style={{
              position: 'absolute',
              zIndex: 1000,
              top: '15px',
              right: '20px',
              fontSize: '30px',
              lineHeight: 1,
              fontWeight: 400,
              color: '#fff',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 200ms',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close video"
          >
            &times;
          </a>
          <div
            className="video-container"
            style={{
              width: '80%',
              maxWidth: '800px',
              aspectRatio: '16/9',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              borderRadius: '0px',
              overflow: 'hidden',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${actualVideoId}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="YouTube video player"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-border {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        .video-overlay-close:hover {
          color: ${color ? color : '#fa183d'};
        }

        .video-overlay {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default VideoPlayButton;
