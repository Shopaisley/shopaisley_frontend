"use client"
import { Box, Checkbox, Flex, Input, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import "./index.css";

const categories = ["Electronics", "Clothing", /* Add more categories */];
// const prices = ["0 - 50", "50 - 100", "$100 and above"];
const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];


const Filter: React.FC = ({
}) => {
    const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
    const [colorFilters, setColorFilters] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

    const handleCategoryChange = (category: string) => {
        if (categoryFilters.includes(category)) {
            setCategoryFilters(categoryFilters.filter((item) => item !== category));
        } else {
            setCategoryFilters([...categoryFilters, category]);
        }
    };

    const handleColorChange = (color: string) => {
        if (colorFilters.includes(color)) {
            setColorFilters(colorFilters.filter((item) => item !== color));
        } else {
            setColorFilters([...colorFilters, color]);
        }
    };

    const handlePriceRangeChange = (values: [number, number]) => {
        setPriceRange(values);
    };

    return (
        <Box
            w={"295px"}
            h={"fit-content"}
            p={"8px"}
            bg={"#ffffff"}
            display={"block"}
        >
            <Flex
                flexDir={"column"}
            >
                <Text
                    fontSize={"15px"}
                    fontWeight={"bold"}
                    lineHeight={"28px"}
                    color={"#000000"}
                    mb={"10px"}

                >
                    CATEGORY
                </Text>
                <Flex
                    flexDir={"column"}
                >
                    {categories.map((category) => (
                        <Checkbox
                            color={"#000000"}
                            key={category}
                            // isChecked={categoryFilters.includes("Phones")}
                            onChange={(e) => handleCategoryChange(category)}
                        >
                            {category}
                        </Checkbox>
                    ))}
                </Flex>
                <Text
                    fontWeight="bold"
                    lineHeight={"28px"}
                    color={"#000000"}
                    mt={"10px"}
                >PRICE (₦)</Text>
                <Slider
                    my={"6px"}
                    min={1000}
                    max={1000000}
                    step={2}
                    value={priceRange[0]}
                    onChange={(value) => handlePriceRangeChange([value, priceRange[1]])}
                >
                    <SliderTrack
                        bg={"#3E7CB1"}
                    >
                        <SliderFilledTrack
                            bg={"#3E7af1"}
                        />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <Box display="flex" alignContent={"center"} justifyContent="space-between">
                    <Input type="number" border={"1px solid #000000"} value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} />
                    <Input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
                </Box>
                <Text
                    fontWeight="bold"
                    lineHeight={"28px"}
                    color={"#000000"}
                    mt={"10px"}
                >
                    COLOR
                </Text>
                {colors.map((color) => (
                        <Checkbox
                            color={"#000000"}
                            key={color}
                            // isChecked={categoryFilters.includes("Phones")}
                            onChange={(e) => handleCategoryChange(color)}
                        >
                            {color}
                        </Checkbox>
                    ))}
            </Flex>
        </Box>
    );
};

export default Filter;

