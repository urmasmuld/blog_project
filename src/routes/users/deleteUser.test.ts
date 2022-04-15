import axios from 'axios';

const endpoint = 'http://localhost:3000/users/';

describe('delete user by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should delete comment by ID', async () => {

        const deleteData = {
          userId: 'f6ddd954-89d6-406b-ac14-243239cbcb16'
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
    // console.log(data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual('f6ddd954-89d6-406b-ac14-243239cbcb16');
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
