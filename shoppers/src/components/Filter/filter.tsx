import { Box, Checkbox, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text, Input } from "@chakra-ui/react";
import { useState } from "react";

const Filter = () => {
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
        <Box>
            <Stack spacing={4}>
                <Text fontWeight="bold">Category</Text>
                <Checkbox isChecked={categoryFilters.includes("Category 1")} onChange={() => handleCategoryChange("Category 1")}>
                    Category 1
                </Checkbox>
                <Checkbox isChecked={categoryFilters.includes("Category 2")} onChange={() => handleCategoryChange("Category 2")}>
                    Category 2
                </Checkbox>
                <Checkbox isChecked={categoryFilters.includes("Category 3")} onChange={() => handleCategoryChange("Category 3")}>
                    Category 3
                </Checkbox>
            </Stack>

            <Stack spacing={4}>
                <Text fontWeight="bold">Color</Text>
                <Checkbox isChecked={colorFilters.includes("Color 1")} onChange={() => handleColorChange("Color 1")}>
                    Color 1
                </Checkbox>
                <Checkbox isChecked={colorFilters.includes("Color 2")} onChange={() => handleColorChange("Color 2")}>
                    Color 2
                </Checkbox>
                <Checkbox isChecked={colorFilters.includes("Color 3")} onChange={() => handleColorChange("Color 3")}>
                    Color 3
                </Checkbox>
            </Stack>

            <Stack spacing={4}>
                <Text fontWeight="bold">Price Range</Text>
                <Slider min={0} max={100} step={1} value={priceRange[0]} onChange={(value) => handlePriceRangeChange([value, priceRange[1]])}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <Box display="flex" justifyContent="space-between">
                    <Input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} />
                    <Input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
                </Box>
            </Stack>
        </Box>
    );
};

export default Filter;
