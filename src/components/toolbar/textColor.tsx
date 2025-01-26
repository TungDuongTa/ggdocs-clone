import { useEditorStore } from "@/store/use-editor-store";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { type ColorResult, TwitterPicker } from "react-color";
import { DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
export function TextColorButton() {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("textStyle")?.color || "#000000";
  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="text-xs">A</span>
          <div className="h-0.5 w-full " style={{ backgroundColor: value }} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 ">
        <TwitterPicker
          color={value}
          onChange={onChange}
          colors={[
            "#000000",
            "#D9E3F0",
            "#F47373",
            "#697689",
            "#37D67A",
            "#2CCCE4",
            "#555555",
            "#dce775",
            "#ff8a65",
            "#ba68c8",
          ]}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
