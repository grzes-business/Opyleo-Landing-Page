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
    console.log("skibisi");
    try{
        const api_url = import.meta.env.API_URL;
        const max_page = import.meta.env.API_MAX_PAGE - 2;
        const min_page = 1;
        if(!api_url|| !max_page){
            throw new Error("Environment variable API_URL is missing");
        }

        
        const start_page = getRandom(min_page, max_page);
        for (let i = start_page; i <= start_page+2; i++) {
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

function getRandom(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1) + min);
}