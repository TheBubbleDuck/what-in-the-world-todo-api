import model from '../model';

export default function () {
  console.log('model', model);
  return Promise.resolve('fish');
}
