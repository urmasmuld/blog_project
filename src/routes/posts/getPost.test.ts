import axios from 'axios';

const endpoint = 'http://localhost:3000/posts/';

describe('get post by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should return post by ID', async () => {
    const response = await axios.get(
      endpoint + '/a8a8a37e-fa2c-4b7b-a6bd-11e6a157a3ab'
    );
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.title).toEqual('my new post 22');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + '/nonExististentID');
    const data = response.data;
    console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('no post found with given ID');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});