import { useState } from "react";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Box position="relative">
            <IconButton
                icon={<ChevronLeftIcon />}
                aria-label="Previous"
                onClick={handlePrev}
                position="absolute"
                left={0}
                top="50%"
                transform="translateY(-50%)"
            />
            <Image src={images[currentIndex]} alt={`Product Image ${currentIndex + 1}`} mb={2} />
            <IconButton
                icon={<ChevronRightIcon />}
                aria-label="Next"
                onClick={handleNext}
                position="absolute"
                right={0}
                top="50%"
                transform="translateY(-50%)"
            />
        </Box>
    );
};

export default Carousel;
