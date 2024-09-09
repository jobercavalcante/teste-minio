const mime = require("mime-types");

// Exemplo de string Base64
//const base64String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."; // Exemplo truncado

// Função para obter a extensão a partir de uma string Base64
function getExtensionFromBase64(base64) {
  // Extrair o tipo MIME do cabeçalho da string Base64
  const mimeType = base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

  if (mimeType && mimeType.length) {
    // Obter a extensão do arquivo usando o mime-types
    const extension = mime.extension(mimeType[1]);
    return extension;
  }

  // Caso não encontre o tipo MIME, retorna nulo
  return null;
}

// Chamando a função
//const extension = getExtensionFromBase64(base64String);

//console.log("A extensão do arquivo é:", extension); // Ex: 'png'

module.exports = { getExtensionFromBase64 };
