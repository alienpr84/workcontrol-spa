
const idGenerated: string[] = [];

function chr4(): string {
  return Math.random().toString(16).slice(-4);
}

/**
 * Unique Id Generator if a recursive function that generate a random Id string with the
 * format UUID (Universally Unique IDentifier) and check if we have a duplicate Id.
 * 
 * NOTE: This format of 8 chars, followed by 3 groups of 4 chars, followed by 12 chars
 *       is known as a UUID and is defined in RFC4122 and is a standard for generating unique IDs.
 *       This function DOES NOT implement this standard. It simply outputs a string
 *       that looks similar. The standard is found here: https://www.ietf.org/rfc/rfc4122.txt
 */
export default function IdGenerator(): string {
  let uniqueId = `${chr4() + chr4()}-${chr4()}-${chr4()}-${chr4() + chr4() + chr4() + chr4()}`;

  if(idGenerated.indexOf(uniqueId) !== -1) {
    IdGenerator();
  }
  else {
    idGenerated.push(uniqueId);
  }

  return uniqueId;
}