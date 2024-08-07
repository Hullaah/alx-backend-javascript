export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({ status: 200, body: 'success' });
  }
  return Promise.reject(Error('The fake API is not working currently'));
}
