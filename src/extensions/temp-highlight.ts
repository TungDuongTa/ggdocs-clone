import { Extension } from "@tiptap/core";
import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";

export const TemporaryHighlightExtension = Extension.create({
  name: "temporaryHighlight",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          decorations: (state) => {
            const { selection } = state;
            const { from, to } = selection;
            if (from === to) return null; // No highlight if no selection

            return DecorationSet.create(state.doc, [
              Decoration.inline(from, to, {
                class: "temporary-highlight",
                style: "background-color: rgba(255, 215, 0, 0.4);",
              }),
            ]);
          },
        },
      }),
    ];
  },
});
