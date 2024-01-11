import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Select,
    Text,
    Image,
    Button,
    Link,
  } from "@chakra-ui/react";
import React, {FC, useState} from "react";

interface FilterCategoryProps {
    filters: Array<{ name: string; label: string; options: string[] }>;
    onFilterChange: (newFilters: Record<string, string>) => void;
  }
  
  const FilterCategory: React.FC<FilterCategoryProps> = ({ filters, onFilterChange }) => {
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  
    const handleFilterChange = (filterName: string, value: string) => {
      const updatedFilters = { ...selectedFilters, [filterName]: value };
      setSelectedFilters(updatedFilters);
      onFilterChange(updatedFilters);
    };
  
    return (
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading fontSize="lg" mb={4}>
          Filters
        </Heading>
        {filters.map((filter) => (
          <Box key={filter.name} mb={4}>
            <Heading fontSize="sm" mb={2}>
              {filter.label}
            </Heading>
            <Select
              placeholder={`Select ${filter.label}`}
              value={selectedFilters[filter.name] || ''}
              onChange={(e) => handleFilterChange(filter.name, e.target.value)}
            >
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Box>
    );
  };
  
  export default FilterCategory;