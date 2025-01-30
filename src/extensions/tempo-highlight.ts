// import { Mark, mergeAttributes } from "@tiptap/core";

// interface TemporaryHighlightOptions {
//   className: string;
// }

// declare module "@tiptap/core" {
//   interface Commands<ReturnType> {
//     temporaryHighlight: {
//       /**
//        * Apply the temporary highlight
//        */
//       setTemporaryHighlight: () => ReturnType;

//       /**
//        * Remove the temporary highlight
//        */
//       unsetTemporaryHighlight: () => ReturnType;
//     };
//   }
// }

// const TemporaryHighlight = Mark.create<TemporaryHighlightOptions>({
//   name: "temporaryHighlight",

//   addOptions() {
//     return {
//       className: "temporary-highlight", // Default class for styling
//     };
//   },

//   addAttributes() {
//     return {
//       temporaryHighlight: {
//         default: null,
//         renderHTML: (attributes) => {
//           if (attributes.temporaryHighlight) {
//             return { class: this.options.className };
//           }
//           return null;
//         },
//         parseHTML: (element) => {
//           if (element.classList.contains(this.options.className)) {
//             return { temporaryHighlight: true };
//           }
//           return null;
//         },
//       },
//     };
//   },

//   parseHTML() {
//     return [
//       {
//         tag: `span.${this.options.className}`,
//       },
//     ];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return [
//       "span",
//       mergeAttributes(HTMLAttributes, { class: this.options.className }),
//       0,
//     ];
//   },

//   addCommands() {
//     return {
//       setTemporaryHighlight:
//         () =>
//         ({ commands }) => {
//           return commands.setMark(this.name);
//         },
//       unsetTemporaryHighlight:
//         () =>
//         ({ commands }) => {
//           return commands.unsetMark(this.name);
//         },
//     };
//   },

//   onCreate() {
//     const { editor } = this;

//     editor.on("blur", () => {
//       if (editor.state.selection.empty) return;

//       // Apply temporary highlight when the editor loses focus
//       editor.chain().focus().setTemporaryHighlight().run();
//     });

//     editor.on("focus", () => {
//       // Remove temporary highlight when the editor regains focus
//       editor.chain().focus().unsetTemporaryHighlight().run();
//     });
//   },
// });

// export default TemporaryHighlight;
