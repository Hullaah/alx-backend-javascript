import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [
    signUpUser(firstName, lastName).then((value) => ({ status: 'fulfilled', value })),
    uploadPhoto(fileName).catch((err) => ({ status: 'rejected', value: err.toString() })),
  ];
  return Promise.all(arr);
}
