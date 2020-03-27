// seml-extensions.js.
// SEML implementation for BiwaScheme
// Copyright 2018-2019 by Anthony W. Hursh
// MIT License.


 /*  SEML parser. This is based on an idea due to
  *  Logan Braga and written by him in Ruby.
  *  See http://loganbraga.github.io/seml/
  *  However, this implementation has been written
  *  from scratch in JavaScript.
  */
 Fronkensteen.parse_seml = function(arg){
   let index = 0;
   let idstring = "";
   let classstring = "";
   let otherattrs = "";
   let result = "";
   let collected = "";
   let STATE_IDLE = 0;
   let STATE_ID = 1;
   let STATE_CLASS=2;
   let STATE_PARAM=3;
   let STATE_SINGLE=4;
   let STATE_DOUBLE=5;
   let currentState = STATE_IDLE;
   while(index < arg.length){
     let currentChar = arg.charAt(index);
     switch(currentState){
         case STATE_IDLE:
           switch(currentChar){
             case ".": currentState = STATE_CLASS;
                       index = index + 1;
                       continue;
             case "#": currentState = STATE_ID;
                       index = index + 1;
                       continue;
             case "!": currentState = STATE_PARAM;
                       index = index + 1;
                       continue;
             default: console.error("parse-seml: parse error on " + arg);
                     return "parse error: " + arg;
           }
       case STATE_ID:
         switch(currentChar){
           case "'":
           case "\"":   console.error("parse-seml: quotes not allowed in id --> " + arg)
             return "parse-seml: quotes not allowed in id " + arg;

           case ".": currentState = STATE_CLASS;
                   if(classstring !== ""){
                     classstring = classstring + " "
                   }
                   index = index + 1;
                   continue;
           case "!": currentState = STATE_PARAM;
                   index = index + 1;
                   if(otherattrs !== ""){
                     otherattrs = otherattrs + " "
                   }
                   continue;
           default: idstring = idstring + currentChar;
                    index = index + 1;
                    continue;
                  }
     case STATE_CLASS:
       switch(currentChar){
       case "'":
       case "\"":   console.error("parse-seml: quotes not allowed in class name --> " + arg)
         return "parse-seml: quotes not allowed in class name " + arg;

       case "#": currentState = STATE_ID;
             if(idstring !== ""){
               console.error("parse-seml: string has more than one id param --> " + arg)
               return "parse-seml: too many ids in " + arg;
             }
             index = index + 1;
             continue;
       case "!": currentState = STATE_PARAM;
             index = index + 1;
             if(otherattrs !== ""){
               otherattrs = otherattrs + " "
             }
             continue;
       case ".": classstring = classstring + " "
           index = index + 1;
           continue;
       default: classstring = classstring + currentChar;
              index = index + 1;
              continue;
     }
     case STATE_PARAM:
       switch(currentChar){
       case "'": otherattrs = otherattrs + "'";
             index = index + 1;
             currentState = STATE_SINGLE;
             continue;
       case "\"": otherattrs = otherattrs + "\"";
             index = index + 1;
             currentState = STATE_DOUBLE;
             continue;
       case "#": currentState = STATE_ID;
             if(idstring !== ""){
               console.error("parse-seml: string has more than one id param --> " + arg)
               return "parse-seml: too many ids in " + arg;
             }
             index = index + 1;
             continue;
       case ".": currentState = STATE_CLASS;
             index = index + 1;
             if(classstring !== ""){
               classstring = classstring + " "
             }
             continue;

       case "!":
             index = index + 1;
             otherattrs = otherattrs + " "
             continue;
       default: otherattrs = otherattrs + currentChar;
              index = index + 1;
              continue;
     }
     case STATE_SINGLE:
       switch(currentChar){
       case "\\":
               index = index + 1;
               otherattrs = arg.charAt(index);
               index = index + 1;
               continue;
       case "'": otherattrs = otherattrs + currentChar;
             index = index + 1;
             currentState = STATE_PARAM;
             continue;
       default: otherattrs = otherattrs + currentChar;
              index = index + 1;
              continue;
     }
     case STATE_DOUBLE:
       switch(currentChar){
       case "\\":
               index = index + 1;
               otherattrs = arg.charAt(index);
               index = index + 1;
               continue;
       case "\"": otherattrs = otherattrs + currentChar;
             index = index + 1;
             currentState = STATE_PARAM;
             continue;
       default: otherattrs = otherattrs + currentChar;
              index = index + 1;
              continue;
     }
 }
 }
   if(currentState === STATE_DOUBLE){
     console.erro("parse-seml: missing double-quote --> " + arg)
     return "parse-seml: missing double quote in  " + arg;
   }
   if(currentState === STATE_SINGLE){
     console.error("parse-seml: missing single-quote --> " + arg)
     return "parse-seml: missing single quote in  " + arg;
   }
   if(idstring !== ""){
     result = "id=\"" + idstring + "\""
   }
   if(classstring !== ""){
     if(result !== ""){
       result = result + " "
     }
     result = result + "class=\"" + classstring + "\""
   }
   if(otherattrs !== ""){
     if(result !== ""){
       result = result + " "
     }
     result = result + otherattrs;
   }
   return result;
 };


BiwaScheme.define_libfunc("parse-seml",1,1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.parse_seml(ar[0]);
  });
