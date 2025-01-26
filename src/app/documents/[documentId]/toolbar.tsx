"use client";
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";
import { FontFamilyButton } from "@/components/toolbar/fontFamily";
import { HeadingLevelButton } from "@/components/toolbar/heading";
import { TextColorButton } from "@/components/toolbar/textColor";
import { HighlightColorButton } from "@/components/toolbar/highlightColor";
import { LinkButton } from "@/components/toolbar/link";
import { ImageButton } from "@/components/toolbar/image";
interface toolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}
const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: toolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export function Toolbar() {
  const { editor } = useEditorStore();

  const sections: {
    lable: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        lable: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        lable: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        lable: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        lable: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        lable: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        lable: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        lable: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        lable: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log(" TO Do Comment"),
        isActive: false, // TODO: Enable this function
      },
      {
        lable: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        lable: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.lable} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
      <HeadingLevelButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
      {/* {ToDO:Font Size} */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
      {sections[1].map((item) => (
        <ToolbarButton key={item.lable} {...item} />
      ))}
      <TextColorButton />
      <HighlightColorButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
      <LinkButton />
      <ImageButton />
      {/* {ToDO:allign} */}
      {/* {ToDO:line Height} */}
      {/* {ToDO:line List} */}
      {sections[2].map((item) => (
        <ToolbarButton key={item.lable} {...item} />
      ))}
    </div>
  );
}
