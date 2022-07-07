export function Maskify(str: string, mask = '#', n = 4) {
  return ('' + str).slice(0, -n).replace(/./g, mask) + ('' + str).slice(-n);
}
