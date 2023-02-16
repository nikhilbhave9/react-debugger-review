const { Client } = require("@notionhq/client");

const notion = new Client({ auth: 'secret_qUIDR4gsSTy9LKVOoHvlrlC6Q3yXX9QayWijPLBp0ei' })

const databaseId = 'a05a66e769a04a9f85e10b0466bbc317'

const fetchEntries = async () => {
    const response = await notion.databases.query({
        database_id: 'a05a66e769a04a9f85e10b0466bbc317'
    });

    console.log(response.results);
}

app.get('/api/notion', (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    fetchEntries();
} );
