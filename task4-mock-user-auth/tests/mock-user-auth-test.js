const request = require('supertest');
const baseURL = 'http://localhost:3000'; 
const randomText = Math.random().toString(36).substring(2, 10);
const name = 'Omar';
const email = randomText+'@mail.com';
const password = 'Omar123456';
let token;

describe('Mock User Auth API ', () => {

  describe('Create User',() => {

    //Valid Body
    test('Verify that user is created successfully with valid body', async () => {
    const res = await request(baseURL)
      .post('/api/v1/users')
      .send({ name: name, email: email, password: password });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("User registered with success");
    expect(res.body.token).toBeDefined();
    });

    //Invalid Body - Incorrect email format
    test('Verify that user is not created with invalid body', async () => {
    const res = await request(baseURL)
      .post('/api/v1/users')
      .send({ name: name, email: randomText, password: password });

    expect(res.statusCode).toBe(400);
    });
  }),

  describe('Authenticate User',() => {

    //Valid Body
    test('Verify that user is authenticated successfully with valid body', async () => {
    const res = await request(baseURL)
      .post('/api/v1/auth')
      .send({email: email, password: password });


    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
    });

    //Invalid Body - Incorrect password
    test('Verify that user is not authenticated with invalid body', async () => {
    const res = await request(baseURL)
      .post('/api/v1/auth')
      .send({email: email, password: 'Omar1234' });


    expect(res.statusCode).toBe(401);
    expect(res.body.message).toContain("Incorrect email or password");
    });
  }),

  describe('Get User by Token',() => {

    //Valid Token
    test('Verify that user details are retrieved successfully with valid token', async () => {
    const res = await request(baseURL)
      .get('/api/v1/users')
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
        id: expect.any(Number),
        name: name,
        email: email, 
        password: password,
        imageUrl: expect.stringMatching(/^https:\/\//)
      });

    });

    //Invalid Token
    test('Verify that user details are not retrieve with invalid token', async () => {
    const res = await request(baseURL)
      .get('/api/v1/users')
      .set('Authorization', 'token');

    expect(res.statusCode).toBe(403);
    expect(res.body.message).toContain("Unauthorized");
    });
  }),

  describe('Patch User by Token',() => {

    //Valid Token - Valid Body
    test('Verify that user details can be edited successfully with valid token and valid body', async () => {
    const res = await request(baseURL)
      .patch('/api/v1/users')
      .set('Authorization', token)
      .send({email: email, password: 'Omar1234' });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("User updated with success");
    expect(Object.keys(res.body)).toEqual(['message']);
  

    });

    // Valid Token - Invalid Body
    test('Verify that user details cannot be edited with valid token and invalid body', async () => {
    const res = await request(baseURL)
      .patch('/api/v1/users')
      .set('Authorization', token)
      .send({password: '' });

    expect(res.statusCode).toBe(400);
    });

    //Invalid Token - Valid Body
    test('Verify that user details cannot be edited with invalid token and valid body', async () => {
    const res = await request(baseURL)
      .patch('/api/v1/users')
      .set('Authorization', token+'invalid');

    expect(res.statusCode).toBe(403);
    expect(res.body.message).toContain("invalid signature");
    });

    //Invalid Token - Invalid Body
    test('Verify that user details cannot be edited with invalid token and invalid body', async () => {
    const res = await request(baseURL)
      .patch('/api/v1/users')
      .set('Authorization', token+'invalid')
      .send({email: 1234 });

    expect(res.statusCode).toBe(403);
    expect(res.body.message).toContain("invalid signature");
    });
  }),

  describe('Delete User by Token',() => {

    beforeEach(async () => {
      const randomEmail = Math.random().toString(36).substring(2, 10)
      
      // Create user
      await request(baseURL)
      .post('/api/v1/users')
      .send({ name: name, email: randomEmail+"@test.com", password: password });

    // Authenticate user
    const res = await request(baseURL)
      .post('/api/v1/auth')
      .send({email: randomEmail+"@test.com", password: password });
      
      token = res.body.token;
    });

    //Valid Token
    test('Verify that user is deleted successfully with valid token', async () => {

      const res = await request(baseURL)
        .delete('/api/v1/users')
        .set('Authorization', token);


      expect(res.statusCode).toBe(200);
      expect(res.body.message).toContain("User deleted with success");

    });
    
    //Invalid Token
    test('Verify that user is not deleted with invalid token', async () => {
      const res = await request(baseURL)
        .delete('/api/v1/users')
        .set('Authorization', token+'invalid');

      expect(res.statusCode).toBe(403);
      expect(res.body.message).toContain("Unauthorized to delete");
      });
  }),

  describe('Delete All Users',() => {

    //Valid Body
    test('Verify that all users are deleteed successfully with valid body', async () => {
      const res = await request(baseURL)
        .delete('/api/v1/all-users')
        .send({ key_admin: "keyadmin123"});

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toContain("Users deleted with success");
      });

    //Invalid Body
    test('Verify that all users are not deleteed with invalid body', async () => {
      const res = await request(baseURL)
        .delete('/api/v1/all-users')
        .send({ key_admin: "keyadmin12345"});

      expect(res.statusCode).toBe(403);
      expect(res.body.message).toContain("Unauthorized access");
      });
  })

});