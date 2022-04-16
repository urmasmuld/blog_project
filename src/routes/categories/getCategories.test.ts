import axios from 'axios';

const endpoint = 'http://localhost:3000/categories';

describe('categories', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  // käivita testid
  it('Should return categories', async () => {
    const response = await axios.get(endpoint);
    // const data = response.data;
    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].categories));
    // console.log(data[0].title);
    expect(data[0].title).not.toBe(''); 
    return;
  });

  it('Should return error when there\'s no categories', async () => {
    const response = await axios.get(endpoint);
    // const data = response.data;
    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].categories));
    // console.log(data[0]);
    expect(data[0]).toBeUndefined; 
    // expect(data).toHaveProperty('message');
    // expect(data.message).toEqual('Unable to find categories');
    return;
  });
  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
