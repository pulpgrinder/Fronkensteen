/* Scheme interface for diff-match-patch. Copyright 2021 by Anthony W. Hursh
 * Distributed under the terms of the same MIT license as Fronkensteen as a
 * whole. See https://github.com/google/diff-match-patch/wiki/API for API
 * info.
 */

var dmp =  new diff_match_patch();

BiwaScheme.define_libfunc("diff", 2, 2, function(ar){
  // Perform a diff on the strings given in ar[0] and ar[1]
    BiwaScheme.assert_string(ar[0]);
    BiwaScheme.assert_string(ar[1]);
    return dmp.diff_main(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("diff-cleanup-semantic", 1, 1, function(ar){
  dmp.diff_cleanupSemantic(ar[0]);
  return ar[0];
});

BiwaScheme.define_libfunc("diff-cleanup-efficiency", 1, 1, function(ar){
  dmp.diff_cleanupEfficiency(ar[0]);
  return ar[0];
});

BiwaScheme.define_libfunc("diff-levenshtein", 2, 2, function(ar){
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  return dmp.diff_levenshtein(ar[0],ar[1]);
});

BiwaScheme.define_libfunc("match_main", 3, 3, function(ar){
  BiwaScheme.assert_string(ar[0]);
  BiwaScheme.assert_string(ar[1]);
  BiwaScheme.assert_number(ar[2]);
  return dmp.match_main(ar[0],ar[1],ar[3]);
});

BiwaScheme.define_libfunc("patch-make", 1, 2, function(ar){
  if(ar.length === 2){
    return dmp.patch_make(ar[0],ar[1])
  }
  return dmp.patch_make(ar[0]);
});

BiwaScheme.define_libfunc("patch-to-text", 1, 1, function(ar){
  return dmp.patch_toText(ar[0]);
});


BiwaScheme.define_libfunc("patch-from-text", 1, 1, function(ar){
  return dmp.patch_fromText(ar[0]);
});

BiwaScheme.define_libfunc("patch-apply", 2, 2, function(ar){
  return dmp.patch_fromText(ar[0],ar[0]);
});
