const catchError = require('../utils/catchError');
const sendEmail = require('../utils/sendEmail');

const getAll = catchError(async(req, res) => {
    return res.json(/* valor a retornar */)
});

const testingEmail = catchError(async(req, res) => {
  await sendEmail({
    to: "andres.mendoza@academlo.com",
    subject: "Probando emails desde node",
    html: `
      <h1>Probando emails</h1>
      <b>Andres</b>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati deserunt harum quas mollitia totam, repudiandae animi nihil aperiam pariatur modi adipisci voluptates distinctio. Qui voluptas, obcaecati optio et aliquam odit!
      </p>
    `
  })
  return res.json("enviando email");
});

const portfolioEmail = catchError(async(req, res) => {
  const { name, email, phone, message } = req.body;
  await sendEmail({
    to: "andres.mendoza@academlo.com",
    subject: "Email desde el portafolio",
    html: `
      <h1>${name} te escribió desde tu portafolio</h1>
      <p>${message}</p>
      <ul>
        <li><b>Email: </b>${email}</li>
        <li><b>Phone: </b>${phone}</li>
      </ul>
    `
  })
  return res.json("Email enviado");
})

module.exports = {
    getAll,
    testingEmail,
    portfolioEmail,
}