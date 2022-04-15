import axios from 'axios';

const endpoint = 'http://localhost:3000/comments';

describe('comments', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  // käivita testid
  it('Should return comments', async () => {
    const response = await axios.get(
      endpoint + '?postId=c44ed0d7-371a-4cac-b935-c82dee7743e0'
    );

    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].comments));
    expect(data[0].postId).toBe('c44ed0d7-371a-4cac-b935-c82dee7743e0'); 
    return;
  });

  it('Should return error when there\'s no comments', async () => {
    const response = await axios.get(
      endpoint + '?postId=nonExististentID'
    );
    // const data = response.data;
    const data = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify([response.data]))[0].comments));
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
