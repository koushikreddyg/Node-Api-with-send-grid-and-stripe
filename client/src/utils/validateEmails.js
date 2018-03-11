const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default emailList => {
  let emails = emailList;
  if (emails[emails.length - 1] === ',') {
    emails = emails.substring(0, emails.length - 2);
  }
  let invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`;
  }
  return;
};
