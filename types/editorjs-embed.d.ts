// すべての @editorjs/* を any で扱う
declare module '@editorjs/*' {
    const Tool: any;
    export default Tool;
  }
  