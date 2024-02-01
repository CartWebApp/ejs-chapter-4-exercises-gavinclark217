let range = end - start;
  if (range > 0) {
    for (i = 0; i <= range; i += step) {
      list.push(start + i);
    }
  }
  else if (range < 0) {
    for (i = range; i <= 0; i += step) {
      list.push(start + i);
    }
  }