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
        for (let i = 1; i <= 3; i++) {
            let page = "";
            if(i > 1){
                page = "?page=" + i.toString();
            }
            let response = await fetch(api_url + page);
            if(!response.ok){
                throw new Error(`Error: ${response.statusText}`);
            }
            let data = await response.json();
            return_data = return_data.concat(data.results as Book[]);
        }          
        
    } catch (error){
        console.error('Error:', error);
    }

    return return_data;
}
