// types/editorjs-embed.d.ts
declare module '@editorjs/embed' {
    // 型が欲しければ下行を any → typeof import('…/dist/index')
    const Embed: any;
    export default Embed;
  }