import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { response } = data;

    console.log('A fila executou');
    console.log(response);

    /** *
     * MODIFICAR AQUI !!!!
     */

    await Mail.sendMail({
      to: `${response.student.name} <${response.student.email}>`,
      subject: 'Solicitação Respondida',
      template: 'answer',
      context: {
        student: response.student.name,
        question: response.question,
        answer: response.answer,
      },
    });
  }
}

export default new AnswerMail();
