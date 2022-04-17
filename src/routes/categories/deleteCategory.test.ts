import axios from 'axios';

const endpoint = 'http://localhost:3000/categories/';

describe('delete category by ID', () => {
  let catId: string;
  beforeAll(async () => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
        const testData = {
            title: "my very special new category",
            metaTitle: "my-very-special-new-category",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;
        catId = responseData.id;
  });
  it('should delete category by ID', async () => {
        const deleteData = {
                categoryId: catId
        };
        const response = await axios.delete(endpoint, { data: deleteData }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
    // console.log(data);
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.id).toEqual(catId);
  });

  it('Should return error for non existing ID', async () => {
    const body = {categoryId: 'nonExististentID'};
    const response = await axios.delete(endpoint, { data: body });
    const data = response.data;
    // console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('No category with given id found');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
