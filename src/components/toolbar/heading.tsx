import { cn } from "@/lib/utils";

import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { type Level } from "@tiptap/extension-heading";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

export function HeadingLevelButton() {
  const { editor } = useEditorStore();
  const headings = [
    { lable: "Normal text", value: 0, fontsize: "16px" },
    { lable: "Heading 1", value: 1, fontsize: "32px" },
    { lable: "Heading 2", value: 2, fontsize: "24px" },
    { lable: "Heading 3", value: 3, fontsize: "20px" },
    { lable: "Heading 4", value: 4, fontsize: "18px" },
    { lable: "Heading 5", value: 5, fontsize: "16px" },
  ];
  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }
    return "Normal text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {headings.map(({ lable, value, fontsize }) => (
          <button
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: value as Level })
                  .run();
              }
            }}
            key={value}
            style={{ fontSize: fontsize }}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 ",
              (value === 0 && editor?.isActive("heading")) ||
                (editor?.isActive("heading", { level: value }) &&
                  "bg-neutral-200/80")
            )}
          >
            {lable}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
