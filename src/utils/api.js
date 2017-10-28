

export async function fetchData() {
  let url = 'https://gist.githubusercontent.com/shalurai/7c54dc577347ab8fd4382799622a81bd/raw/453efede166401df76f67c61d45e01bc933d2f54/countries.json';
  let response = await fetch(url);
 let body = await response.json();
  return body;

}
