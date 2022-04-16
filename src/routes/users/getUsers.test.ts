import axios from 'axios';

const endpoint = 'http://localhost:3000/users';

describe('Get users', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  // käivita testid
  it('Should return users', async () => {
    const response = await axios.get(endpoint);
    // const data = response.data;
    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].users));
    // console.log(data[0].title);
    expect(data[0].id).not.toBe(''); 
    return;
  });

  it('Should return error when there\'s no users', async () => {
    const response = await axios.get(endpoint);
    // const data = response.data;
    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].users));
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
