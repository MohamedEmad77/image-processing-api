import supertest from "supertest";

import app from "../index";

const request = supertest(app);

describe('endpoint testing' , () => {
   it('response staus is 200',async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
    }); 
});
