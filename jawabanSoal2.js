var input1 = 'hallo jesika24 selamat datang!';
var input2 = 'hallo anggun selamat datang!';
var input3 = 'hallo ** selamat datang!';
var input4 = 'hallo Mariage889120! selamat datang!';

function jawabanSoal2(string) {
  const splittedString = string.split('');
  const hasNumbers = splittedString.filter((str) => parseInt(str));

  const joinedNumber = hasNumbers.join('');

  if (hasNumbers.length > 0)
    return `Sistem kami menolak untuk inputan berisi angka ${joinedNumber}`;

  return `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${string}`;
}

jawabanSoal2(input1);