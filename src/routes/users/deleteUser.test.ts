import axios from 'axios';

const endpoint = 'http://localhost:3000/users/';

describe('delete user by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should delete user by ID', async () => {

        const deleteData = {
          userId: 'b1a7f62f-cece-49cd-8964-4b46fe0ee6f7'
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
    // console.log(data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual('b1a7f62f-cece-49cd-8964-4b46fe0ee6f7');
  });

  it('Should return error for non existing ID', async () => {
        const deleteData = {
          userId: "nonExististentID"
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const data = response.data;
    // console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('No user with given id found');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
