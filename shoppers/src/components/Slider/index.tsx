import React from "react";
import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";

interface DoubleSliderProps {
    min: number;
    max: number;
    values: [number, number];
    onChange: (values: [number, number]) => void;
}

const DoubleSlider: React.FC<DoubleSliderProps> = ({ min, max, values, onChange }) => {
    const handleSliderChange = (newValues: [number, number]) => {
        onChange(newValues);
    };

    return (
        <Box>
            <Slider
                min={min}
                max={max}
                step={1}
                value={values[0]} // Fix: Pass the first value of the array
                onChange={(newValues: number) => handleSliderChange([newValues, newValues])}
            >
                <SliderTrack
                    bg={"#3E7CB1"}
                >
                    <SliderFilledTrack
                        bg={"#3E7af1"}
                    />
                </SliderTrack>
                <SliderThumb />
                <SliderThumb />
            </Slider>
        </Box>
    );
};

export default DoubleSlider;