import axios from 'axios';

const endpoint = 'http://localhost:3000/posts/';

describe('delete posts by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should delete posts by ID', async () => {

        const deleteData = {
          postId: 'c44ed0d7-371a-4cac-b935-c82dee7743e0'
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
    // console.log(data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual('c44ed0d7-371a-4cac-b935-c82dee7743e0');
  });

  it('Should return error for non existing ID', async () => {
        const deleteData = {
          commentId: "nonExististentID"
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const data = response.data;
    // console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('No post with given id found');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
