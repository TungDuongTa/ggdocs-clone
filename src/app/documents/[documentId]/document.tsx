import React from "react";
import { Editor } from "./editor";
import { Toolbar } from "./toolbar";
import { Navbar } from "./navbar";
import { Ruler } from "./ruler";
import { Room } from "./room";
import { Preloaded } from "convex/react";
import { api } from "../../../../convex/_generated/api";
interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}
export default async function Document({ preloadedDocument }: DocumentProps) {
  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex flex-col px-4 pt-2  gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden">
          <Navbar />
          <Toolbar />
          <Ruler />
        </div>
        <div className="pt-[140px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
}
