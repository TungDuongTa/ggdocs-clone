import { useEditorStore } from "@/store/use-editor-store";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { type ColorResult, SketchPicker } from "react-color";
import { DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { HighlighterIcon } from "lucide-react";
export function HighlightColorButton() {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("highlight")?.color || "#FFFFFF";
  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 ">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
