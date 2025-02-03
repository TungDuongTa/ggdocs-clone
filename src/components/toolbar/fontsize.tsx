import { useEditorStore } from "@/store/use-editor-store";

import React, { useEffect, useState } from "react";

import { MinusIcon, PlusIcon } from "lucide-react";

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
export function FontSizeButton() {
  const { editor } = useEditorStore();
  const currentFontSize = editor?.getAttributes("textStyle").fontSize
    ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
    : "16";
  const [fontSize, setFontSize] = useState(currentFontSize);
  const [inputValue, setInputValue] = useState(fontSize);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false); //for popover
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0) {
      setFontSize(newSize);
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setInputValue(newSize);
      setIsEditing(false);
    }
  };
  useEffect(() => {
    console.log("isEditing", isEditing);
  }, [isEditing]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      value === "" ||
      (value.match(/^\d+$/) && Number.parseInt(value, 10) <= 200) //newline
    ) {
      setInputValue(value);
    }
  };
  const handleInputBlur = () => {
    updateFontSize(inputValue);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsEditing(false); //newline
      updateFontSize(inputValue);
      editor?.commands.focus();
    }
  };
  const increment = () => {
    const newSize = parseInt(currentFontSize) + 1;
    updateFontSize(newSize.toString());
  };
  const decrement = () => {
    const newSize = parseInt(currentFontSize) - 1;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  };
  const handleButtonClick = () => {
    setIsEditing(true);
    setOpen(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }, 0);
  };
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };
  return (
    <div className="flex items-center gap-x-0.5 ">
      <button className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 ">
        <MinusIcon className="size-4" onClick={decrement} />
      </button>
      {/* {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent focus:outline-none focus:ring-0"
        />
      ) : (
        <button
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent "
          onClick={() => {
            setIsEditing(true);
            setFontSize(currentFontSize);
          }}
        >
          {currentFontSize}
        </button>
      )} */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <button
              onClick={() => {
                setIsEditing(true);
                setFontSize(currentFontSize);
                handleButtonClick();
                setInputValue(currentFontSize);
              }}
              className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent"
            >
              {isEditing ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={handleKeyDown}
                  onFocus={handleInputFocus}
                  className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent focus:outline-none focus:ring-0"
                  aria-label="Font size"
                />
              ) : (
                currentFontSize
              )}
            </button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[65px] p-0">
          <div className="h-auto">
            {fontSizes.map((size) => (
              <button
                key={size}
                className={cn(
                  "w-full px-2 py-1 text-sm text-center hover:bg-neutral-200/80",
                  inputValue === size &&
                    "bg-neutral-200/80 hover:bg-neutral-300"
                )}
                onClick={() => {
                  setInputValue(size);
                  updateFontSize(size);
                  setIsEditing(false);
                  setOpen(false);

                  inputRef.current?.blur();
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <button className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 ">
        <PlusIcon className="size-4" onClick={increment} />
      </button>
    </div>
  );
}
