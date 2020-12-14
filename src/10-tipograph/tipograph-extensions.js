BiwaScheme.define_libfunc("smart-quotes", 1, 1, function(ar,intp){
    BiwaScheme.assert_string(ar[0]);
    return Fronkensteen.smartQuotes(ar[0]);
  })

Fronkensteen.smartQuotes = tipograph({presets: ['quotes','hyphens','math','symbols']});
