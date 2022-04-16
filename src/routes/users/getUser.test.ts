import axios from 'axios';

const endpoint = 'http://localhost:3000/users/';

describe('get user by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should return user by ID', async () => {
    const response = await axios.get(
      endpoint + '/418ac432-7e16-480d-be4e-d181586fc34d'
    );
    // console.log(response.data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual('418ac432-7e16-480d-be4e-d181586fc34d');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + '/nonExististentID');
    const data = response.data;
    // console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('no user found with given ID');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});