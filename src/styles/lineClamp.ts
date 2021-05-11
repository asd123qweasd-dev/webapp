

export function lineClamp(line: number) {
  return `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    line-clamp: ${line};
    box-orient: vertical;
  `
}
