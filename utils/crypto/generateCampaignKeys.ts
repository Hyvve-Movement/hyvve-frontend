/**
 * Generates an RSA key pair for campaign data encryption
 * @returns Object containing the public key as Uint8Array and the private key
 */
export async function generateCampaignKeys() {
  // Generate RSA key pair
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: 'RSA-OAEP',
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]), // 65537
      hash: 'SHA-256',
    },
    true, // extractable
    ['encrypt', 'decrypt']
  );

  // Export public key to raw format
  const publicKeyBuffer = await window.crypto.subtle.exportKey(
    'spki',
    keyPair.publicKey
  );

  // Export private key to store securely
  const privateKeyBuffer = await window.crypto.subtle.exportKey(
    'pkcs8',
    keyPair.privateKey
  );

  // Convert public key to Uint8Array for the contract
  const publicKeyArray = new Uint8Array(publicKeyBuffer);

  // Convert private key to base64 string for storage
  const privateKeyArray = new Uint8Array(privateKeyBuffer);
  const privateKeyBase64 = btoa(
    Array.from(privateKeyArray, (byte) => String.fromCharCode(byte)).join('')
  );

  return {
    publicKey: publicKeyArray,
    privateKey: privateKeyBase64,
  };
}
