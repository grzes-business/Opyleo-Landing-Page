interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    creator_name: string;
    condition: number;
    first_image: string;

}

export async function getBooks(): Promise<Book[]> {
    let return_data: Book[] = [];
    try{
        const api_url = import.meta.env.API_URL;
        if(!api_url){
            throw new Error("Environment variable API_URL is missing");
        }
        const response = await fetch(api_url);
        if(!response.ok){
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return_data = data.results as Book[];
    } catch (error){
        console.error('Error:', error);
    }

    return return_data;
}
