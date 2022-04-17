import axios from 'axios';

const endpoint = 'http://localhost:3000/comments/';

describe('delete comment by ID', () => {
  let comId: string;
  comId = '463595b4-c779-4995-903d-f7569e7cc8fc'
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should delete comment by ID', async () => {

        const deleteData = {
          commentId: comId
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
    // console.log(data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual(comId);
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
    expect(data?.message).toEqual('No comment with given id found');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
