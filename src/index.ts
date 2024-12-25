function get(url: string) {
  return fetch(url).then((res) => res.json());
}

export default get;
export { get };
