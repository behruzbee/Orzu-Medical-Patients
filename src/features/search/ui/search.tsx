import { Input, Button, Flex } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;

  withOptions?: boolean;
  options?: string[];
  selectedOption?: string;
  onOptionChange?: (option: string) => void;
}

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder = "Поиск...",
  withOptions = false,
  options = [],
  selectedOption,
  onOptionChange,
}) => {
  return (
    <Flex
      direction="column"
      columnGap="12px"
    >
      <Input
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={placeholder}
        leftSection={<IconSearch size={18} color="#9CA3AF" />}
        radius="md"
        size="md"
        styles={{
          input: {
            backgroundColor: "#F9FAFB",
            border: "2px solid #E5E7EB",
          },
        }}
      />

      {withOptions && options.length > 0 && (
        <Flex columnGap="8px" mt="12px">
          {options.map((option) => {
            const isActive = selectedOption === option;
            return (
              <Button
                p="9px 16px"
                key={option}
                radius="8px"
                w="max-content"
                variant={isActive ? "filled" : "outline"}
                color={isActive ? "brand" : "#4B5563"}
                onClick={() => onOptionChange?.(option)}
              >
                {option}
              </Button>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};
