scheme->json: Generate a JSON string from a Scheme structure.
Scheme list -> JSON object
Scheme vector -> JSON array
Scheme dotted pair -> JSON key/value pair
Scheme number -> JSON number
Scheme string -> JSON string
Scheme #t, #f -> JSON true, false

Examples:

(scheme->json '(("foo" . 2) ("bar" . 4))) -> {"foo":2,"bar":4}
(scheme->json '(("baz" . #(1 2 3)))) ; {"baz":[1,2,3]}


(scheme->json '#(
    ((name . "Item 1") (children . #()))
    ((name . "Item 2") (expanded . #t) (children .
      #(
          ((name . "Sub Item 1") (children . #()))
          ((name . "Sub Item 1") (children . #()))
      ))))) ->
; [
;     {
;         name:"Item 1",
;         children:[]
;     },
;     {
;         name:"Item 2",
;         expanded:true,
;         children:[
;                      {
;                          name:"Sub Item 1",
;                          children:[]
;                      },
;                      {
;                          name:"Sub Item 1",
;                          children:[]
;                      }
;                  ]
;    }
; ]
