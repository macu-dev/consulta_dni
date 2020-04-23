class API {
  constructor(token){
    this.token = token;
  }

  async consultar(valor){
    const url = `https://dniruc.apisperu.com/api/v1/dni/${valor}?token=${this.token}`;

    const respuesta = await fetch(url);

    return await respuesta.json();
  }
}