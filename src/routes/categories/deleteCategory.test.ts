import axios from 'axios';

const endpoint = 'http://localhost:3000/categories/';

describe('delete category by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should delete category by ID', async () => {

        const deleteData = {
                categoryId: '539e37d1-3976-4ee1-b7d6-f357a3698ef2'
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
    // console.log(data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual('539e37d1-3976-4ee1-b7d6-f357a3698ef2');
  });

  it('Should return error for non existing ID', async () => {
    const body = {categoryId: 'nonExististentID'};
    const response = await axios.delete(endpoint, { data: body });
    const data = response.data;
    console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('No category with given id found');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
