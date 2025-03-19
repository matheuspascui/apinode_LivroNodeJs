const Home = {
    index (request, response) {
        response.json({'name': 'Matheus Páscui', 'email': 'matheus@site.com'});
    }
}

export default Home;