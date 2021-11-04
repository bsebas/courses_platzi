const Home = async() => {
    const view = `
        <div class="Characters">    
                <article class="Character-item">
                    <a href="/character.id/">
                        <img src="{character.image}" alt="{character.name}">
                        <h2>{character.name}</h2>
                    </a>
                </article>
        } </div>`
    return view;
}
export default Home;