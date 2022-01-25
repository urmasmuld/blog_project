import axios from 'axios';

const endpoint = 'http://localhost:3000/users';

describe('users', () => {
    beforeAll(()=>{
        // Käivitatakse enne testi paki algust (nt tee test andmebaasi ja täida see)
    });
    // Käivita testid
    it('Should return user by ID', async () => {
        const response = await axios.get(
            endpoint + '/418ac432-7e16-480d-be4e-d181586fc34d'
            );
        const data = response.data;
        expect(data).toHaveProperty('id');
        expect(data.id).toEqual('418ac432-7e16-480d-be4e-d181586fc34d');
        return;
    });

    it('Should return error for non existing ID', async () => {
        const response = await axios.get(
            endpoint + '/nonExistentID'
            );
        const data = response.data;
        expect(data).toHaveProperty('message');
        expect(data.message).toEqual('no user found with given ID');
        return;
    });

    afterAll(()=>{
            // Käivitatakse peale testi pakki (nt kustuta test andmebaas)
    });
})