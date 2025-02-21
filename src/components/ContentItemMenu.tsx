import DragHandle from "@tiptap-pro/extension-drag-handle-react";
import { Editor } from "@tiptap/react";

// import * as Popover from "@radix-ui/react-popover";
// import { Surface } from "@/components/tiptapUi/Surface";

import { useEffect, useState } from "react";
import { useData } from "@/hooks/useData";
import useContentItemActions from "@/hooks/useContentItemActions";
// import { Toolbar } from "./tiptapUi/toolbar";
// import { Icon } from "./tiptapUi/icon";
// import { DropdownButton } from "./tiptapUi/dropdown";
// import { Button } from "./ui/button";
import {
  ClipboardIcon,
  CopyPlusIcon,
  GripVerticalIcon,
  PlusIcon,
  RemoveFormattingIcon,
  Trash2Icon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Separator } from "./ui/separator";

export type ContentItemMenuProps = {
  editor: Editor;
};

export const ContentItemMenu = ({ editor }: ContentItemMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = useData();
  const actions = useContentItemActions(
    editor,
    data.currentNode,
    data.currentNodePos
  );

  useEffect(() => {
    if (menuOpen) {
      editor.commands.setMeta("lockDragHandle", true);
    } else {
      editor.commands.setMeta("lockDragHandle", false);
    }
  }, [editor, menuOpen]);

  return (
    <DragHandle
      pluginKey="ContentItemMenu"
      editor={editor}
      onNodeChange={data.handleNodeChange}
      tippyOptions={{
        offset: [-5, 5],
        zIndex: 9,
      }}
    >
      <div className="flex items-center gap-0.5">
        {/* <Toolbar.Button onClick={actions.handleAdd} tooltip="abc">
          <Icon name="Plus" />
        </Toolbar.Button> */}
        <button
          className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
          onClick={actions.handleAdd}
        >
          <PlusIcon className="size-4" />
        </button>
        {/* <Popover.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Popover.Trigger asChild>
            <Toolbar.Button>
              <Icon name="GripVertical" />
            </Toolbar.Button>
          </Popover.Trigger>
          <Popover.Content side="bottom" align="start" sideOffset={8}>
            <Surface className="p-2 flex flex-col min-w-[16rem]">
              <Popover.Close>
                <DropdownButton onClick={actions.resetTextFormatting}>
                  <Icon name="RemoveFormatting" />
                  Clear formatting
                </DropdownButton>
              </Popover.Close>
              <Popover.Close>
                <DropdownButton onClick={actions.copyNodeToClipboard}>
                  <Icon name="Clipboard" />
                  Copy to clipboard
                </DropdownButton>
              </Popover.Close>
              <Popover.Close>
                <DropdownButton onClick={actions.duplicateNode}>
                  <Icon name="Copy" />
                  Duplicate
                </DropdownButton>
              </Popover.Close>
              <Toolbar.Divider horizontal />
              <Popover.Close>
                <DropdownButton
                  onClick={actions.deleteNode}
                  className="text-red-500 bg-red-500 dark:text-red-500 hover:bg-red-500 dark:hover:text-red-500 dark:hover:bg-red-500 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-20"
                >
                  <Icon name="Trash2" />
                  Delete
                </DropdownButton>
              </Popover.Close>
            </Surface>
          </Popover.Content>
        </Popover.Root> */}
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <button className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
              <GripVerticalIcon className="size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="p-1 flex flex-col gap-y-1 "
            align="start"
          >
            <button
              onClick={() => {
                actions.resetTextFormatting();
                setMenuOpen(false);
              }}
              className="flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80"
            >
              <RemoveFormattingIcon className=" size-4 mr-2" />
              <span className="text-sm">Clear formating</span>
            </button>
            <button
              onClick={() => {
                actions.copyNodeToClipboard();
                setMenuOpen(false);
              }}
              className="flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80"
            >
              <ClipboardIcon className=" size-4 mr-2" />
              <span className="text-sm">Copy to clipboard</span>
            </button>
            <button
              onClick={() => {
                actions.duplicateNode();
                setMenuOpen(false);
              }}
              className="flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80"
            >
              <CopyPlusIcon className=" size-4 mr-2" />
              <span className="text-sm">Duplicate</span>
            </button>
            <Separator className="my-2" orientation="horizontal" />
            <button
              onClick={() => {
                actions.deleteNode();
                setMenuOpen(false);
              }}
              className="flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 text-red-600"
            >
              <Trash2Icon className=" size-4 mr-2" />
              <span className="text-sm">Delete</span>
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DragHandle>
  );
};
