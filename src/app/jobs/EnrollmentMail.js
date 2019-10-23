import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    console.log('A fila executou');

    /** *
     * MODIFICAR AQUI !!!!
     */

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Matrícula confirmada',
      template: 'enrollment',
      context: {
        provider: appointment.provider.name,
        appointment: appointment.provider.name,
        user: appointment.user.name,
        date: format(parseISO(appointment.date), "dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new EnrollmentMail();
