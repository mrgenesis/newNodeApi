const axios = require('axios')
  , port = process.env.PORT || 3000
  , requester = axios.create({ baseURL: 'http://localhost:' + port });

describe('Testa todas as rotas do aplicativo', function () {
  it('Deve responder com status 200 e um Obj { ok: true }', async function () {
    const response = await requester.get('/test')
    expect(response.status).toBe(200);
    expect.objectContaining({ ok: expect.any(Boolean) });
  });
});