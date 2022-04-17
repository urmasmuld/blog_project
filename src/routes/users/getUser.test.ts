import axios from 'axios';

const endpoint = 'http://localhost:3000/users/';

describe('get user by ID', () => {
  let usrId: string;

  beforeAll(async () => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
        //create a dummy entry first
        const testData = {
          firstName: "Juhan1",
          lastName: "Tuha1",
          mobile: "+372522555677",
          email: "tuha1.juha1n@email1.ee"
      };

      const response = await axios.post(endpoint, testData, {
          heaaders: {
              'Content-Type': 'application/json'
          }
      });

      const responseData = response.data;
      usrId = responseData.id;
  });
  it('should return user by ID', async () => {
    const response = await axios.get(
      endpoint + usrId
    );
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual(usrId);
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + '/nonExististentID');
    const data = response.data;
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('no user found with given ID');
    return;
  });

  afterAll(async () => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
      const deleteData = {
        userId: usrId
      };
      const response = await axios.delete(endpoint, { data: deleteData }, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
  });
});