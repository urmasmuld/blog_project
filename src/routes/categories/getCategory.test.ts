import axios from 'axios';

const endpoint = 'http://localhost:3000/categories/';

describe('get category by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should return category by ID', async () => {
    const response = await axios.get(
      endpoint + '/301663e7-5a94-436c-a50f-48940641810d'
    );
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.title).toEqual('my new category');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + '/nonExististentID');
    const data = response.data;
    console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('no category found with given ID');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});