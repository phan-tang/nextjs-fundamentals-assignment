const backendUrl = 'https://jsonplaceholder.typicode.com/';

export async function getData(param: string) {
    let url = backendUrl + param;
    const response = await fetch(url);
    return response.json();
}