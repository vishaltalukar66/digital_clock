import { useState } from "react";


export const SearchBar = () => {

    const [query, setQuery] = useState("");


    function changeEvent(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }


    function handleQuery(event: React.ChangeEvent<HTMLInputElement>): void {
        setQuery(event.target.value);
    }

    return (
        <>
            <form onSubmit={changeEvent}>
                <input required className=" ml-10 mr-10 xl:text-4xl text-xl" type="text" id="google_search" placeholder="🔍 Google Search" onChange={handleQuery} value={query} />
            </form>
        </>
    );
}