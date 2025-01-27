"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const fontSizes = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "26",
  "28",
  "36",
  "48",
  "72",
];

export function FontSize() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("11");
  const [isEditing, setIsEditing] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (!fontSizes.includes(value)) {
      setValue("11"); // Reset to default if invalid
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputBlur();
      setOpen(false);
      setIsEditing(false);
    }
  };

  const handleButtonClick = () => {
    setIsEditing(true);
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <button
            onClick={handleButtonClick}
            className="flex items-center justify-between w-[65px] h-10 px-3 py-2 text-sm border rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isEditing ? (
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                className="w-full h-full p-0 border-none focus:outline-none focus:ring-0"
              />
            ) : (
              value
            )}
            <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[65px] p-0">
        <div className="max-h-[200px] overflow-auto">
          {fontSizes.map((size) => (
            <button
              key={size}
              className={cn(
                "w-full px-2 py-1 text-sm text-left hover:bg-gray-100",
                value === size && "bg-blue-100 hover:bg-blue-200"
              )}
              onClick={() => {
                setValue(size);
                setIsEditing(false);
                inputRef.current?.blur();
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
