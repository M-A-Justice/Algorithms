var countSegments = function(s) {
  let segments = s.split(' ');
  for (let i = 0; i < segments.length; i += 1) {
    let segment = segments[i];
    if (segment.length === 0) {
      segments.splice(i, 1);
      i -= 1;
    }
  }
  return segments.length;
};