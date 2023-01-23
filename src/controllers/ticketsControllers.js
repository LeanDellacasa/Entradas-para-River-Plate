const ticketsController = async () => {
    const resp = await fetch ('/src/components/data/tickets.json')
    const data = await resp.json()
    
    return data
};

ticketsController();