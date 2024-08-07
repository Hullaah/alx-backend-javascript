import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(([{ body }, { firstName, lastName }]) => {
    console.log(body, firstName, lastName);
  });
}
