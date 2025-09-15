export default function (date) {
  if (!date) return '';
  const options = {
    day: '2-digit', month: 'long', year: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
}
