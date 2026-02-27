import { useState, useCallback } from 'react';
import { galleryImages } from '../data/galleryData';

export function GalleryPage() {
    const [lightbox, setLightbox] = useState(null); // index of open image

    const openLightbox = useCallback((idx) => setLightbox(idx), []);
    const closeLightbox = useCallback(() => setLightbox(null), []);

    const goNext = useCallback(() => {
        setLightbox((prev) => (prev + 1) % galleryImages.length);
    }, []);

    const goPrev = useCallback(() => {
        setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    const handleKey = useCallback(
        (e) => {
            if (lightbox === null) return;
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'Escape') closeLightbox();
        },
        [lightbox, goNext, goPrev, closeLightbox]
    );

    return (
        <div
            className="bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat"
            onKeyDown={handleKey}
            tabIndex={-1}
            style={{ outline: 'none' }}
        >
            {/* ── Header ── */}


            <div className="text-center space-y-4 flex flex-col items-center">
                <div className="text-4xl font-minecraft-bold">
                    Last Year's Gallery
                </div>
                <p className="text-secondary text-lg max-w-xl md:max-w-none mx-auto">Relive the energy, sweat, and glory of Sports Week 2025 — captured in every frame.</p>
            </div>

            {/* ── Pinterest Masonry Grid ── */}
            <div className="pinterest-grid">
                {galleryImages.map((img, idx) => (
                    <div
                        key={img.id}
                        className={`pin-card ${img.span === 'tall' ? 'pin-tall' : 'pin-short'}`}
                        onClick={() => openLightbox(idx)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${img.alt}`}
                        onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="pin-img"
                        />
                        <div className="pin-overlay">
                            <span className="pin-label">{img.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Lightbox ── */}
            {lightbox !== null && (
                <div
                    className="lightbox-backdrop"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                >
                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        aria-label="Previous"
                    >
                        ‹
                    </button>

                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={galleryImages[lightbox].src}
                            alt={galleryImages[lightbox].alt}
                            className="lightbox-img"
                        />
                        <p className="lightbox-caption font-minecraft">
                            {galleryImages[lightbox].label}
                        </p>
                        <p className="lightbox-counter">
                            {lightbox + 1} / {galleryImages.length}
                        </p>
                    </div>

                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
