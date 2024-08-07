import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [
    signUpUser(firstName, lastName).then((value) => ({ status: 'fulfilled', value })),
    uploadPhoto(fileName).catch((value) => ({ status: 'rejected', value })),
  ];
  return Promise.all(arr);
}
