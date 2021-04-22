//
module.exports = {
  env: {
    SECRET_COOKIE_PASSWORD: 'complex_password_at_least_32_characters_long',
    CSRF_SECRET : 'secret1234',
    BASE_URL: "http://localhost:3000",
    SMTP_HOST : "smtp.test.com",
    SMTP_PORT : 465,
    SMTP_SECURE : true,
    SMTP_AUTH_USER : "user123",
    SMTP_AUTH_PASS : "123",
    SEND_MAIL_ADDRESS : "hoge@test.com"
  },
}
