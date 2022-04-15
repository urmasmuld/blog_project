import axios from 'axios';

const endpoint = 'http://localhost:3000/posts';

describe('posts', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  // käivita testid
  it('Should return posts', async () => {
    const response = await axios.get(
      endpoint + '?userId=418ac432-7e16-480d-be4e-d181586fc34d'
    );

    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].posts));
    expect(data[0].authorId).toBe('418ac432-7e16-480d-be4e-d181586fc34d'); 
    return;
  });

  it('Should return error when there\'s no posts', async () => {
    const response = await axios.get(
      endpoint + '?userId=nonExististentID'
    );

    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].posts));
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
