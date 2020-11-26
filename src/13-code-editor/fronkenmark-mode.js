
CodeMirror.defineSimpleMode("fronkenmark", {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    {regex: /^\;.*$/, token: "comment"},
    {regex: /\[[!a-zA-Z][a-zA-Z0-9]*(\s|$)/m, token: "type"},
    {regex: /(\s|^)[a-zA-Z][a-zA-Z0-9!]*\]/m, token: "type"},
    {regex: /\[nosmart\]/m, token: "type"},
    {regex: /\[hr\]/m, token: "type"},
    {regex: /\[br\]/m, token: "type"}
  ]
  } );
