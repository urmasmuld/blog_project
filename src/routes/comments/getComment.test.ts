import axios from 'axios';

const endpoint = 'http://localhost:3000/comments/';

describe('get comment by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should return comment by ID', async () => {
    const response = await axios.get(
      endpoint + '/5be92e79-106d-4181-bb34-2e36646afdb9'
    );
    // console.log(response.data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.title).toEqual('commentTitle');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + '/nonExististentID');
    const data = response.data;
    // console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('no comment found with given ID');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});