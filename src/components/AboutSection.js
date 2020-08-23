import React, { Component, useState, useCallback } from 'react'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import EspressoBanner from "../images/visual_design/espresso_banner.png";
import HackXXBanner from "../images/visual_design/hackxx_banner.png";
import HackXXInfo from "../images/visual_design/hackxx_info.png";
import SDHacksBanner from "../images/visual_design/sdhacks_banner.png";
import EOTGBanner from "../images/visual_design/tesc_eotg_flyer.png";
import YonderKickstarterBanner from "../images/visual_design/yonder_kickstarter_tiers.png";
import SeeMoreWork from '../images/visual_design/see_more_work.png';

const photos = [
    { src: EspressoBanner, width: 1, height: 0.5 },
    { src: HackXXInfo, width: 1, height: 1.5 },
    { src: EOTGBanner, width: 1, height: 1.2 },
    { src: SDHacksBanner, width: 1, height: 2.2 },
    { src: HackXXBanner, width: 1, height: 2.2 },
    { src: YonderKickstarterBanner, width: 1, height: 2.2 },
    { src: SeeMoreWork, width: 1, height: 0.5 },
]

const WorkSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <section className="About" id="about">
            <div className="About-container">
                <div className="About-title">
                    <div className="Work-circle-body-title">
                        Visual Design
                    </div>
                    <div className="About-circle-body-divider"></div>
                </div>
                <div className="About-body">
                    <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
        </section>
    );
}
export default WorkSection