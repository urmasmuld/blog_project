import axios from 'axios';

const endpoint = 'http://localhost:3000/posts';

describe('posts', () => {
  let usrId: string;
  usrId = '089ddda5-f4c8-4bca-974a-e69d616e504a';

  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  // käivita testid
  it('Should return posts', async () => {
    const response = await axios.get(
      endpoint + '?userId=' + usrId
    );

    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].posts));
    expect(data[0].authorId).toBe(usrId); 
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
