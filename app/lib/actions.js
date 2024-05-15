import { promises as fs } from 'fs';

// We would use try catch here if fetching from an API
// Here our data is hardcoded so we know the return
export async function fetchData() {
    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const data = JSON.parse(file);
    return data
}
