const soap = require('soap');
const wsdlUrl = 'http://www.dneonline.com/calculator.asmx?WSDL';

const valores = {
  intA: 5,
  intB: 8
};

const add = async () => {
  try {
    const client = await soap.createClientAsync(wsdlUrl);
    const result = await client.AddAsync(valores);
    if (result[0].AddResult !== undefined) {
      console.log('Resultado da adição:', result[0].AddResult);
    } else {
      console.error('Não foi possível encontrar o resultado da adição.');
    }
  } catch (err) {
    console.error('Erro:', err);
  }
};

add();
